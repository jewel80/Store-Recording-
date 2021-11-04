import React, { Component } from 'react'

const ProductContext = React.createContext();
//provider
//Consumer



class productProvider extends Component {
    
    render() {
        return (
            <ProductContext.Provider value="hello from context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Counsumer;

export {productProvider, ProductConsumer}