import { FormsModule } from '@angular/forms'
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
  todo = ""
  todoList: { id: number, todo: string }[] = []
  addTodo() {
    if (!this.todo) return
    this.todoList.push({ id: this.todoList.length + 1, todo: this.todo })
    this.todo = ""
  }
}
