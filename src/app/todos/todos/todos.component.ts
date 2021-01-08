import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/todos.model';
import { TodosService } from '../../services/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todos[] = [];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((item) => {
      this.todos = item;
    });
  }

  deleteTodo(todo: Todos) {
    this.todos = this.todos.filter((t) => {
      t.id !== todo.id;
    });
  }

  addTodo(todo: Todos) {
    this.todoService.addTodos(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
