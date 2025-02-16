import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user !: User;
  @Input({required: true}) isSelected = false;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // USING SIGNALS
  // user = input.required<User>();
  // select = output<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()`
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
