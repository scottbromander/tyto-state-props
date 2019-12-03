import React, { Component } from 'react';
import ProductCellComponent from './ProductCellComponent';

class MainPageComponent extends Component {

    render() {
        return (
            <div>
                <h2>Here are all my cool products!</h2>
                
                <ProductCellComponent productName="Walkman"/>
                <ProductCellComponent productName="Record Player"/>
                <ProductCellComponent productName="Tuba"/>
                <ProductCellComponent productName="Sega"/>
                <ProductCellComponent productName="Bicycle"/>
                <ProductCellComponent productName="Bison"/>
                
            </div>
        )
    }
}

export default MainPageComponent;