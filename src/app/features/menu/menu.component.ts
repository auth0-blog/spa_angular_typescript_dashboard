import { Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
      }
    `,
  ],
})
export class MenuComponent {}
