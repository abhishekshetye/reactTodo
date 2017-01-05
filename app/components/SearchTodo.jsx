var React = require('react');


var SearchTodo = React.createClass({

	render: function(){

		return (
			<div>
				<form>
					<input type='text' placeholder="Search Todo"/>
				</form>
			</div>
			);

	}

});

module.exports = SearchTodo;