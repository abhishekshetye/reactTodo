
var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', ()=>{
		expect(TodoAPI).toExist();
	});


	describe('setTodos', ()=>{
		it('should set valid todos array', ()=>{
			var todos = [{
				id: 23,
				text: 'Test',
				completed: false
			}];
			TodoAPI.setTodos(todos);

			var actualTodos =  JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);
		});
		it('should not set invalid todos array', ()=>{

			var badTodos = {
				a: 'b'
			};
			TodoAPI.setTodos(badTodos);
			expect(localStorage.getItem('todos')).toEqual(null);
		});
	});


	describe('getTodos', ()=>{
		it('should return empty array for bad local storage data', ()=>{
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid array in local Storage', ()=>{
			var todos = [{
				id: 23,
				text: 'Test',
				completed: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});	
	});


	describe('filter todos', ()=>{
		var todos = [{
			id:1,
			text:'sometext',
			completed: true
		},{
			id:2,
			text:'eminem yo',
			completed: false
		},{
			id:3,
			text:'what the fuck Yo',
			completed: true
		}];

		it('should return all items if showcompleted is true', ()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return non-completed todos if showcompleted is false', ()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', ()=>{
			var filteredtodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredtodos[0].completed).toBe(false);
		});

		it('should return todos matching search text', ()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'yo');
			expect(filteredTodos.length).toBe(2);
		});


	});

});





