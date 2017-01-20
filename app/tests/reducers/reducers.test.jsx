var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

	describe('SearchReducers', () => {

		it('should set searchtext', ()=>{
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText)
		})

	});

	describe('ShowCompletedReducer', () => {

		it('should showcompleted should flip', ()=>{
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}

			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true)
		})

	});

	describe('TodoReducers', () => {

		it('should add new todo', ()=>{
			var action = {
				type: 'ADD_TODO',
				text: 'walk the dog'
			}


			var res = reducers.todoReducer(df([]), df(action));

			expect(res.length).toEqual(1)
			expect(res[0].text).toEqual(action.text)
		})

		it('should toggle todo', ()=>{
			var action = {
				type: 'TOGGLE_TODO',
				id: 4
			}

			var obj = {
				id: 4,
				text: 'bla bla bla',
				completed: false,
				created_at: undefined,
				completedAt: undefined
			}


			var res = reducers.todoReducer(df([obj]), df(action));

			expect(res[0].completed).toEqual(true)
		})
	});

});