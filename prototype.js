// parent function
function Person(name, age) {
	// parent class
	this.name = name;
	this.age = age;
}

// person prototype declare
Person.prototype = {
	eat: function () {
		console.log(`${this.name} is eating`);
	},
};

// child function
function Cricketer(name, age, country, type) {
	// connect to the parent function to call() method and argument pass this.
	//sub class
	Person.call(this);
	this.name = name;
	this.age = age;
	this.country = country;
	this.type = type;
}
// Cricketer prototype declare
Cricketer.prototype = {
	play() {
		console.log(`${this.name} is playing cricket`);
	},
};

// Person prototype insert in Cricketer prototype
// so that child can access  parent prototype

Cricketer.prototype = Object.create(Person.prototype);

// reset to  Cricketer prototype constructor to access all prototype
Cricketer.prototype.constructor = Cricketer;

const sakib = new Person('Sakib', 28);
const Tamim = new Cricketer('Tamim', 28);
Tamim.eat();
