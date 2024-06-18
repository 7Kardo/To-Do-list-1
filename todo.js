
let addtodobutton = document.getElementById("addtodo");
let todocontainer = document.getElementById("todocontainer");
let inputfield = document.getElementById("inputfield");

addtodobutton.addEventListener('click',function(){
    //add
    var paragraph = document.createElement('p');
    //style
    paragraph.classList.add('paragraph-styling');
    //add
    paragraph.innerText = inputfield.value;
    //add
    todocontainer.appendChild(paragraph);
    //input delet
    inputfield.value = "";
    //linethrough
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    //remove valeu
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    }) 


})