import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product';
import AppSideBar from './AppSideBar';
import { Button, Grid, Col, Row } from 'react-bootstrap';
import * as Actions from './../actions';


class AppProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            сurrentProducts: this.props.products,
            currentDisplay: 'tile'
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        this.sortProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props){
             this.sortProducts()
        }
        if (prevProps.search !== this.props.search){
             this.searchProducts()
        }
    }

    sortProducts() {
        let products = this.props.products;
        if (this.props.currentCategory !== '') {
            products = products.filter(item => !item.category.localeCompare(this.props.currentCategory));
        }
        if (this.props.priceTo !== '') {
            products = products.filter(item => (item.price > this.props.priceFrom && item.price < this.props.priceTo));
        } else {
            products = products.filter(item => (item.price > this.props.priceFrom));
        }
        this.setState({сurrentProducts: products})
    }

    searchProducts() {
        this.setState({сurrentProducts: this.props.products.filter(item => item.name.toLowerCase().includes(this.props.search))});
    }

    handleOnClick(name){
        this.setState({currentDisplay: name});
    }

    render() {
        return (
            <Grid fluid className="content">
                <Row >
                    <AppSideBar/>
                    <Button type='button' onClick={() => this.handleOnClick('tile')}>Плиткой</Button>
                    <Button type='button' onClick={() => this.handleOnClick('line')}>Строкой</Button>
                    <h1 className="rubric">Товары</h1>
                    <Col lg={10}>
                        {this.state.сurrentProducts.map(item => (
                            <Product
                                key={item.id}
                                product={item}
                                display={this.state.currentDisplay}
                            />
                        ))}
                    </Col>
                </Row>
            </Grid>
        );
    }

}

function mapStateToProps (state) {
    return {
        products: state.products.productsById,
        search: state.products.search,
        currentCategory: state.categories.currentCategory,
        priceFrom: state.categories.priceFrom,
        priceTo: state.categories.priceTo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppProducts);
