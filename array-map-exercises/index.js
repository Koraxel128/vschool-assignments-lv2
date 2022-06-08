function doubleNumbers(arr){
    const result = arr.map(number => number * 2)
    return result
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


  function stringItUp(arr){
    const result = arr.map(number => number = number + "")
    return result
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  
  function capitalizeNames(arr){
    const result = arr.map(name => name = name[0].toUpperCase() + name.substring(1).toLowerCase())
    return result
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  
  function namesOnly(arr){
    const result = arr.map(name => name = name)
    return result
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  

  function makeStrings(arr){
    const result = arr.map(user => {
        var age = user.age
        if(age > 18){
            console.log(user.name + " can go to the Matrix")   
        }else console.log(user.name + " is under age")
        })
        return result
  }

  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

  function readyToPutInTheDOM(arr){
    const result = arr.map(user => {
        let h1 = document.createElement("h1").textContent = "<h1>" + user.name + "</h1>"
        let h2 = document.createElement("h2").textContent = "<h2>" + user.age + "</h2>"
        return h1 + h2


        
        
    })
    return result
   
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]