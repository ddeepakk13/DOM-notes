// The getElementById method does exactly what it says
// also createElement and appendChild works as you'd expect
let btnGen = document.getElementById("btn-gen");
btnGen.onclick = function() {
    let topDiv = document.getElementById("top-div");
    let text = document.createElement("div");
    text.innerHTML   = "Lorem Ipsum";
    topDiv.appendChild(text);
};
let btnRes = document.getElementById("btn-res");
btnRes.onclick = function() {
    let topDiv = document.getElementById("top-div");
    topDiv.innerHTML = "";
};

// getElementsByName returns a node list which can be iterated
let btnRating = document.getElementById("btn-rating");
btnRating.onclick = function() {
    let ratings = document.getElementsByName("rate");
    ratings.forEach((rate)=>{
        if (rate.checked) {
            alert("You have rated " + rate.value);
        }
    })
};
// getElementsByClassName can be called on a parent node other than document
// This will search for nodes that are inside the parent node
let btnSelAll = document.getElementById("btn-sel-all");
btnSelAll.onclick = function() {
    let animals = document.getElementsByClassName("animal");
    for (let a of animals) {
        a.checked = true;
    }
};
let btnSelRes = document.getElementById("btn-sel-res");
btnSelRes.onclick = function() {
    let animals = document.getElementsByClassName("animal");
    for (let a of animals) {
        a.checked = false;
    }
};
let btnSelWild = document.getElementById("btn-sel-wild");
btnSelWild.onclick = function() {
    let wildAnimals = document.getElementById("wild").getElementsByClassName("animal");
    for (let a of wildAnimals) {
        a.checked = true;
    }
};

// The querySelector() finds the first element that matches a CSS selector or a group of CSS selectors.
// The querySelectorAll() finds all elements that match a CSS selector or a group of CSS selectors.

// The parentElement property gets the parent node of the node in which it is accessed
// The nextElementSibling returns the next sibling of an element or null if the element is the last one in the list
// The previousElementSibling returns the previous sibling of an element or null if the element is the first one in the list
let btnChangeColor = document.getElementById("btn-change-color");
btnChangeColor.onclick = function() {
    let parentEle = btnChangeColor.parentElement;
    parentEle.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
}

// children property contains all html child elements
// childNodes on the other hand returns all node child elements. This will include text nodes and comment nodes
let btnRandList = document.getElementById("btn-random-ul");
btnRandList.onclick = function() {
    let ulList = document.getElementById("ul-list");
    let liList = ulList.children;
    for (let itm of liList) {
        itm.innerHTML = String.fromCharCode(65+Math.floor(Math.random() * 26));
    }
};

