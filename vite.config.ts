import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@types/*': './src/types',
			'Components/*': './src/components',
			'Core/*': './src/core',
			'Hooks/*': './src/hooks',
			'Assets/*': './src/core/assets',
			'Constants/*': './src/core/constants',
			'Helpers/*': './src/core/helpers',
			'Services/*': './src/core/services',
			'Contexts/*': './src/contexts',
			'Pages/*': './src/pages',
		},
	},
});
