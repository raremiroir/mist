import type { StorybookConfig } from '@storybook/sveltekit';
const config: StorybookConfig = {
  	stories: ['../src/lib/components/**/*.stories.@(js|jsx|ts|tsx)'],
  	staticDirs: ['../static'],
  	addons: [
		'@storybook/addon-links', 
		'@storybook/addon-essentials', 
		'@storybook/addon-svelte-csf', 
		'@storybook/addon-interactions', 
		'@storybook/addon-mdx-gfm'
	],
  	features: {
    // postcss: true,
    // svgo: true,
  	},
  	framework: {
    	name: '@storybook/sveltekit',
    	options: {}
  	},
  	docs: {
    	autodocs: 'tag'
  	}
};
export default config;