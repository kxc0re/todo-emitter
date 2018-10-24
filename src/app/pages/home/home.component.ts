import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { TodoState } from 'src/app/state/todo.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { Emitter, Emittable } from '@ngxs-labs/emitter';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
