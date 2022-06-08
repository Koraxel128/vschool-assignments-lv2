var button = document.getElementById("clickme")
var clickCounter = document.getElementById("clickCounter")
count = 0;

button.onclick = function() {
    localStorage.setItem("count", count + 1)
    count ++;
    button.innerHTML = "Click me: " + count;
    
};
var h3 = document.createElement("h3")

h3 = localStorage.getItem("count")

clickCounter.append(h3)