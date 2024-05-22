const list = [];
const listContainer = document.querySelector("#list-container");
const inputBox = document.querySelector('#input-task');
const completedCounter = document.querySelector("#Complete");
const incompleteCounter = document.querySelector("#inComplete");
let listCompleteCounter = 0;
let listIncompleteCounter = 0;
////////////////////////////////////////////////////////// Date //////////////////////////////////////////////////////////
/*Date  Options*/
const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
/*Date */
let date = new Date().toLocaleDateString('en-us', options);

/* Changing header in the html to date  */
document.querySelector("#header-date").innerHTML = date;


////////////////////////////////////////////////////////// Functions  //////////////////////////////////////////////////////////

let AddingButton = document.querySelector('#add-button');

AddingButton.addEventListener("click", Add_to_list); 

// Add_to_list //
function Add_to_list() {
    let input_item = inputBox.value.trim();
    if (!input_item) {
        alert("Write down a list item");
        return;
    }
    list.push(input_item);
    listIncompleteCounter++;
    create_task(input_item);
    incompleteCounter.innerHTML = `${listIncompleteCounter}`;
    inputBox.value = ''; 
}


/// Delete a Task // 
listContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-button")){
        const deleteButton = e.target;
        deleteButton.parentElement.parentElement.remove();
        incompleteCounter.innerHTML = `${--listIncompleteCounter}`;

    }
});

//Edit a task // 
listContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("edit-button")){
        let userInput = prompt("Please enter your input:");
        if (userInput !== null) {
            document.querySelector(".task").innerHTML= userInput;            
        } else {
            alert("Please Enter a value");
        }

    }
});




// Create Task //
function create_task(task) {
    const listContainer = document.querySelector("#list-container");
    const taskContainer = document.createElement("li");
    taskContainer.innerHTML = 
        `<div class="item-content">
            <input type="checkbox" class="check-Box">
            <span class="task">${task}</span>
        </div>
        <div class="item-buttons">
            <span class="delete-button">Delete</span>
            <span class="edit-button">Edit</span>
        </div>`;
    listContainer.appendChild(taskContainer);
}





//  checkBox //
listContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("check-Box")) {
        const checkBox = e.target;
        const sibling = checkBox.nextElementSibling;
        if (checkBox.checked) {
            sibling.style.textDecoration = 'line-through' ;
            completedCounter.innerHTML = `${++listCompleteCounter}`;
            incompleteCounter.innerHTML = `${--listIncompleteCounter}`;
        }
            else{
            sibling.style.textDecoration = 'none' ;
            completedCounter.innerHTML = `${--listCompleteCounter}`;
            incompleteCounter.innerHTML = `${++listIncompleteCounter}`;
        }
       
    }
});





