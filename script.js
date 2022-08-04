console.log("Hello World")

console.log(5+5)

let container = document.querySelector(".container .row");
console.log(container);

let divs = document.querySelectorAll('div');
console.log(divs)


let h4Title = document.querySelector('h1.display-4')
setTimeout(()=>{
    h4Title.innerHTML='<strong>Goodbye, World!</strong>';
    h4Title.style.color="blue"
    h4Title.style.backgroundColor = "red"
    h4Title.classList.add('new-class')
    h4Title.classList.remove('display-4')
},3000)

let input = document.querySelector('input.mr-sm-2');
  
const form = document.querySelector('form');
form.addEventListener('submit',evt=>{
    evt.preventDefault()
    console.log(evt.target)
    let formData = new FormData(evt.target);
    let formObj = Object.fromEntries(formData)
    console.log(formObj)
    console.log(formData.get('search'))
   h4Title.innerHTML=`Hello, ${input.value}`;
   
})


const body =document.querySelector('body');

body.addEventListener('keydown',evt=>{
    
    if(evt.key === "k"){
       // console.log(evt.key)
    }

})