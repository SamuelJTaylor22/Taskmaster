import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListsService {
  newList(title) {
    let newList = new List(title)
    store.State.lists.push(newList)
  }
}

const SERVICE = new ListsService();
export default SERVICE;
