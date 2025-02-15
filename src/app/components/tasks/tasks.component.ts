import { Component, Input } from '@angular/core';
import { USERS } from '../../entity/users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() selectedUserId !: string;
  
  get userName() {
    return USERS.find(user => user.id === this.selectedUserId)?.name;
  }
}
