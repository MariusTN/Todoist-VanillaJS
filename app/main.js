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
    let itemEntryForm = document.querySelector('#itemEntryForm');
    itemEntryForm.addEventListener('submit', e => {
        e.preventDefault();
    })
    //procedural

    //load list obj

    //refresh page
    refreshThePage();
}

let refreshThePage = () => {
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
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

let renderList = () => {
    let list = toDoList.getList();
    list.forEach(item => {
        buildListItem(item);
    });
};


//DOM Function
let buildListItem = (item) => {
    let div = document.createElement("div");
    div.className = "item";
    let check = document.createElement('input');
    check.type = checkbox;
    check.id = item.getId();
    check.tabIndex = 0;
    addClickListenerToCheckbox(check);
    let label = document.createElement('label');
    label.tabIndex = 0;
    label.htmlFor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    let container = document.querySelector('#listItems');
    container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", e => {
        toDoList.removeItemFromList(checkbox.id);
        setTimeout(() => {
            refreshThePage();
        }, 2000);
    });
};

let clearItemEntryField = () => {
    document.querySelector('#newItem').value = "";
}

let setFocusOnItemEntry = () => {
    document.querySelector("#newItem").focus();
}