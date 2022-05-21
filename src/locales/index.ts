/*
 * @Author: 周顺顺 idioticzhou@foxmail.com
 * @Date: 2022-05-09 15:21:50
 * @LastEditors: 周顺顺 idioticzhou@foxmail.com
 * @LastEditTime: 2022-05-20 13:48:29
 * @FilePath: /reject-996/src/locales/index.ts
 * @Description: 多语言模块设置
 */
import { App } from 'vue';
import { createI18n, I18nOptions } from 'vue-i18n';

export let i18n: ReturnType<typeof createI18n>;

/**
 * @param {Record<string, Record<string, any>>} msg 文件模块
 * @param {string} prefix 指定语言类型
 * @returns Record<string, any>>
 */
export function genMessage(
  msg: Record<string, Record<string, any>>,
  prefix: string,
): Record<string, any> {
  const obj: Record<string, any> = {};
  Object.keys(msg).forEach((key) => {
    const fileModule = msg[key].default;
    const fileName = key.replace(`./${prefix}/`, '').replace('.ts', '');
    obj[fileName] = fileModule;
  });
  return obj;
}

function getAllMessage() {
  const list = import.meta.globEager('./langs/**.ts');
  let messages: Record<string, any> = {};
  Object.keys(list).forEach((key) => {
    const name = key.replace('./langs/', '').replace('.ts', '');
    messages = {
      ...messages,
      [name]: list[key].default?.message ?? {},
    };
  });
  return messages;
}

async function createI18nOptions(): Promise<I18nOptions> {
  const locale = window.navigator.language;
  const messages = getAllMessage();
  return {
    locale,
    messages,
  };
}

export const setupI18n = async (app: App<Element>) => {
  const option = await createI18nOptions();
  i18n = createI18n(option);
  app.use(i18n);
};
