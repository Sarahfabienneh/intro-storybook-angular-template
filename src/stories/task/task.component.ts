
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './task.model';

// @Component({
// 	selector: 'doc-checkbox',
// 	templateUrl: './doc-checkbox.component.html'

@Component({
	selector: 'task',
	templateUrl: './task.component.html' 
})

export class TaskComponent {
  @Input() public task: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  	// eslint-disable-next-line @angular-eslint/no-output-on-prefix
  	public onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  	// eslint-disable-next-line @angular-eslint/no-output-on-prefix
  	public onArchiveTask = new EventEmitter<Event>();

  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  public onPin(id: any) {
  	this.onPinTask.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  public onArchive(id: any) {
  	this.onArchiveTask.emit(id);
  }
}
