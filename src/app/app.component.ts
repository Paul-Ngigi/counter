import { Component } from '@angular/core';
import { IProduct } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_test';
  products: IProduct[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products = [
      {
        image: 'assets/panel_kit.svg',
        name: 'Apowery Solar Panel Kit 12V Monacrystalline Battery Maintainer + 10A Solar Charger',
        amount: 180255,
        color: 'Black',
        available: true,
        totalItems: 2,
      },
      {
        image: 'assets/panel_kit.svg',
        name: 'Apowery Solar Panel Kit 12V Monacrystalline Battery Maintainer + 10A Solar Charger',
        amount: 180255,
        color: 'Black',
        available: true,
        totalItems: 2,
      },
      {
        image: 'assets/panel_kit.svg',
        name: 'Apowery Solar Panel Kit 12V Monacrystalline Battery Maintainer + 10A Solar Charger',
        amount: 180255,
        color: 'Black',
        available: true,
        totalItems: 2,
      },
    ];
  }

  subtract(idx: number) {
    if (this.products[idx]?.totalItems && this.products[idx]?.totalItems !< 0) {
      this.products[idx].totalItems--;
    }
  }

  add(idx: number) {
    if (this.products[idx]?.totalItems && this.products[idx]?.totalItems !< 0) {
      this.products[idx].totalItems++;
    }
  }

  delete(idx: number) {
    if (idx >= 0 && idx < this.products.length) {
      this.products.splice(idx, 1);
    }
  }
}
