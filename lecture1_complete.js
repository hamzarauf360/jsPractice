
// Unexpected beahvior
/*function MyNotClosureFunc()
{
  const arr =[]

  for (var i=0;i<5;i++)
  {
    console.log("Value of i during loop is: "+i)
    arr.push(function (){console.log("My number is: "+i)});
  }

  return arr
}

const arr = MyNotClosureFunc();

arr[2]()*/

// closure

function Greeter(name,age)
{
  function greet()
  {
    console.log("Hello Mr/Ms. "+name+" you are "+age+" years old")
  }

  return greet
}


const greet = Greeter("Hamza",24)


greet()

// iife  = anon function gets invoked once and can then
// use its properties

const countt = (function()
{
  let count = 0;

  return {
    inc: function (){count = count+1},
    get: function(){console.log(count)},
  }
})();


countt.inc()
countt.get()
countt.inc()
countt.get()

// solving prbolem using iifee

function MyNotClosureFunc()
{
  const arr =[]

  for (var i=0;i<5;i++)
  {
    arr.push((function (x){ return function (){console.log("My number is: "+x)}})(i));
  }

  return arr
}

const arr = MyNotClosureFunc();

arr[3]()

// simple class replica
var name = "Hamza"
var age = 21

const user = (function(name,age){
      let my_name
      let my_age
      return {
          set_name: function(){my_name = name},
          set_age: function(){my_age = age},
          get_name:function(){console.log(name)},
      }


})(name,age);


user.set_name()
user.get_name()

// map  higher order function


const temp_arr = [1,2,3]


function addOne(num)
{
  return num+1;
}


temp_arr.map(addOne)

// filter  higher order function





function filteritout(num)
{
   if(num<=0)
   {
      return true;
   }
   return false
}


temp_arr.filter(filteritout)


// reduce 
function MultiplyIt(x,y)
{
   return x*y
}


//temp_arr.reduce(MultiplyIt)

// muimplementation of reduce

function reduce(arr,fn)
{
  let i =0;
  let num= arr[i] ;
  for ( ;i<arr.length-1;i++)
  {
    let val1 = num
    let val2  = arr[i+1] 
    num = fn(val1,val2)
  }
  return num
}

reduce(temp_arr,MultiplyIt)


// async function


function HighestPriority()
{
  console.log("I have the highest priority to run")
}
function ThirdPriority()
{
  console.log("I have the third priority to run")
}

function SecondPriority()
{
  console.log("I have the Second priority to run")
}


setTimeout(HighestPriority,1000)
setTimeout(SecondPriority,0)
ThirdPriority()


// Stack

function a()
{
  console.log("Hi from a")
}

function b()
{
  a()
    console.log("Hi from b")


}

function c()
{
  b()
    console.log("Hi from c")

}


c()


// Callbacks

/*firstaddition(2,function(firstreturnval,err){
    if(!err)
    {
      console.log("Got the val from frist function: "+ firstreturnval)
      secondaddition(firstreturnval,function(secondreturnval,err){
        if(!err)
        {
          console.log("Got the val from second function: "+ secondreturnval)
          thirdaddition(secondreturnval,function(thirdreturnval,err){
            if(!err)
            {
              console.log("Third val: "+thirdreturnval)
            }
          })
        }

      })
    }
})*/


 function firstaddition(value/*,callback*/)
 {
   //callback(value+2,false)
   return value+2
 }
 
 function secondaddition(value/*,callback*/)
 {
   //callback(value+2,false)
      return value+2

 }
 
 function thirdaddition(value/*,callback*/)
 {
   //callback(value+2,false)
      return value+2

 }

 // promises

 
 /*var promise  = new Promise (function(resolve,reject){
   resolve(4);
 })
 promise.then(firstaddition)
 .then(secondaddition)
 .then(thirdaddition)
 .then(function(response)
 {
   console.log("Third val is: "+response)
 })*/

 // Async await in es6 the future 

  async function getVal()
  {
    const funcval1 = await firstaddition(2)
    const funcval2 = await secondaddition(funcval1)
    const funcval3 = await thirdaddition(funcval2)

    console.log ("Third val: " + funcval3)

  }

  getVal()


// This


const person = {

name:'Hamza',
greet:function(){console.log('Hello '+this.name)}

}

person.greet()


const friend = {
name:'Toseef',

}

friend.greet = person.greet

//friend.greet()

//const greett = person.greet.bind(friend)
//this.name = 'Roshaanay forced'
const greett = person.greet.call(friend)
//greett()


const NewPerson = {

name:'Roshaanay',
greet:() => {console.log('Hello '+this.name)},

}

NewPerson.greet()