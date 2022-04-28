import { Component, Input } from '@angular/core';

export enum ViewStates {
  Valid = 'valid',
  NotFound = 'not_found',
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  @Input() viewStatus: ViewStates.Valid | ViewStates.NotFound =
    ViewStates.Valid;

  viewStates = ViewStates;
}
