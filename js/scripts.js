alert("hello")

/*
first, create var for link
second, create an eventListener for link
third, create a function for ["click", "turn box red"]
console.log()
*/

let link = document.querySelector("a")
let box = document.querySelector(".box") /*use same element from css selector target class*/
console.log(link);
console.log(box);
link.addEventListener("click", turnBoxRed)
function turnBoxRed(event){
    event.preventDefault() /*when clicking link in this case, it prevents another page to open*/
    console.log("it's red")
    box.classList.add("red") /*add red to box */
}

