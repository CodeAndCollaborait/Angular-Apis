import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodosComponent } from './todos/todos/todos.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, HomeComponent, AddTodoComponent, TodoItemComponent, TodosComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
