import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Inventory } from '../modal/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl: string;

  public errorStatus: any;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.inventoryBaseUrl;
  }

  getInventoryData() {
    const url = `${this.baseUrl}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  postData(inventoryData: any) {
    const url = `${this.baseUrl}`;
    return this.http.post(url, inventoryData).pipe(catchError(this.handleError));
  }

  createInventory(inventory: Inventory) {
    const url = `${this.baseUrl}`;
    return this.http.post(url, inventory).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured :', error.error.message);
    } else {
      this.errorStatus = `${error.status}`;
    }
    return throwError(this.errorStatus);
  }


}
