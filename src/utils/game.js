let processGameCssMd = ()=>{
  let strategy_left = document.getElementById("strategy_left")
  let gameRoot = document.getElementById("gameRoot")
  gameRoot.className ="gameMd"
  strategy_left.appendChild(gameRoot) 
}

let processGameCssLogin = ()=>{
  document.getElementById("gameRoot").className ="gameLogin"
}

let processGameCss = {
  "helloworld":processGameCssMd,
  "hello":processGameCssLogin
}

let gameFloag = 0;
const boot = (handleStart,sceneName) => {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;

    var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
    var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
    var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;
    function setLoadingDisplay() {
      // // // Loading splash scene
      var splash = document.getElementById("splash");
      var progressBar = splash.querySelector(".progress-bar span");
      onProgress = function (finish, total) {
        var percent = (100 * finish) / total;
        if (progressBar) {
          progressBar.style.width = percent.toFixed(2) + "%";
        }
      };
      cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        splash.style.display = "none";
      });
    }

    var onStart = function () {
    window.GAME_FLAG = sceneName;
    if(handleStart){
        handleStart()
    }
      cc.view.enableRetina(true);
      cc.view.resizeWithBrowserSize(true);

      if (cc.sys.isBrowser) {
        setLoadingDisplay();
      }

      if (cc.sys.isMobile) {
        if (settings.orientation === "landscape") {
          cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        } else if (settings.orientation === "portrait") {
          cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        }
        cc.view.enableAutoFullScreen(
          [
            cc.sys.BROWSER_TYPE_BAIDU,
            cc.sys.BROWSER_TYPE_BAIDU_APP,
            cc.sys.BROWSER_TYPE_WECHAT,
            cc.sys.BROWSER_TYPE_MOBILE_QQ,
            cc.sys.BROWSER_TYPE_MIUI,
            cc.sys.BROWSER_TYPE_HUAWEI,
            cc.sys.BROWSER_TYPE_UC,
          ].indexOf(cc.sys.browserType) < 0
        );
      }

      // Limit downloading max concurrent task to 2,
      // more tasks simultaneously may cause performance draw back on some android system / browsers.
      // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
      if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
        cc.assetManager.downloader.maxConcurrency = 2;
        cc.assetManager.downloader.maxRequestsPerFrame = 2;
      }

      var launchScene = sceneName||settings.launchScene;
      var bundle = cc.assetManager.bundles.find(function (b) {
        return b.getSceneInfo(launchScene);
      });

      bundle.loadScene(
        launchScene,
        null,
        onProgress,
        function (err, scene) {
          if (!err) {
            cc.director.runSceneImmediate(scene);
            if (cc.sys.isBrowser) {
              // show canvas
              var canvas = document.getElementById("GameCanvas");
              canvas && (canvas.style.visibility = "");
              var div = document.getElementById("GameDiv");
              if (div) {
                div.style.backgroundImage = "";
              }
              console.log(
                "Success to load scene: " + launchScene
              );
            }
          }
        }
      );
    };

    var option = {
      id: "GameCanvas",
      debugMode: settings.debug
        ? cc.debug.DebugMode.INFO
        : cc.debug.DebugMode.ERROR,
      showFPS: settings.debug,
      frameRate: 60,
      groupList: settings.groupList,
      collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({
      bundleVers: settings.bundleVers,
      remoteBundles: settings.remoteBundles,
      server: settings.server,
    });

    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb(err) {
      if (err) return console.error(err.message, err.stack);
      count++;
      if (count === bundleRoot.length + 1) {
        cc.assetManager.loadBundle(MAIN, function (err) {
          if (!err) cc.game.run(option, onStart);
        });
      }
    }

    cc.assetManager.loadScript(
      settings.jsList.map(function (x) {
        return "src/" + x;
      }),
      cb
    );

    for (var i = 0; i < bundleRoot.length; i++) {
      cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
  };


export const game = function (sceneName) {
    return (new Promise((resolve) => {
        if(window.GAME_FLAG){
          cc.director.loadScene(sceneName,()=>{
            
            if(sceneName === "hello"){
              cc.game.restart()
            }
            resolve()
          })
          return 
        }
        function loadScript(moduleName, cb) {
            function scriptLoaded() {
                document.body.removeChild(domScript);
                domScript.removeEventListener("load", scriptLoaded, false);
                cb && cb();
            }
            var domScript = document.createElement("script");
            domScript.async = true;
            domScript.src = moduleName;
            domScript.addEventListener("load", scriptLoaded, false);
            document.body.appendChild(domScript);
        }
        if (
            gameFloag === 0 &&
            !document.getElementById("Cocos2dGameContainer")
        ) {
            gameFloag = 1;
            loadScript(
                "./web-mobile/src/settings.js",
                function () {
                    {
                        loadScript(
                            "./web-mobile/main.js",
                            function () {
                                {
                                    loadScript(
                                        "./web-mobile/cocos2d-js.js",
                                        function () {
                                            {
                                                boot(resolve,sceneName);
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            );
        } else {
            cc.game.resume()
            resolve()
        }
    })).then(()=>{
      return new Promise((resolve)=>{
        document.getElementById("gameRoot").style.display = "block";
        processGameCss[sceneName]()
        var ev = new Event("resize", {"bubbles":true, "cancelable":true});
        window.dispatchEvent(ev);
        resolve()
        cc.game.resume()
      })
    })
}
