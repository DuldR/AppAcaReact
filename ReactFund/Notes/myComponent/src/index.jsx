import React from 'react';
import ReactDOM from 'react-dom';

// Creates a re-usable `SimpleComponent` class.
class SimpleComponent extends React.Component {
	render() {
		return (
			<h1> Hi</h1>
		);
	}
}

// Renders a SimpleComponent into #root.
document.addEventListener('DOMContentLoaded', function() {
	const root = document.querySelector('#root');
	ReactDOM.render(<SimpleComponent />, root);
});
