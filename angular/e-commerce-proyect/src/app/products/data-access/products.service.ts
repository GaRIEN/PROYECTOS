import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpService {


  getProducts() {
    return this.http.get(`${this.apirUrl}/products`);
  }

}
