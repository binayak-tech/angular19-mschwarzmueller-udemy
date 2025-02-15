import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { USERS } from './entity/users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = USERS;
  selectedUserId: string = "";

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
