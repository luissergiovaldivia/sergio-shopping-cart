/** @format */

//feature- 1

import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: data.products,
			size: '',
			sort: '',
		};
	}


  /*Ordena el filtro por los precios*/
  /*Ordena los precio de menor a mayor*/
  /*Ordena los precios de mayor a menor*/
	sortProducts = (event) =>{
		//impl
      const sort = event.target.value;
		console.log(event.target.value);
    this.setState(state => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b)=>
        sort === "lowest"?
        ((a.price > b.price) ? 1:-1):
         sort === "highest"?
         ((a.price < b.price) ? 1:-1):
         ((a._id < b._id) ? 1:-1),
      )
    }))
	}

	filterProducts = (event) => {
		//imp
		console.log(event.target.value);
    /*aca muestra la cantidad de productos */
		if (event.target.value === ' ') {
			this.setState({ size: event.target.value, products: data.products });
		} else {
			this.setState({
				size: event.target.value,
				products: data.products.filter((product) => product.availableSize.indexOf(event.target.value) >= 0),
			});
		}
	};
	render() {
		return (
			<div className='grid-container'>
				<header>
					<a href='/'> Sergio Shopping Cart</a>
				</header>
				<main>
					<div className='content'>
						<div className='main'>
							<Filter
								count={this.state.products.length}
								size={this.state.size}
								sort={this.state.sort}
								filterProducts={this.filterProducts}
								sortProducts={this.sortProducts}></Filter>
							<Products products={this.state.products}></Products>
						</div>
						<div className='sidebar'> Cart Items</div>
					</div>
				</main>
				<footer>All right is reserved.</footer>
			</div>
		);
	}
}
export default App;
