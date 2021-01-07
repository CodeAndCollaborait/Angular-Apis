import { Component, OnInit } from '@angular/core';

//Model Class
import { UserModel } from '../../models/user.model';

//Services
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  usersList: UserModel[] = [];
  constructor(private usersService: UsersService) {}

  getUsersList(): void {
    this.usersService.getUsers().subscribe((user) => (this.usersList = user));
  }

  ngOnInit(): void {
    this.getUsersList();
  }
}
