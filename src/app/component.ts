import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

import { SimpleDataSource } from './datasource.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getClasses(): string {
      return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }
}
