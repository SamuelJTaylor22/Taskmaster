import ListsService from "../Services/ListsService.js";
import STORE from "../store.js";

function _draw(){
  let template = ''
  STORE.State.lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template

}

//Public
export default class ListsController {
  constructor() {
    _draw()
  }

  newList(){
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    ListsService.newList(form.list.value)
    _draw();
  }

  deleteList(){}

  newItem(){}

  deleteItem(){}


}
