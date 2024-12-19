import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../assets/dummy-users/dummy-users';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular-project';
  users = DUMMY_USERS;
}
