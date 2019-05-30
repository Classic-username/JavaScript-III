/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: you said this without an argument or something on this side of.func, so this pointed to the window.

* 2. Implicit Binding: conveniently defined this within your function, when you call the function outside with an argument you have ex: me.sayName(), this is pointing at the me in front of the dot.

* 3. New binding: Constructor functions, capitalized for readability. new makes a new object and saves the this. to the arguments you pass in.

* 4. Explicit Binding: uses call, apply, and bind. Call and apply immediately invoke the function and you pass parameters into .call or .apply that "this" points to. Bind is assigned to a const/var/let and saves the function and the parameter for use at a later point. call(this, takes, individual, arguments) while apply(this,[can take an array for args])
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let sayName = function(name){
    console.log(this.name);
}

sayName();

//I didn't pass an argument into name, so this.name went to the window and reads as undefined in the console.

// Principle 2

// code example for Implicit Binding

let me = {
    name: "Joshua",
    age: 23,
    sayName: function(){
        console.log(this.name)
    }
}

me.sayName()


// Principle 3

// code example for New Binding

let Pets = function(color, type, name){
    this.color = color;
    this.type = type;
    this.name = name;
}

let dog = new Pets("brown", "Dog", "Woofie")

console.log(dog)

// Principle 4

// code example for Explicit Binding

let newSayName = function(){
    console.log(`My name is ${this.name}`)
}

let newMe = {
    name: 'Joshua',
    age: 24
}

newSayName.call(newMe);