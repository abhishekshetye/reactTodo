
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

	it('should toggle completed value when handleToggle is called', ()=>{
		var todoData = {
			id: 11,
			text: 'Features',
			createAt: 0,
			completed: false,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
	});

	it('when toggle from true to false completedAt get removed', ()=>{
		var todoData = {
			id: 11,
			text: 'Features',
			createAt: 0,
			completed: false,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completedAt).toNotEqual(undefined);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completedAt).toEqual(undefined);
		
	});
});

