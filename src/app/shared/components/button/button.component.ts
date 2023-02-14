import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() label: string = '';
	@Input() variant: 'text' | 'solid' | 'outline' = 'solid';
	@Input() customClass: string = '';
	@Input() enabled: boolean = true;

	@Output() buttonClick = new EventEmitter<void>();

	onButtonClick(): void {
		this.buttonClick.emit();
	}
}
