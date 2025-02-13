import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // constructor(private tasksService:TasksService)
  // {

  // }
  private tasksService = inject(TasksService);
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  @Input({ required: true }) userId!: string;
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        date: this.enteredDate,
        summary: this.enteredSummary,
      },
      this.userId
    );
    this.close.emit();
  }
}
