import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {}

  //Get Todos
  getTodos(): Observable<Todos[]> {
    return this.http.get<[Todos]>(`${this.todoUrl}${this.todoLimit}`);
  }
  //Get Todos by id with completed
  completedTodos(todo: Todos): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  //Delete Todos
  deleteTodos(todo: Todos): Observable<Todos> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todos>(url, httpOptions);
  }
  //Add Todos
  addTodos(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.todoUrl, todo, httpOptions);
  }
}
