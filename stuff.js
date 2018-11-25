var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

/* Other code.js
//Sample 1 - Creating a module
var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));

//Sample 2 - Using Events
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent','the event was emitted');

//Sample 3 - Using Events
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');


//Sample 4 - Read and Write Files
var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

//Sample 5 - Creating and removing directories
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');    
});
*/