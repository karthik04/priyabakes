export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  typeCode: string;
}
export interface ProductTypes {
  code: string;
  name: string;
}
export const productTypes: Array<ProductTypes> = [
  {
    code: "cake",
    name: "Cakes"
  }, {
    code: "desserts_snacks",
    name: "Desserts and Snacks"
  }
]

export const products = [
  {
    id: 1,
    name: 'Royal Rasmalai',
    price: 799,
    description: 'Juicy cake with layers soaked with the Rasmalai',
    typeCode: "cake"
  },
  {
    id: 2,
    name: 'Black Forest',
    price: 699,
    description: 'Chocolate sponge cake with a rich cherry filling',
    typeCode: "cake"
  },
  {
    id: 3,
    name: 'Choclate Overloaded',
    price: 299,
    description: '',
    typeCode: "cake"
  },
  {
    id: 4,
    name: 'Choclate cookies',
    price: 499,
    description: '',
    typeCode: "desserts_snacks"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
