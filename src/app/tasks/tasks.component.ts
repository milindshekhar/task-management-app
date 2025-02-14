import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}
  @Input({ required: true }) name?: string | undefined;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;

  get SelectedUserTask() {
    return this.tasksService.getUserTask(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
