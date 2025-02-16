import { Component, Input } from '@angular/core';
import { USERS } from '../../entity/users';
import { TASKS } from '../../entity/tasks';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() selectedUserId !: string;
  @Input() userName?: string;

  tasks = TASKS;
  isAddingTask = false;
  
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUserId);
  }
  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
  onStartAddTask(id: string) {
    this.isAddingTask = !this.isAddingTask;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onSubmitAddTask(task: {title: string, summary: string, dueDate: string}) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.selectedUserId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });
    this.isAddingTask = false;
  }

}
