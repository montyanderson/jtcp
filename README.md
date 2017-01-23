# jtcp
JSON over TCP.

## Usage

``` javascript
const net = require("net");
const jtcp = require("jtcp");

const server = net.createServer(socket => {
	const parser = new jtcp.Parser();

	socket.on("data", data => parser.append(data));

	parser.on("message", message => {
		console.log("New message!", message);
	});
}).listen(3000);

const socket = net.connect(3000);

socket.write(jtcp.stringify({ name: "Bob" }));
socket.write(jtcp.stringify({ name: "John"}));
```

```
$ node test.js
New message! { name: 'Bob' }
New message! { name: 'John' }
```

## Schema

A single JSON-encoded Javascript Object, followed by a linebreak.

```
{"name":"Monty"}\n
```
