const formAdd = document.getElementById("my-add-form")
const formSub = document.getElementById("my-sub-form")
const formMult = document.getElementById("my-mult-form")



formAdd.addEventListener("submit", function(event){
    event.preventDefault()
    let firstNumber = document.getElementById("firstNumber")
    let secondNumber = document.getElementById("secondNumber")
    let num1 = firstNumber.value
    let num2 = secondNumber.value
    let h3 = document.createElement("h3")
    h3.textContent = Number(num1) + Number(num2)
    formAdd.append(h3)
    firstNumber.textContent = ""
    secondNumber.textContent = ""
})
formSub.addEventListener("submit", function(event){
    event.preventDefault()
    let thirdNumber = document.getElementById("thirdNumber")
    let fourthNumber = document.getElementById("fourthNumber")
    let num1 = thirdNumber.value
    let num2 = fourthNumber.value
    let h3 = document.createElement("h3")
    h3.textContent = Number(num1) - Number(num2)
    formSub.append(h3)
    thirdNumber.innerHTML = ""
    fourthNumber.textContent = ""
})
formMult.addEventListener("submit", function(event){
    event.preventDefault()
    let fifthNumber = document.getElementById("fifthNumber")
    let sixthNumber = document.getElementById("sixthNumber")
    let num1 = fifthNumber.value
    let num2 = sixthNumber.value
    let h3 = document.createElement("h3")
    h3.textContent = Number(num1) * Number(num2)
    formMult.append(h3)
    fifthNumber.textContent = ""
    sixthNumber.textContent = ""
    
})

