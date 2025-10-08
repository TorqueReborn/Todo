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
  todoList: { id: string, todo: string }[] = []
  addTodo() {
    console.log(this.todo)
  }
}
