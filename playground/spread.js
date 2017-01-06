
function add(a,b){
	return a+b;
}

console.log(add(3,1));

var toAdd = [9,5];

console.log(add(...toAdd));


// var a = ['a','b'];
// var c = ['c', 'd'];

// var final = [3, ...a, ...c];

// console.log(final)

function greet(obj){
	console.log('hi you are ' + obj.name + ' and you are ' + obj.age + ' years old' );	
}

var names = [ { name: 'Eminem', age: 42},
			{ name: 'Abhishek', age: 20},
			{ name: 'Sharapova', age: 21} ];

	
names.map((obj)=>{
	greet(obj);
});

//	greet(...names);
