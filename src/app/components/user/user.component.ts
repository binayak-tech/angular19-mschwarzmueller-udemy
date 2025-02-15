import { Component } from '@angular/core';
import { USERS } from '../../entity/users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = USERS[this.randomUser()];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  randomUser() {
    return Math.floor(Math.random() * USERS.length);
  }
  
  onSelectUser(user: any) {
    this.selectedUser = USERS[this.randomUser()];
  }
}
