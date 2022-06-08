const form = document["my-form"]
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let firstName = form.firstName.value
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let destination = form.location.value
    const diet = []

    for(i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Destination: " + destination + "\n" + "Dietary Restrictions: " + diet)
})