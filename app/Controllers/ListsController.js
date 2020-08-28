import ListsService from "../Services/ListsService.js";
import STORE from "../store.js";

function _draw(){
  let template = ''
  STORE.State.lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
  STORE.saveState()
  console.log(STORE.State.lists)
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
    ListsService.newList({title: form.list.value})
    _draw();
  }

  deleteList(id){
    if(window.confirm("Are you sure you want to delete this list?")){
    ListsService.deleteList(id)}
    _draw()
  }

  newItem(id){
    event.preventDefault()
    // @ts-ignore
    let item = event.target.item.value
    ListsService.newItem(item ,id)
    _draw()
  }

  deleteItem(item, id){
    if(window.confirm("Are you sure you want to delete this item?")){ListsService.deleteItem(item, id)}
    _draw()
  }


}
