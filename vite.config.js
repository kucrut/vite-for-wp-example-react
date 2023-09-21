// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import { wp_globals } from '@kucrut/vite-for-wp/utils';
import create_config from '@kucrut/vite-for-wp';
import external_globals from 'rollup-plugin-external-globals';
import react from '@vitejs/plugin-react';

export default defineConfig( ( { command } ) => {
	if ( command === 'serve' ) {
		return create_config( 'js/src/main.jsx', 'js/dist', {
			plugins: [ react() ],
		} );
	}

	return create_config( 'js/src/main.jsx', 'js/dist', {
		plugins: [
			react(),
			external_globals( wp_globals(), {
				include: [ '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx' ],
			} ),
		],
		build: {
			rollupOptions: {
				external: [ 'react', 'react-dom' ],
				output: {
					globals: wp_globals(),
				},
			},
		},
	} );
} );
