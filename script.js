// complete this js code
function Person(name, age) {
	constructor(name,age){
		this.name = name;
		this.ag = age;
	}

	greet(){
		return `Hello, my name is ${this.name}, I am ${this.age} year old`.
	}
}

function Employee(name, age, jobTitle) {
	constructor(name,age,jobTitle){
		super(name,age)
		this.jobTitle = jobTitle;
	}

	jobGreet(){
		return `Hello, my name is ${this.name}, I am ${this.age} year old, and my job title 
		is ${this.jobTitle}`;
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
