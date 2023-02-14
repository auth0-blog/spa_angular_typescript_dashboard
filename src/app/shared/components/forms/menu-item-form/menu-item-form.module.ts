import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MenuItemFormComponent } from "./menu-item-form.component";
import { ButtonModule } from "../../button";
import { FormFieldModule } from "../form-field";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, FormFieldModule],
  declarations: [MenuItemFormComponent],
  exports: [MenuItemFormComponent],
})
export class MenuItemFormModule {}
