import { generateId } from "../utils.js"

export default class List {
    constructor({title, color, tasks}) {
        this.title = title
        this.color = color || ''
        this.tasks = tasks || []
        this.id = generateId()
    }

    get Template() {
        return `
        <section class = "col-md-4"
        <div class="card">
        <div class="card-header ${this.colorPicker}">
          ${this.title}
          <button type="button" class="btn btn-danger" onclick="app.listsController.deleteList('${this.id}')">Delete</button>
        </div>
        <div class="card-body">
            ${this.itemTemplate}
        </div>
        <form class="form-inline" onsubmit ="app.listsController.newItem('${this.id}')" >
        <div class="form-group">
            <label for="item"></label>
            <input type="text" name="item" id="item" class="form-control" placeholder="new item">
            <button type="submit" class="btn btn-outline-primary">Add</button>
        </div>
    </form>
      </div>
        </section>
        `
    }

    get itemTemplate(){
        let template = ''
        this.tasks.forEach(t => template += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
        ${t} 
        </div> <i class="fas fa-trash" onclick="app.listsController.deleteItem( '${t}','${this.id}')"></i>
        </label> 
        `)


        return template
    }

    get colorPicker(){
        switch(this.color){
            case "Blue": return "bg-primary";
            case "Green": return "bg-success";
            case "Grey": return "bg-secondary";
        }

    }

}