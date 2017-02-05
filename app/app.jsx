

var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

var actions = require('actions');
var store = require('configureStore').configure();


store.subscribe(() => {
	console.log('new state', store.getState())
})

store.dispatch(actions.addTodo('clean the yard'))
//store.dispatch(actions.setSearchText('yard'))
//store.dispatch(actions.toggleShowCompleted())

$(document).ready(function($) {
    $(document).foundation();
});

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
<Provider store={store}>
	<Main/>
</Provider> ,
document.getElementById('root')
);
