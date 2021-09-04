export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Royal Rasmalai',
    price: 799,
    description: 'Juicy cake with layers soaked with the Rasmalai'
  },
  {
    id: 2,
    name: 'Black Forest',
    price: 699,
    description: 'Chocolate sponge cake with a rich cherry filling'
  },
  {
    id: 3,
    name: 'Choclate Overloaded',
    price: 299,
    description: ''
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
