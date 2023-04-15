// VARIABLES
const inputEl = document.querySelector(".form__input");
const btnEl = document.querySelector(".form__btn");
const todoEl = document.querySelector(".todo__ul");

// EVENT LISTENERS

btnEl.addEventListener("click", createTodoItem);
todoEl.addEventListener("click", deleteCheck);


// FUNCIONES

function createTodoItem(e) {
    e.preventDefault();
    console.log(todoEl.childNodes[1]);
    if (inputEl.value !== "") {
        // CREO EL DIV QUE SE VA A AGREGAR AL UL
        const newDiv = document.createElement("div");
        newDiv.classList.add("todo__ul__item");

        // CREO EL LI QUE VA ADENTRO DEL DIV
        const newLi = document.createElement("div");
        newLi.classList.add("todo__ul__item__li");

        // MODIFICO EL CONTENIDO DEL BEFORE CON LA SIGUIENTE LINEA
        newLi.setAttribute('data-before', `${inputEl.value}`)
        newDiv.appendChild(newLi);
        
        // CREO LOS BOTONES QUE VAN ADENTRO
        // CHECK BUTTON
        const checkBtn = document.createElement("button"), deleteBtn = document.createElement("button");
        checkBtn.classList.add("checkBtn");
        checkBtn.innerHTML = `
         <i class="fas fa-check"></i> 
         `;
        newDiv.appendChild(checkBtn);

        // DELETE BUTTON
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML = `
        <i class="fas fa-trash"></i> 
        `;
        newDiv.appendChild(deleteBtn);

        // APENDEO TODO EL NUEVO DIV 

        todoEl.appendChild(newDiv)
        inputEl.value = "";
    } else {
        console.log("No hay nada para agregar")
        invalidText(e);
    }
}

function deleteCheck(e){
    const item = e.target;
    
    if(item.classList[0] === "deleteBtn"){
        const parentItem = item.parentElement;
        parentItem.classList.add("deleted__item");

        parentItem.addEventListener("transitionend",function(){
            parentItem.remove();
        })

    } else if (item.classList[0] === "checkBtn"){
        // SELECCIONO EL LI QUE ESTA ADENTRO DEL DIV
        const childItem = item.parentElement.firstChild;
        
        childItem.classList.toggle("completed__item");
        console.log("Presionaste el boton de check")
    }
}

function invalidText(e){
    // console.log(e.target.parentElement)
    const item = e.target.parentElement;

    const inputElement = [item[0], item[1]];
    // console.log(inputElement)

    for (let i= 0; i < inputElement.length; i++){
        inputElement[i].classList.toggle("errorAnimation");
        inputElement[i].addEventListener("animationend", function(){
            inputElement[i].classList.toggle("errorAnimation");
        })
    }
}