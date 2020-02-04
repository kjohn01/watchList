import React, { useContext } from 'react';
import ShopContext from '../context/shop-context';
import { Product } from '../components/Product';

const Products = props => {

    const context = useContext(ShopContext);
    let productList = context.product.map((p, i) => <Product 
        key={i} 
        id={p.id} 
        title={p.title}
        description={p.description}
        image={p.image}
        price={p.price}
        />);
    return(
        <div className="d-flex justify-content-center">{productList}</div>
    );
};

export default Products;