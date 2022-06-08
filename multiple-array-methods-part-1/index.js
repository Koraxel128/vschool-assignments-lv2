var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


// if (a.lastName < b.lastName) {            return -1;        }
// if (a.lastName > b.lastName) {            return 1;        }         
// return 0;    }
const isOldEnough = oldEnough(peopleArray)
function oldEnough(arr){
    const result = arr.filter(function(person){
        if(person.age >= 18){
            
            return true
            
            
        }
        
    })
    
    
    return result
}
console.log(oldEnough(peopleArray))

function alphabetical(arr){
    const sortedArray = arr.sort((a,b) => {
        if (a.lastName < b.lastName){
            return -1
        }else if (a.lastName > b.lastName){
            return 1
        } else return 0
})
    return sortedArray

}

console.log(alphabetical(isOldEnough))

function makeElement(arr){
    const result = arr.map(function (isOldEnough){
        const li = document.createElement("li")
        return li.textContent = "<li>" + isOldEnough.firstName + " " + isOldEnough.lastName + " is " + isOldEnough.age + "</li>"
        
    })
    return result
}

console.log(makeElement(isOldEnough))








// function makeList(arr){
//     const result = arr.map(function(){
        
        
//     })
//     return result
// }

// console.log(peopleArray)
