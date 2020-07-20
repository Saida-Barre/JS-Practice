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
/* 
Practice more using Events
Here are some examples
- an html web page has finished loading
- an html input field was changed
- an html button was clicked
*//*--------------------------------------------------------------------------------*/

/*Create 2 lists and change the first list item to "Hello11"

1. Create 2 <ul> in html
2. set class=myList for first ul and class=yourList for second ul
3. use the query selector or getElementsByTagName method to find the first <li> element, and change its text to "Hello11"
4. then, move the first modified <li> to the second list and make it the first item of that list.
*/

let myList = document.querySelector(".myList");
let yourList = document.querySelector(".yourList");
let listItem = document.getElementsByTagName("li")[0];
listItem.innerHTML="Hello11"
console.log(myList);
yourList.prepend(listItem);
console.log(yourList.childNodes[0]);
console.log(listItem);
console.log(typeof yourList);


