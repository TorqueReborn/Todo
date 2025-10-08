import { FormsModule } from '@angular/forms'
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('todo');
  todo = ""
  todoList: { id: number, todo: string }[] = []
  addTodo() {
    this.todoList.push({ id: this.todoList.length + 1, todo: this.todo })
    this.todo = ""
  }
}
