import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id !: string;
  @Input({ required: true }) avatar !: string;
  @Input({ required: true }) name !: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  // USING SIGNALS
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()`
  // });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
