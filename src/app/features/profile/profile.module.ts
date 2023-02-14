import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ButtonModule, ContentModule, ViewModule } from "src/app/shared";

@NgModule({
  imports: [
    CommonModule,
    ViewModule,
    ContentModule,
    ButtonModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
