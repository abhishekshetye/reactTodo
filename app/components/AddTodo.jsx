var React = require('react');


var AddTodo = React.createClass({


	addit: function(e){

		e.preventDefault();

		var a = this.refs.todo.value;
		if(a.length>0){
			this.refs.todo.value = '';
			this.props.getnewtodo(a);
		}else{
			this.refs.todo.focus;
		}

	},	


	render: function(){

		return (
			<div>
				<form onSubmit={this.addit}>
					<input type='text' ref="todo" placeholder="Enter todo text"/>
					<button className="button primary hollow">Enter</button>
				</form>
			</div>
			);

	}

});

module.exports = AddTodo;