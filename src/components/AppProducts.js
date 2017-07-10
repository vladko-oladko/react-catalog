import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row  from 'react-bootstrap/lib/Row';
import { connect } from 'react-redux';
import Product from './product';
import AppSideBar from './AppSideBar'

class AppProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            сurrentProducts: []
        };
    }

    componentDidMount() {
        this.sortProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentCategory !== this.props.currentCategory) {
            this.sortProducts();
        }
    }

    sortProducts() {
        if (this.props.currentCategory == '') {
            this.setState({сurrentProducts: this.props.products});
        } else {
            this.setState({сurrentProducts: this.props.products.filter(item => !item.category.localeCompare(this.props.currentCategory))});
        }
    }

    render() {
        return (
            <div>
                <AppSideBar/>
                <Grid className="content">
                    <Row className="show-grid ">
                        <h1 className="rubric">Товары</h1>
                        {this.state.сurrentProducts.map(product => (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                            />
                        ))}
                    </Row>
                </Grid>
            </div>
        );
    }

}

function mapStateToProps (state) {
    return {
        products: state.products.productsById,
        currentCategory: state.products.currentCategory
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      custom: (data) => dispatch({
          type: 'ACTION',
          payload: data,
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppProducts);
