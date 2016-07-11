import React from 'react'

var InboxView = React.createClass({

	getInitialState: function() {
		return {
			coll: this.props.coll
		}
	},

	componentWillMount: function() {
		this.state.coll.on('sync',()=>{
			this.setState({
				coll: this.state.coll
			})
		})
	},

	render: function() {
		return (
			<div class="inboxView">
				<a href="#home">home</a>
				<SearchForm />
				<Inbox coll={this.props.coll} />
			</div>
			)
	}
})

var Inbox = React.createClass({
	_makeMsg: function(record) {
		return <Msg record={record} />
	},

	render: function() {
		return (
			<div className="inbox">
				{this.props.coll.map(this._makeMsg)}
			</div>
			)
	}
})

var Msg = React.createClass({
	render: function() {
		return (
			<div className="msg">
				<p>to: {this.props.record.get('to')}</p>
				<p>from: {this.props.record.get('from')}</p>
				<p>{this.props.record.get('content')}</p>
			</div>
			)
	}
})

var SearchForm = React.createClass({
	render: function() {
		return (
			<div class="searchForm">
				<input name="to" placeholder="to"></input>
				<input name="from" placeholder="from"></input>
			</div>
			)
	}
})


export default InboxView