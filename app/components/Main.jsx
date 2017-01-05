var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');

var Main = React.createClass({

	getInitialState() {
		
		return {
			todos: [

			{
				id:1,
				text: 'walk the dog'
			},{
				id:2,
				text: 'walk the cat'
			}

			]
		};

	},

	handleTodo: function(a){
		alert(a);
		//add a to the list and render in todolist
	},

	render: function(){

		var {todos} = this.state;

		return (
			<div>
				<SearchTodo />
				<TodoList todos={todos} />
				<AddTodo getnewtodo={this.handleTodo}/>
			</div>
			);

	}

});

module.exports = Main;