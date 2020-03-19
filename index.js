// constant vars
const firstName = "Hamza";

const lastName = 'Rauf'

const val = 42
// a const arr and arrays could have any type of elements in a single array unlike c/c++
const arr = [
  'string',
  42,
  function(){console.log("Hello from func")}
]

//calling a function which is inside an array
arr[2]()

//simple loop
for (let i =0; i<arr.length;i++)
{
  //console.log is  equal to cout
  console.log(arr[i])
}

// dynamic typing first string then boolean
var newVar = "Rosh"

  console.log(newVar)

  newVar  = true;
  console.log(newVar)

// typecasting

const y = 100;

const explicitConversion = String(y);

const implicitConversion = y + "";

// equality operator

if(y===implicitConversion)
    console.log("Same values same types")
else
    console.log("Same values different types")

// check the type of variable

console.log(typeof(2))


//objects stored  

const object = {
  name : 'Hamza',
  address : {
    street : 66,
    1:'one'
  } 
}

console.log(object.address[1])

// object referencing

const object2 = object;

/*object.name = 'Rosh'
object.address[1] = 'two'

console.log(object2.name)

console.log(object2.address[1])*/

// deep copying function so that nested objects are copied as well

function deepCopy(obj)
{
  const keys = Object.keys(obj);

  const newObj = {};

  
  for (let i=0 ; i<keys.length ; i++)
  {
    const key = keys[i]
    if(typeof(obj[key])==='object')
    {
        newObj[key] = deepCopy(obj[key]);
    }
    else{
        newObj[key] = obj[key]
    }
  }

  return newObj
}


// object shallow copying

/*const object3 = Object.assign({},object);

object.name = 'Rosh'
object.address[1] = 'two'

console.log(object3.name)

console.log(object3.address[1])*/

// object deep copying

const object4 = deepCopy(object);
object.name = 'Rosh'
object.address[1] = 'two'
console.log(object4.name)

console.log(object4.address[1])

// Prototypal Inheritance functions that come with both primitive and non primitive 
//but with primitive they are used via wrappers

//const h = 42.toString();// not allowed

const g = y.toString();
console.log(g);


// scope

function scopeChecker()
{
  let varscope = 2;
console.log(varscope);

}


scopeChecker();

for (var i=0;i<4;i++)
{
  console.log(i);

}

  console.log("Accessing i's value outside "+i);

console.log("var being access before "+myVar);

  var myVar  =3; // can declare var as many times but let only once with same name

   var myVar = 4;
sameLet() //hoisted
console.log(typeof(thisisNotHoisted))
   function sameLet()
   {
     let mylet = 5;
     console.log ("Let in function "+ mylet)
   }

   let mylet =2;

console.log(myVar);
console.log("Let value in main "+mylet);

var thisisNotHoisted = function (){
  console.log("It will work");
}

