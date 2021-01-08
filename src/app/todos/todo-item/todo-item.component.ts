import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../models/todos.model';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {}

  //Set the Dynamic class
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
  }

  onToggle() {
    // Only for UI
    this.todo.completed = !this.todo.completed;

    //Toggle for Server
    this.todoService.completedTodos(this.todo).subscribe((item) => {
      console.log(item);
    });
  }

  onDelete() { 
    this.deleteTodo.emit(this.todo);
  }
}
