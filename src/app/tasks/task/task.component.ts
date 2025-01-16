import { Component, Input } from '@angular/core';

interface task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent {
  @Input({ required: true }) task!: task;
}
