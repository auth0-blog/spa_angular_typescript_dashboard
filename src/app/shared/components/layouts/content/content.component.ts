import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent {
	@Input() title: string = '';
	@Input() actionName?: string;
	@Output() action = new EventEmitter<void>();

	emitAction(): void {
		this.action.emit();
	}
}
