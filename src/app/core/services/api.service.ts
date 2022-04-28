import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseMenuItem, MenuItem } from '../models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${environment.serverUrl}/api/menu/items`);
  }

  getItem(id: number | string): Observable<MenuItem> {
    return this.http.get<MenuItem>(
      `${environment.serverUrl}/api/menu/items/${id.toString()}`
    );
  }

  addItem(menu: BaseMenuItem): Observable<void> {
    return this.http.post<void>(
      `${environment.serverUrl}/api/menu/items`,
      menu
    );
  }

  updateItem(menu: MenuItem): Observable<void> {
    return this.http.put<void>(
      `${environment.serverUrl}/api/menu/items/${menu.id}`,
      menu
    );
  }

  deleteItem(menuId: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.serverUrl}/api/menu/items/${menuId}`
    );
  }
}
