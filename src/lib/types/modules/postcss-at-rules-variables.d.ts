declare module 'postcss-at-rules-variables' {
   import { PluginCreator } from 'postcss';

   const plugin: PluginCreator;
   export = plugin;
}