import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductsStateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  standalone: true,
  providers: [ProductsStateService],
})
export default class ProductListComponent {

  productsState = inject(ProductsStateService);
}
