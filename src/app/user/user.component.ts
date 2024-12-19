import { Component, Input } from '@angular/core';

// import { DUMMY_USERS } from '../../assets/dummy-users/dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({ required:true }) avatar!: string;
  @Input({ required:true }) name!: string;
  @Input({ required:true }) id!: string;

  imagePath() {
    return 'assets/users/' + this.avatar
  }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  onSelectUser() {}

}