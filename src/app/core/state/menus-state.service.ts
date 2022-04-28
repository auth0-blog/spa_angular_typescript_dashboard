import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { BaseMenuItem, MenuItem } from '../models';
import { ApiService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class MenusStateService {
  private menuItems$ = new BehaviorSubject<MenuItem[]>([]);

  constructor(private apiService: ApiService) {}

  selectMenuItems$(): Observable<MenuItem[]> {
    return this.menuItems$.asObservable();
  }

  selectMenuItem$(id: string): Observable<MenuItem | undefined> {
    return this.menuItems$.pipe(
      map((items) => items.find((item) => item.id === id))
    );
  }

  fetchMenuItems(): void {
    this.apiService
      .getItems()
      .pipe(take(1))
      .subscribe((menuItems) => {
        this._setMenuItems(menuItems);
      });
  }

  addMenuItem(menuItem: BaseMenuItem): void {
    this.apiService.addItem(menuItem).subscribe((res) => {
      console.log('Menu item added successfully', res);
      this.fetchMenuItems();
    });
  }

  editMenuItem(menuItem: MenuItem): void {
    this.apiService.updateItem(menuItem).subscribe((res) => {
      console.log('Menu item updated successfully', res);
      this.fetchMenuItems();
    });
  }

  deleteMenuItem(menuId: string): void {
    console.log('menuId', menuId);
    this.apiService.deleteItem(menuId).subscribe((res) => {
      console.log('Menu item deleted successfully', res);
      this.fetchMenuItems();
    });
  }

  private _setMenuItems(menuItems: any): void {
    this.menuItems$.next(menuItems);
  }
}
