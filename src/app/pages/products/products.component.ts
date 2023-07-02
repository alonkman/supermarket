import { Component } from '@angular/core';
import { ProductService } from 'src/services/products.service'; // Adjust the path based on your file structure
import { OrdersService } from 'src/services/orders.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  baseUrl = 'http://127.0.0.1:8000/';
  products: any[] = [];
  cart: any[] = [];

  constructor(
    private productService: ProductService,
    private orderService: OrdersService
  ) {
    this.loadData();
  }

  loadData() {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  add(nameInput: string, priceInput: number, imageInput: any) {
    const formData = new FormData();
    formData.append('desc', nameInput);
    formData.append('price', priceInput.toString());
    formData.append('image', imageInput.files[0]);

    this.productService.createProduct(formData).subscribe(
      (res) => {
        console.log(res);
        this.loadData();
      },
      (error) => {
        console.error('Failed to add product', error);
      }
    );
  }

  deleteProd(id: number) {
    this.productService.deleteProduct(id).subscribe((res) => console.log(res));
    this.loadData();
  }

  buy() {
    this.orderService.checkOut(this.cart).subscribe((res) => console.log(res));
  }

  addToCart(price: number, desc: string, id: number) {
    const cartItem = { amount: 1, desc, price: Math.round(price) }; // Convert price to an integer
    this.cart.push(cartItem);
    console.log(this.cart);
  }

  getImageUrl(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }
}
  