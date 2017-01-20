var expect = require('expect');


var actions = require('actions');

describe('Actions', ()=> {
	it('should generate search text action', ()=>{
		 var action = {
		 	type: 'SET_SEARCH_TEXT',
		 	searchText: 'Some Search Text'
		 };

		 var res = actions.setSearchText('Some Search Text');
		expect(res).toEqual(action);
	});


	it('should generate add todo action', ()=>{
		var action = {
			type: 'ADD_TODO',
			text: 'MY text'
		}

		var res = actions.addTodo('MY text')
		expect(res).toEqual(action)
	})

	it('should toggle todo', ()=>{
		var action = {
			type: 'TOGGLE_TODO',
			id: 1
		}

		var res = actions.toggleTodo(action.id)
		expect(res).toEqual(action)
	})

	it('should toggle show completed', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}

		var res = actions.toggleShowCompleted()
		expect(res).toEqual(action)
	})
});


