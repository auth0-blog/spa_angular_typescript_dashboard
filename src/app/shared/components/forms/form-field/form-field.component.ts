import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldModel } from '../form.model';

@Component({
	selector: 'app-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
	@Input() form!: FormFieldModel;
	@Input() parentFormGroup!: FormGroup;
}
