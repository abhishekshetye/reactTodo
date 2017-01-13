
var $ = require('jquery');

module.exports = {
	setTodos: function(todos){
		if($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},

	getTodos: function(){
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try{
			todos = JSON.parse(stringTodos);
		}catch(e){

		}

		return $.isArray(todos) ? todos : [];
	},

	filterTodos: function(todos, showCompleted, searchText){
		var filteredTOdos  = todos;

		//filter by show completed
		filteredTOdos = filteredTOdos.filter((todo)=>{
			return !todo.completed || showCompleted;
		});

		var lowersearch = searchText.toLowerCase();
		//filter by searchtext
		filteredTOdos = filteredTOdos.filter((todo)=>{
			var text = todo.text.toLowerCase();
			if(text.indexOf(lowersearch) != -1){
				return todo;
			}
		});

		//sort todos with non completed first
		filteredTOdos.sort((a,b)=>{
			if(!a.completed && b.completed){
				return -1;
			}
			if(a.completed && !b.completed){
				return 1;
			}
			return 0;
		});
		return filteredTOdos;
	}

};