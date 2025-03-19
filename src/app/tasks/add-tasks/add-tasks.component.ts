import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent {
  @Output() close = new EventEmitter<void>();
  
  onClose() {
    this.close.emit();
  }
}
