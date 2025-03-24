import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { task } from './task.model'

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent {
  // Input property to receive task data from parent component
  @Input({ required: true }) task!: task;
  // Output event emitter to notify parent component when a task is completed
  @Output() complete = new EventEmitter<string>();

  // Method to emit the complete event with the task id
  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
  
}
