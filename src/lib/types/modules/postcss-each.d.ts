declare module 'postcss-each' {
  import { Plugin, PluginCreator } from 'postcss';

  const plugin: PluginCreator;
  export = plugin;
}