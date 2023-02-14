import { Component } from "@angular/core";

// ✨ New 👇
import { UserQuery } from "src/app/core/state/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  // ✨ New 👇
  user$ = this.userQuery.selectUser$;

  // ✨ New 👇
  constructor(private userQuery: UserQuery) {}
}