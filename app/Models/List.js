export default class List {
    constructor(title, color) {
        this.title = title
        this.color = color
        this.tasks = []
    }

    get Template() {
        return this.title
    }
}