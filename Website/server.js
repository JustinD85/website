const express = req('express');
const mongoose = req('mongoose');
const bodyParser = req('body-parser');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Mongoose to MongoDB
mongoose.connect('mongodb://localhost/test');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log("We in there!!")
	let kittySchema = new mongoose.Schema({
		name:String
	});
	kittySchema.methods.speak = function () {
		let greeting = this.name
		? "Meow name is " + this.name
		: "I don't have a name";
		console.log(greeting);
	}
	var Kitten = mongoose.model('Kitten', kittySchema);
	var silence = new Kitten({name:'Silence'});
	console.log(silence.name); //'Silence'

});