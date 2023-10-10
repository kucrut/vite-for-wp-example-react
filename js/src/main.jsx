import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById( 'my-app' );

if ( el ) {
	ReactDOM.createRoot( el ).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
