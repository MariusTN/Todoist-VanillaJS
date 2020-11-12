import ToDoApp from './todoapp.js';
import ToDoItem from './todoitem.js';

let toDoList = new ToDoApp();

//Launch App

document.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === "complete") {
        initApp();
    }
});

let initApp = () => {
    //add listeners

    //procedural

    //load list obj

    //refresh page
    refreshThePage();
}

let refreshThePage = () => {
    clearListDisplay();
    //render list

    //clear item entry field

    //setFocusOnItemEntry();
}

let clearListDisplay = () => {
    let parentElement = document.querySelector("#listItems");
    deleteContents(parentElement);
}

let deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

let renderList = () =>{
    let list = toDoList.getList();
    list.forEach( item => {
        buildListItem(item);
    });
};

let buildListItem = (item) =>{
    let div
}