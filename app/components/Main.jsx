var React = require('react');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import  SearchTodo from 'SearchTodo'


var uuid = require('node-uuid');
var moment = require('moment');

var Main = React.createClass({

	render: function(){

		return (
			<div>
				<h1 className="page-title">Todo App </h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 small-5">
						<div className="container">
							<SearchTodo/>
							<TodoList/>
							<AddTodo />
						</div>
					</div>
				</div>
			</div>
			);

	}

});

module.exports = Main;