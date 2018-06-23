var person = {
	name: {
		firstname: "Preet",
		middlename: "Kumar",
		lastname: "Maheshwari"
	},
	address: {
		street: "banglow no 101 marvi town",
		city: "Hyderabad",
		State: "Sinndh",
	}
};
	console.log(person.name);
	console.log(person.address);
	function greet(me){
		console.log("hi" + me.name.firstname);
	}
	greet(person);
	
	greet({
		firstname: "preet",
		lname : "rathi"
	});
