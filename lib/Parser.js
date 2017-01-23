const EventEmitter = require("events");

class Parser extends EventEmitter {
	constructor() {
		super();

		this.buffer = "";
	}

	append(data) {
		this.buffer += data;

		const messages = this.buffer.split("\n");
		this.buffer = messages.pop();

		messages.forEach(json => {
			const message = JSON.parse(json);

			if(typeof message == "object") {
				this.emit("message", message);
			}
		});
	}
};

module.exports = Parser;
