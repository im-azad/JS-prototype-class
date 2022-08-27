class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	work() {
		console.log('work is playing cricket!!');
	}
}

class Cricketer extends Person {
	constructor(name, age, country, type) {
		super(name, age);
		this.country = country;
		this.type = type;
	}
	play() {
		console.log(`${this.name} is playing`);
	}
}

const sakib = new Cricketer('Sakib', 28, 'Bangladesh');
sakib.work();
sakib.play();
console.log(sakib.country);
