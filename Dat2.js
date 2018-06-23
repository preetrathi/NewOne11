var person = new Object();
person["firstname"] = "Preet";
person["lastname"] = "Rathi";
person.name = "preet";
person.lname = "Rathi";

var fnproperty = "firstname";

console.log(person.name);
console.log(person.lname);
console.log(person);
console.log(person[fnproperty]);
console.log(person.lastname);
console.log(person.firstname);

person.address = new Object();
person.address.street = "no 4";
person.address.city = "Hyderabad";
person.address.state = "Sindh";
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);