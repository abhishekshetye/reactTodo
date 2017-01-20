

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var actions = require('actions');
var store = require('configureStore').configure();


store.subscribe(() => {
	console.log('new state', store.getState())
})

store.dispatch(actions.addTodo('clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

$(document).ready(function($) {
    $(document).foundation();
});

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
	<Route path='/' component={Main}>
	
	</Route>
</Router>,
document.getElementById('root')
);
