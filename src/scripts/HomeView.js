import React from 'react'

var HomeView = React.createClass({
	render: function() {
		return (

			<div className="homeView">
				<a href='#messages/read'>view inbox</a>
				<a href='#messages/write'>compose message</a>
			</div>
			)
	}
})

export default HomeView