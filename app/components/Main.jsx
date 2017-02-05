var React = require('react');

import TodoList from 'TodoList'
//var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

var Main = React.createClass({

	getInitialState() {
		
		return {
			showCompeleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};

	},


	componentDidUpdate(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);	
	},



	getCompletedasks: function(){
		var count=0;
		this.state.todos.map((todo) => {
			count =  todo.completed? count + 1 : count;
		});
		return count + " tasks completed";
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
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		})
	},

	render: function(){

		var {todos, showCompeleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompeleted, searchText);


		return (
			<div>
				<h1 className="page-title">Todo App </h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 small-5">
						<div className="container">
							<SearchTodo onSearch={this.handleSearch}/>
							<TodoList/>
							<AddTodo getnewtodo={this.handleTodo}/>
						</div>
					</div>
				</div>
			</div>
			);

	}

});

module.exports = Main;