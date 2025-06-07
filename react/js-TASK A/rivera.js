/* Used a variable to display a long message*/
const myFirstmessage="Hello to everyone on this website"
/*DOM manipulation */
document.getElementById("domManipulate").innerHTML=myFirstmessage;

/* Used array to list add items in the ul  */
const fruits = ["apple","Banana","orage","pineapple","mango"];
const ul=document.getElementById("arrayList");
/*adding of array items into the list by manipulating DOM */
fruits.forEach(function(fruit){
 const li=document.createElement("li");
 li.textContent=fruit;
/* Added a click event to each ul item*/
 li.addEventListener("click",function(){
li.classList.toggle("clicked");
});
 ul.appendChild(li);
});

/* function called by the a button click*/
function shoutOut(){
    alert("Hello!, Shoutout to you!!");
}
/* assign a variable to the button by its ID*/
const button= document.getElementById("myButton");
/* add the even to the button variable*/
button.addEventListener("click",shoutOut);


/*an object */
let person ={
    name:"carlo",
    age:20,
    gender:"Male"
};
/*decomposing the object*/
console.log(person);
console.log(person.name);
console.log(person.gender);
console.log(person.age);