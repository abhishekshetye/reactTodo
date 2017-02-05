var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectedSearchTodo, {SearchTodo} from 'SearchTodo'

describe('TodoSearch', ()=>{
	it('should exist', ()=>{
		expect(SearchTodo).toExist();
	})

	it('should dispatch SET_SEARCH_TEXT on input change', ()=>{
		var searchText = 'Dog';
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy} />)
		
		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(action);
	})

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
		var spy = expect.createSpy();
		var action = {
			type : 'TOGGLE_SHOW_COMPLETED'
		}
		var todoSearch = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy} />)

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(action);
	})

})