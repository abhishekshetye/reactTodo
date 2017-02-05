var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({


	addit: function(e){

		e.preventDefault();
		var {dispatch} = this.props;
		var a = this.refs.todo.value;

		if(a.length>0){
			this.refs.todo.value = '';
			dispatch(actions.addTodo(a));
		}else{
			this.refs.todo.focus;
		}

	},	


	render: function(){

		return (
			<div className="container__footer">
				<form onSubmit={this.addit}>
					<input type='text' ref="todo" placeholder="Enter todo text"/>
					<button className="button primary expanded mybtton">Enter</button>
				</form>
			</div>
			);

	}

});

export default connect()(AddTodo);