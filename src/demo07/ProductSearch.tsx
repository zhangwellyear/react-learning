import React, { Component } from "react";
import Search from "./Search";
import { products as initialProducts } from "../data/products";
import Product from "./Product";

class ProductSearch extends Component<
  any,
  {
    category: any;
  }
> {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      category: this.getCategoryData(initialProducts),
    };
  }

  getCategoryData(products) {
    const categoryMap = {};
    products.forEach((product) => {
      if (categoryMap[product.category] === undefined)
        categoryMap[product.category] = [product];
      else categoryMap[product.category].push(product);
    });

    const categories = [];
    for (let key of Object.keys(categoryMap)) {
      categories.push({
        category: key,
        products: categoryMap[key],
      });
    }

    return categories;
  }

  onSearch(v) {
    const currProducts = initialProducts.filter((item) =>
      item.name.includes(v)
    );
    this.setState({
      category: this.getCategoryData(currProducts),
    });
  }

  render() {
    return (
      <div>
        <Search search={this.onSearch} />
        <Product categories={this.state.category} />
      </div>
    );
  }
}

export default ProductSearch;
