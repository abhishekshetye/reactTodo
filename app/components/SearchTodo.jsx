var React = require('react');
var {connect} = require('react-redux')
var actions = require('actions');


export var SearchTodo = React.createClass({

	

	render: function(){

		var {dispatch, showCompleted, searchText} = this.props;


		return (
			<div className="container__header">
				<div>
					<input type='text' ref="searchText" onChange={() => {
						var stext = this.refs.searchText.value;
						dispatch(actions.setSearchText(stext));
					}} value={searchText} placeholder="Search Todo"/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
							dispatch(actions.toggleShowCompleted())
						}}/>
						Show completed
					</label>
				</div>
			</div>
			);

	}

});


export default connect(
	(state) => {
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		}
	}
	)(SearchTodo)