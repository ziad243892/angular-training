import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../assets/dummy-users/dummy-users';
import {NgFor} from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, NgFor, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  users = DUMMY_USERS;
  selectPerson: string = this.users[0].name;

  onSelectUser(name:string) {
    this.selectPerson = name;
  }

}
