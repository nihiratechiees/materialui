import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ProductModel {
  code: string;
  name: string;
  price: number;
}


@Component({
  selector: 'app-product',
  imports: [CurrencyPipe,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})

export class Product {
  title = signal('Product Listing');
  isediting = signal(false);
  btntext = signal('Add Product');
  name='';
  code='';
  price=0;




  products = signal<ProductModel[]>([
    { code: 'P101', name: 'Laptop', price: 45000 },
    { code: 'P102', name: 'Mobile', price: 25000 },
    { code: 'P103', name: 'Tablet', price: 15000 },
    { code: 'P104', name: 'Monitor', price: 10000 },
  ]);

  deleteProduct(code: string) {
    this.products.update((products) =>
      products.filter((product) => product.code !== code)
    );
  }

  addProduct() {
    if (this.isediting()) {
      //
      this.products.update((products) =>
        products.map((product) => {
          if (product.code === this.code) {
            return { code: this.code, name: this.name, price: this.price };
          }
          return product;
        })
      );
    } else {
      const newProduct: ProductModel = { code: this.code, name: this.name, price: this.price };
      this.products.update((products) => [...products, newProduct]);
    }
    this.code = '';
    this.name = '';
    this.price = 0;
    this.isediting.set(false);
    this.btntext.set('Add Product');
  }

  editProduct(code: string) {
    this.isediting.set(true);
    this.btntext.set('Update Product');
    let prod = this.products().find((p) => p.code === code);
    if (prod) {
      this.code = prod.code;
      this.name = prod.name;
      this.price = prod.price;
    }
  }

}
