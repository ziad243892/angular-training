import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../assets/dummy-users/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  users = DUMMY_USERS;
  selectPerson?: string;
  myControl = new FormControl('default value');
  favoriteColor = '';

  onSelectUser(name:string) {
    this.selectPerson = name;
  }

}
