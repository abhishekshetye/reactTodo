var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');
var uuid = require('node-uuid');

var Main = React.createClass({

	getInitialState() {
		
		return {
			showCompeleted: false,
			searchText: '',
			todos: [

			{
				id: uuid(),
				text: 'walk the dog',
				completed: false
			},{
				id: uuid(),
				text: 'walk the cat',
				completed: true
			}

			]
		};

	},

	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id ){
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({
			todos: updatedTodos
		});
	},

	handleSearch: function(showCompeleted, searchText){
		this.setState({
			showCompeleted: showCompeleted,
			searchText: searchText.toLowerCase()
		});
	},

	handleTodo: function(a){
		
		//add a to the list and render in todolist
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: a,
					completed: false
				}
			]
		})
	},

	render: function(){

		var {todos} = this.state;

		return (
			<div>
				<SearchTodo onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo getnewtodo={this.handleTodo}/>
			</div>
			);

	}

});

module.exports = Main;