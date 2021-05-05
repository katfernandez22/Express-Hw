const express = require('express');
const fruits = require('./fruits');
const app = express();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('This is groot');
});

app.get('/ping', (req, res) => {
  res.json('pong');
});

app.get('/greet/:name', (req, res) => {
  try {
    const { name } = req.params;
    res.send(`Hello, my name is ${name}!`);
  } catch (err) {
    res.send('Name not found! Please enter a name at end of link.');
  }
});

app.get('/five', (req, res) => {
  let array1to5 = [1, 2, 3, 4, 5];
  res.send(array1to5);
});

app.get("/evens/:n", (req, res) => {
	try {
		const { n } = req.params;

		let twos = [];

		for (let i = 0; i <= Number(n); i++) {
			if (i % 2 === 0) twos.push(i);
		}

		res.send(twos);
	} catch (e) {
		res.send(`Error, enter number as route.`, e.message);
	}
});

app.get("/namelength/:name", (req, res) => {
	try {
		const { name } = req.params;
		res.send(`The length of the name is: ${name.length}`);
	} catch (e) {
		res.send("Error, enter a valid name.", e.message);
	}
});

app.get("/fruits", (req, res) => {
	try {
		res.json(fruits);
	} catch (e) {
		res.send("Error retrieving fruits data.");
	}
});

app.get("/fruits/:name", (req, res) => {
	try {
		const { name } = req.params;

		let findFruit = fruits.filter((fruit) => {
			if (fruit.name.toLowerCase() === name.toLowerCase()) {
				return fruit;
			}
		});

		res.json(findFruit);
	} catch (e) {
		res.send("Error retrieving fruit.", e.message);
	}
});