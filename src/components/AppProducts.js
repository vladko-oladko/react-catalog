import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product';
import AppSideBar from './AppSideBar';
import {Link, Redirect} from 'react-router-dom';
import { Button, Grid, Col, Row } from 'react-bootstrap';


class AppProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            сurrentProducts: this.props.products,
            currentDisplay: 'tile',
            compareBool: false
        };
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleCompare = this.handleCompare.bind(this);
    }

    componentDidMount() {
        this.sortProducts();

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
             this.sortProducts()
        }
        if (prevProps.search !== this.props.search) {
             this.searchProducts()
        }
    }

    sortProducts() {
        let products = this.props.products;
        if (this.props.currentCategory !== '') {
            products = products.filter(item => !item.category.localeCompare(this.props.currentCategory));
        }
        if (this.props.priceTo !== '') {
            products = products.filter(item => (item.price >= this.props.priceFrom && item.price <= this.props.priceTo));
        } else {
            products = products.filter(item => (item.price >= this.props.priceFrom));
        }
        if (this.props.weightTo !== '') {
            products = products.filter(item => (item.weight >= this.props.weightFrom && item.weight <= this.props.weightTo));
        } else {
            products = products.filter(item => (item.weight >= this.props.weightFrom));
        }
        if (this.props.cpu.length !== 0) {
            products = products.filter(item => (this.props.cpu.indexOf(item.cpu)) != -1)
        }
        if (this.props.cpuCountTo !== '') {
            products = products.filter(item => (item.cpuCount >= this.props.cpuCountFrom && item.cpuCount <= this.props.cpuCountTo));
        } else {
            products = products.filter(item => (item.cpuCount >= this.props.cpuCountFrom));
        }
        if (this.props.resolution.length !== 0) {
            products = products.filter(item => (this.props.resolution.indexOf(item.resolution)) != -1)
        }
        this.setState({сurrentProducts: products})
    }

    searchProducts() {
        this.setState({сurrentProducts: this.props.products.filter(item => item.name.toLowerCase().includes(this.props.search))});
    }

    handleDisplay(name){
        this.setState({currentDisplay: name});
    }

    handleCompare() {
        if(this.props.compareProducts[0]) {
            this.setState({compareBool: true})
        }
    }

    render() {
        if (this.state.compareBool) {
            return (
                <Redirect to='/compare'/>
            )
        }
        return (
            <Grid className="content">
                <Row >
                    <Col lg={12}>
                        <AppSideBar/>
                        <Button type='button' onClick={() => this.handleDisplay('tile')}>Плиткой</Button>
                        <Button type='button' onClick={() => this.handleDisplay('line')}>Строкой</Button>
                        <Button className="btn-compare" type='button' onClick={() => this.handleCompare()}>Сравнить</Button>
                        <h1 className="rubric">Товары</h1>
                        <Col lg={10}>
                            {this.state.сurrentProducts.map((item, index) => (
                                <Product
                                    key={index}
                                    product={item}
                                    display={this.state.currentDisplay}
                                />
                            ))}
                        </Col>
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
        weightFrom: state.categories.weightFrom,
        weightTo: state.categories.weightTo,
        compareProducts: state.compare.compareProducts,
        cpu: state.categories.cpu,
        resolution: state.categories.resolution,
        cpuCountFrom: state.categories.cpuCountFrom,
        cpuCountTo: state.categories.cpuCountTo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppProducts);
