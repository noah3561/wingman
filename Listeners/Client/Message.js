const { Listener } = require("discord-akairo");

class MessageListener extends Listener {
	constructor() {
		super("message", {
			emitter: "client",
			event: "message"
		});
	};
	
	exec(message) {
	};
};

module.exports = MessageListener;