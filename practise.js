/*const myHeading = document.getElementById("heading");

myHeading.addEventListener("click",()=>{
    myHeading.style.color = "red";
});

const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click",()=>{
    heading.style.color = input.value;
});
*/

/*
const list = document.getElementsByTagName("li");

/*for (let i = 0; i< list.length; i++){
    list[i].style.color = "orange";
}

const notOrange = document.getElementsByClassName("not-orange");
for (let i = 0; i< notOrange.length; i++){
    notOrange[i].style.color = "red";
}


const listItems = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];


for (let i =0; i<listItems.length; i++){
    listItems[i].style.color = colours[i];
}


const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

submit.addEventListener("click", () =>{
    placeholder.style.color ="goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;  

    list.innerHTML = `<li>${input.value}</li>`;
   
})

const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", ()=>{
    image.src=input.value;
})
*/
const image = document.getElementById("tree");
console.log(image.style);

const button= document.getElementById("submit");
button.addEventListener("click", () => {
    if(image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "hide";
        } else {
        image.style.display = "none";
        button.textContent = "show";
        }
})
