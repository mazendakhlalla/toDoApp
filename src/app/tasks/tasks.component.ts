import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from '../models/taskModels';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor() {}

  myDate = Date.now();

  taskForm: FormGroup;

  faXmark = faXmark;
  faCheck = faCheck;

  inputTask: string = '';

  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      inputTask: new FormControl('hello', Validators.required),
    });
  }
  addTask() {
    this.tasks.push({
      content: this.inputTask,
      status: false,
    });
    if (this.tasks.length >= 6) {
      this.tasks.splice(4, 1);
    }
    this.inputTask = '';
  }
  taskCompleted(id: number) {
    this.tasks.map((v, i) => {
      if (i == id) v.status = !v.status;
      return v;
    });
  }
  moveTask(id: number) {
    var element = this.tasks[id];
    this.tasks.splice(id, 1);
    this.tasks.push(element);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
  }
}
