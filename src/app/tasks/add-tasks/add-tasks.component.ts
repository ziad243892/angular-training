import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent {

  taskTitle:string = '';
  summaryText:string = ''
  date:string = '';

  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();


  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
        title: this.taskTitle,
        summary: this.summaryText,
        date: this.date,
    });
  }
}
