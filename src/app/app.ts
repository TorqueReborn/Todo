import { FormsModule } from '@angular/forms'
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matDeleteForeverSharp } from '@ng-icons/material-icons/sharp';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [provideIcons({ matDeleteForeverSharp })]
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
