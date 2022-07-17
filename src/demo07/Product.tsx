import React, { Component } from "react";

type ProductType = {
  name: string;
  price: string;
};

type CategoryType = {
  category: string;
  products: ProductType[];
};

class Product extends Component<{
  categories: CategoryType[];
}> {
  render(): React.ReactNode {
    const { categories } = this.props;
    return categories.map((category, idx) => (
      <div key={idx}>
        <h3>{category.category}</h3>
        <ul>
          {category.products.map((product, idxP) => (
            <li key={idxP}>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    ));
  }
}

export default Product;
