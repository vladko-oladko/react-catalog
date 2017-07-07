import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row  from 'react-bootstrap/lib/Row';
import { connect } from 'react-redux';
import Product from './product';

class AppProducts extends Component {
    render() {
        return (
            <Grid className="content">
                <Row className="show-grid ">
                    <h1 className="rubric">Товары</h1>
                    {this.props.products.map(product => (
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
        );
    }

}

function mapStateToProps (state) {
    return {
        products: state.products.productsById
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
