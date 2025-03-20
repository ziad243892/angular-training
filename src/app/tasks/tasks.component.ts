import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  // Input properties to receive userId and name from parent component
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name!: string;
  
  isAddTaskDialogOpen = false;

  // Methods to control the add task dialog
  openAddTaskDialog() {
    this.isAddTaskDialogOpen = true;
  }

  closeAddTaskDialog() {
    this.isAddTaskDialogOpen = false;
  }

  // Array of tasks
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // Getter to filter tasks based on the selected userId
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  // Method to complete a task by removing it from the tasks array
  completeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}