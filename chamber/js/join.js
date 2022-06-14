let text = document.getElementById("business-position");
let pattern = new RegExp("Aa- bcm");
let result = text.match(pattern);

document.getElementById("input").innerHTML = result;