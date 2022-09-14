//This import is used to import the useState from the react Framewordk so it can be used to get Data
import { useState } from "react";

// This is basically the main start to our program
const Todo_App = () => {
  // here we initialise the Userinput and get the data in a string format
  const [userInput, setUserInput] = useState("");
  // the data that is inserted into the input are is then stored locally in an array so that the todo list keeps all its data
  const [todoList, setTodoList] = useState([]);

  const [checked, setChecked] = useState([]);


  //the first function is used to check for change in the input box
  const handleChange = (e) => {
    // the preventDefault is used so that the page does not refresh and we lose some data
    e.preventDefault();
    // Here the user Input is set to equal the Input box
    setUserInput(e.target.value);
    //This just logs the task in the console for testing puposes
    console.log(userInput);
  };

// This is the function that handles the submission on the form
  const handleSubmit = (e) => {
    if(userInput!=""){
      e.preventDefault();
      // Here the setTodoList inputs the the task that was inserted into the box into an array and the tasks gets piled over each other.
      setTodoList([userInput, ...todoList]);


      // this peace of code then clears the task inputy box after submission
        setUserInput("");
    }
    else{
      // the else statement checks if there is a task entered if not then there is an alert saying you can't add non text item to you list.
       alert("You cannot add empty todo item.");
    }
  };

// This is the function that is used to delete a task from you list
  const handleDelete = (todo) => {
    // here we use a variable update Arr that is basically the updated array without the task that is being deleted
    const updatedArr = todoList.filter(
      //todo item is created and it is the task that is being deleted
      // an index is searched and is the index in todo list is the same as the one that is being deleted that task is then deleted
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo)
    );
    //the list is updated with the updateArr variable as it is the newest form of the array
    setTodoList(updatedArr);
  };

  const handleUpdate = (todo) =>{
    const updateTask = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo)
    );

    setTodoList([userInput]);
    setUserInput("");
  };

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  var isChecked = (todo) =>
    checked.includes(todo) ? "checked-item" : "not-checked-item";





// This is the part that counts how many tasks are in the list and it displays it
  let total = todoList.length;
  console.log(total);






return (

    <div class="div">
      <h1>TODO List</h1><p class="Itemnum">Number of Tasks: {total}</p>
      <form>
        <input
          type="text"
          value={userInput}
          placeholder='Enter Task / Update Task'
          onChange={handleChange}
        />
        <button class="btnAdd" onClick={handleSubmit}>+</button>
      </form>
      <ul>
        {todoList.length >= 1
          ? todoList.map((todo, idx) => {
              return (
                <li className={isChecked(todo)}>
                  {todo}
                  <button class="btnDel"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(todo);
                    }}
                  >
                    Delete
                  </button><button class="btnUp" onClick={(e) => {
                    e.preventDefault();
                    handleUpdate(todo)
                  }}>Update</button><input
                       type="checkbox"
                       onChange={handleCheck}

                     />
                </li>
              );
            })
          : "...........Todo List is Empty............"}
      </ul>
    </div>


  );
};

export default Todo_App;
