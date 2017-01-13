
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('Main');

describe('TodoApp', ()=>{
	it('should exists',  () => {
		expect(TodoApp).toExist();
	});


	it('should toggle completed value when toggle called', ()=>{
		var todoData = {
			id: 11,
			text: 'Test',
			completed: false
		};
		var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [todoData]});
		expect(todoapp.state.todos[0].completed).toBe(false);

		todoapp.handleToggle(11);
		expect(todoapp.state.todos[0].completed).toBe(true);


	});
});

