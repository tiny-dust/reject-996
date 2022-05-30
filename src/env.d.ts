/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

import 'vue-router';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue-router' {
  import type { Component, ComputedOptions, MethodOptions } from 'vue';

  interface RouteMeta {
    title?: string
    icon?: Component<any, any, any, ComputedOptions, MethodOptions>;
  }
}
