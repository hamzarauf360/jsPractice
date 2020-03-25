// A class
Date 

// creating A new  instance of the date class

d = new Date()


// A static method which exists for all the instances of Date class and is invoked by the class name

Date.now()

// simple instance method

d.toString()

// creating a class

class Set{
    constructor(arr)
    {
        this.arr = arr
    }

    add(val)
    { 
      if(!this.has(val))
        this.arr.push(val)
      return this.arr
    }

    delete(val)
    {
      if(this.has(val))
      {
        this.arr.pop()
      }
    }

    has(val)
    {
      return this.arr.includes(val)
    }

    print()
    {
      for (let i=0;i<this.arr.length;i++)
      {
          console.log(this.arr[i])
      }
    }

    
}

s = new Set([1,2,3,4,5])

s.add(6)
s.delete(6)

s.print()


// Extend and super keyword


class Animal{

  constructor(name,age,color)
  {
    this.name = name
    this.age = age
    this.color = color
  }

  moving()
  {
    console.log('The animal '+ this.name +' is moving')
  }

}



class Mamal extends Animal{

  constructor(name,age,color)
  {
    super(name,age,color)
    this.name = name
    this.age = age
    this.color = color
  }

  get_color()
  {
    console.log('color is '+ this.color)
  }



}


 Mam = new Mamal('Dog',4,'brown')

Mam.get_color()

Mam.moving()