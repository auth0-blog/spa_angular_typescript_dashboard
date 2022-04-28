import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { MenusStateService } from 'src/app/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss'],
})
export class DeleteItemComponent {
  menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));

  menuItem$ = this.menuItemId$.pipe(
    switchMap((id) => this.menusStateService.selectMenuItem$(id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private menusStateService: MenusStateService
  ) {
    // TODO: this is a workaround, once the API is wired up
    // we will need a way to emit latest from state service
    this.menusStateService.fetchMenuItems();
  }

  deleteMenuItem(id: string): void {
    this.menusStateService.deleteMenuItem(id);
    this.navigateHome();
  }

  cancel(): void {
    this.back();
  }

  back(): void {
    this.location.back();
  }

  navigateHome(): void {
    this.router.navigate(['/menu']);
  }
}
