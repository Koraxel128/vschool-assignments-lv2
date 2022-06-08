const form = document["my-form"]
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const totalGoombas = form.goombas.value
    const totalBobOms = form.bobOmbs.value
    const totalCheepCheeps = form.cheepCheeps.value
    const goombas = form.goombas.value * 5
    const bobOmbs = form.bobOmbs.value * 7
    const cheepCheeps = form.cheepCheeps.value * 11
    const totalCost = goombas + bobOmbs + cheepCheeps
    const h1 = document.createElement("h1")
    h1.textContent = totalCost
    form.append("Total: " + totalCost + " Coins")
    form.goombas.value = ""
    form.bobOmbs.value = ""
    form.cheepCheeps.value = ""
    
    
})