import React, { Component } from 'react';
import { Col, Image, Button, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Actions from './../actions/compare';
import { addToBasket } from './../actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkCompare: false
        }
        this.handlerAddToBasket = this.handlerAddToBasket.bind(this);
        this.handlerToCompare = this.handlerToCompare.bind(this);
    }

    componentDidMount() {
        if (this.props.compareProducts.includes(this.props.product._id)) {
            this.setState({checkCompare: true})
        }
    }

    handlerAddToBasket(name) {
        this.props.addToBasket(name);
    }

    handlerToCompare(id, checked) {
        if (checked) {
            this.props.actions.addToCompare(id)
            this.setState({checkCompare: true})
        } else {
            this.props.actions.deleteFromCompare(id)
            this.setState({checkCompare: false})
        }
    }

    render() {
        var description = this.props.product.description.substr(0,150) + '...'
        if (this.props.display == 'tile') {
            return (
                <Col xs={5} sm={4} md={4} lg={3} className="tile_product">
                    <Link to={{pathname:`/item/${this.props.product._id}`}}><h3>{this.props.product.name}</h3></Link>
                    <Link to={{pathname:`/item/${this.props.product._id}`}}><Image src={this.props.product.image} responsive /></Link>
                    <div className='tile-descr'>
                        <Col xs={5} md={4} lg={7} >
                            <h4>{this.props.product.price} BYR</h4>
                        </Col>
                        <Col xs={3} md={4} lg={5}>
                            <Button type='button' onClick={() => this.handlerAddToBasket(this.props.product.name)}>Купить</Button>
                        </Col>
                        <Col xs={12} md={12} lg={12} >
                            <Checkbox className='add-compare' checked={this.state.checkCompare} onChange={(event) => this.handlerToCompare(this.props.product._id, event.target.checked)}> Добавить к сравнению</Checkbox>
                        </Col>
                    </div>
                </ Col>
            )
        } else {
            return (
                <Col xs={10} md={4} lg={12} className="line_product" >
                    <Col xs={10} md={4} lg={3} >
                        <Link to={{pathname:`/item/${this.props.product._id}`}}><Image src={this.props.product.image} responsive /></Link>
                    </Col>
                    <Col xs={10} md={4} lg={5} >
                       <Link to={{pathname:`/item/${this.props.product._id}`}}><h3>{this.props.product.name}</h3></Link>
                       <p>{description}</p>
                    </Col>
                    <Col xs={10} md={4} lg={3} lgOffset={1}>
                        <h3>{this.props.product.price} BYR</h3>
                        <Button type='button' onClick={() => this.handlerAddToBasket(this.props.product.name)}>Купить</Button>
                        <Checkbox checked={this.state.checkCompare} onChange={(event) => this.handlerToCompare(this.props.product._id, event.target.checked)}> Добавить к сравнению</Checkbox>
                    </Col>
                </ Col>
            )
        }
    }
}

function mapStateToProps (state) {
    return {
        compareProducts : state.compare.compareProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
        addToBasket: bindActionCreators(addToBasket, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
