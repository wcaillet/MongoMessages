import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {

	const MsgRouter = Backbone.Router.extend({
		routes: {
			"myMessages/all": "showMsgs",
			"writeMessage": "showMsgEditor",
			"home": "showHome",
			"*catchall": "redirect"
		},

		redirect: function() {
			location.hash = "home"
		},

		home: function() {
			
		}

	})
}

app()