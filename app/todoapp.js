export default class ToDoList {
    constructor() {
        this._list = [];
    }

    getList() {
        return this._list;
    }

    clearList() {
        this._list = [];
    }

    addItemToList(itemObj) {
        this._list.push(itemObj)
    }

    removeItemFromList(id) {
        let list = this._list;
        for (let index = 0; index < list.length; index++) {
            if (list[i]._id == id) {
                list.splice(i, 1);
                break;
            }

        }
    }
}