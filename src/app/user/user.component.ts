import { Component, EventEmitter, Input, Output  } from '@angular/core';

// import { DUMMY_USERS } from '../../assets/dummy-users/dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

 interface inputTypes {
  avatar: string;
  name: string;
  id: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {

  @Input({required:true}) persons!: inputTypes;
  
  // ********** regular Input() *********
  // @Input({ required:true }) avatar?: string;
  // @Input({ required:true }) name?: string;
  // @Input({ required:true }) id?: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  imagePath() {
    return 'assets/users/' + this.persons.avatar;
  }

  onSelectUser() {
    this.select.emit(this.persons.name);
  }

   //  ********** signal input() **********
  // avatar = input.required<string>();
  // id = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // ********** random *********
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // onSelectUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

}