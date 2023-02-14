// src/app/app.component.ts

import { Component, OnInit } from "@angular/core";

// ✨ New 👇
import { Actions } from "@datorama/akita-ng-effects";
import { appLoaded } from "./core/state/menus";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "spa-angular-typescript-dashboard";

  // ✨ New 👇
  constructor(private actions: Actions) {}

  ngOnInit(): void {
    // ✨ New 👇
    this.actions.dispatch(appLoaded());
  }
}