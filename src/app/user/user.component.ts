import { Component } from '@angular/core';

export const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
  },
  {
    id: 'u2',
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  {
    id: 'u3',
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
];

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
