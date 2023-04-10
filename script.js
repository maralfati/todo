const btn =document.querySelector('.input_area button')
btn.addEventListener('click', function(){
const inputt=document.querySelector('.input_area input');
const todo=document.querySelector('.todo_area');
const p=document.createElement('p')

const pp=p.innerText=inputt.value;
const div=document.createElement('div')
const button=document.createElement('button')
button.classList.add('delete')
div.appendChild(p)
div.appendChild(button)
todo.appendChild(div)
button.innerText="Delete"
// const deletBtn=document.querySelector('.delete')
// deletBtn.addEventListener('click', function(event){
// event.srcElement.parentElement.remove()
// })
deleteRun()
})


// const deletBtn=document.querySelector('.delete')
// deletBtn.addEventListener('click', function(event){
// event.srcElement.parentElement.remove()
// })


// or you can do this way for loop and function
function deleteRun(){
    const deletBtn=document.querySelectorAll('.delete')

    for (let index = 0; index < deletBtn.length; index++) {
        deletBtn[index].addEventListener('click', function(event){
            event.srcElement.parentElement.remove()
            })
        
    }
}
deleteRun()

const calcBTn=document.querySelector('.calcBtn')
calcBTn.addEventListener('click',function(){
const first_nu=document.querySelector('.firstNumber')
const second_nu=document.querySelector('.secondNumber')
const opertator=document.querySelector('.opertator')
const resultt=document.querySelector('.result')
let result=eval(first_nu.value+opertator.value+second_nu.value) ;
// let result='';
// if(opertator.value=="+"){
//     result=parseFloat( first_nu.value) + parseFloat( second_nu.value)
// }else if(opertator.value=="-"){
//     result=first_nu.value - second_nu.value

// }else if(opertator.value=="*"){
//     result=first_nu.value * second_nu.value

// }else if(opertator.value=="/"){
//     result=first_nu.value / second_nu.value

// }
// console.log(result)
resultt.innerText = result

})
