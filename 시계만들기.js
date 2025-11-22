import React from "react";

function Clock(props) {
	return (
		<div>
			<h1>안녕, 리액트!</h1>
			<h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
		</div>
	);
}

export default Clock;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
	root.render(
		<React.StrictMode>
			<Clock />
		</React.StrictMode>
	);
}, 1000);

reportWebVitals();
