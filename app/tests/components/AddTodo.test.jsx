var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectedAddTodo, {AddTodo} from 'AddTodo';


describe('AddTodo', ()=>{

	it('should exist', ()=>{
		expect(AddTodo).toExist();
	})

	it('should dispatch ADD_TODO when valid todo text', ()=>{
		var todoText = 'Do android programming'
		var action = {
			type: 'ADD_TODO',
			text: todoText
		}
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
		var $el = $(ReactDOM.findDOMNode(addTodo))

		addTodo.refs.todo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	})


	it('should not dispatch ADD_TODO when invalid todo text', ()=>{
		var todoText = ''
		var action = {
			type: 'ADD_TODO',
			text: todoText
		}
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
		var $el = $(ReactDOM.findDOMNode(addTodo))

		addTodo.refs.todo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	})
})