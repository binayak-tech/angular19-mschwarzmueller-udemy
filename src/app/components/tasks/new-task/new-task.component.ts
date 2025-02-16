import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<{title: string, summary: string, dueDate: string}>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel(){
    this.cancel.emit();
  }
  onCreate() {
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
