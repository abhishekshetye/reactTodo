var React = require('react');


var SearchTodo = React.createClass({

	handleSearch: function(){

		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},	

	render: function(){

		return (
			<div className="container__header">
				<div>
					<input type='text' ref="searchText" onChange={this.handleSearch} placeholder="Search Todo"/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
						Show completed
					</label>
				</div>
			</div>
			);

	}

});

module.exports = SearchTodo;