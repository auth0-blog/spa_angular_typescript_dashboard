import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseMenuItem } from 'src/app/core';
import { FormFieldModel } from '../form.model';
import { MenuFormFields } from './menu-item-form.model';

@Component({
	selector: 'app-menu-item-form',
	templateUrl: './menu-item-form.component.html',
	styleUrls: ['../forms.scss']
})
export class MenuItemFormComponent {
	@Input() set menuItem(value: BaseMenuItem) {
		this.menuFormFields = MenuFormFields.map((formField) => {
			return {
				...formField,
				defaultValue: value[formField.name]
			};
		});
		this.menuFormGroup = new FormGroup(
			this.menuFormFields.reduce<{ [key: string]: FormControl }>(
				(acc, curr) => {
					const validators = [];
					if (curr.required) {
						validators.push(Validators.required);
					}
					if (curr.pattern) {
						validators.push(Validators.pattern(curr.pattern));
					}
					acc[curr.name] = new FormControl(curr.defaultValue, validators);
					return acc;
				},
				{}
			)
		);
	}
	@Output() formSubmitted = new EventEmitter<BaseMenuItem>();
	menuFormGroup!: FormGroup;
	menuFormFields: FormFieldModel[] | undefined;

	save(): void {
		if (this.menuFormGroup) {
			const menu = {
				...this.menuFormGroup.getRawValue(),
				price: this.menuFormGroup.getRawValue().price * 100
			};
			this.formSubmitted.emit(menu);
		}
	}

	clear(): void {
		if (this.menuFormGroup) {
			this.menuFormGroup.reset();
		}
	}
}
