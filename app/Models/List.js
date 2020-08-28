import { generateId } from "../utils.js"

export default class List {
    constructor(title) {
        this.title = title
        this.tasks = []
        this.id = generateId()
    }

    get Template() {
        return `
        <section class = "col-md-4"
        <div class="card">
        <div class="card-header">
          ${this.title}
          <button type="button" class="btn btn-danger" onclick="app.listsController.deleteList('${this.id}')">Delete</button>
        </div>
        <div class="card-body">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
              first task
            </label>
          </div>
        </div>
      </div>
        </section>
        `
    }

    get itemTemplate(){
        return `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>`
    }

}