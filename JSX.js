import React from "react";
function Book(props) {
	return (
		<div>
			<h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
			<h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
		</div>
	)
}

export default Book;

import React from "react";
import Book from "./Book";

function Library(props) {
	return (
		<div>
			<Book name="처음 만난 파이썬" numOfPage={300}/>
      <Book name="처음 만난 AMS" numOfPage={400}/>
      <Book name="처음 만난 리액트" numOfPage={500}/>
		</div>
	);
}

export default Library;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library form './chapter_03/Library';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Library />
	</React.StrictMode>
);

reportWebVitals();

import React from 'react';
function Book(props) {
	return React.createElement(
		'div',
		null,
		[
			React.createElement(
				'h1',
				null,
				`이 책의 이름은 ${props.name}입니다.`
			),
			React.createElement(
				'h2',
				null,
				`이 책은 총 ${props.numberOfPage}페이지로 이뤄져 있습니다.`
			)
		]
	)
}

export default Book;	
