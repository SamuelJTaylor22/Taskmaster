import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListsService {
  newItem(item, id) {
    let fList = store.State.lists.find(l => l.id == id)
    fList.tasks.push(item)
  }

  deleteItem(item, id) {
    let founditem = store.State.lists.find(l => l.id == id)
    let iIndex = founditem.tasks.findIndex(i => i == item)
    founditem.tasks.splice(iIndex, 1)
  }
  deleteList(id) {
    let fIndex = store.State.lists.findIndex(l => l.id == id)
    store.State.lists.splice(fIndex, 1)
  }
  newList(title) {
    let newList = new List(title)
    store.State.lists.push(newList)
    console.log(store.State.lists)
  }

  
}

const SERVICE = new ListsService();
export default SERVICE;
