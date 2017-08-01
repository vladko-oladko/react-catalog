import React, { Component } from 'react';
import { DropdownButton, Checkbox } from 'react-bootstrap';
import { FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/categories';

class AppOptions extends Component {
    constructor(props) {
        super(props);
    }

    handleChangePrice(name, value){
        if (name == 'from') {
            this.props.actions.productSortPriceFrom(value)
        } else {
            this.props.actions.productSortPriceTo(value)
        }
    }

    handleChangeWeight(name, value){
        if (name == 'from') {
            this.props.actions.productSortWeightFrom(value)
        } else {
            this.props.actions.productSortWeightTo(value)
        }
    }

    handleChangeCpuCount(name, value){
        if (name == 'from') {
            this.props.actions.productSortCpuCountFrom(value)
        } else {
            this.props.actions.productSortCpuCountTo(value)
        }
    }


    handlerCpu(checked, name) {
        if (checked == true) {
            this.props.actions.productAddSortCpu(name)
        } else {
            this.props.actions.productDeleteSortCpu(name)
        }
    }

    handlerResolution(checked, name){
        if (checked == true) {
            this.props.actions.productAddSortRes(name)
        } else {
            this.props.actions.productDeleteSortRes(name)
        }
    }

    checkedCpu(name){
        if (this.props.cpu.filter(item => item == name).length > 0) {
            return true
        } else {
            return false
        }
    }

    checkedRes(name){
        if (this.props.resolution.filter(item => item == name).length > 0) {
            return true
        } else {
            return false
        }
    }

    render() {
        if (this.props.currentCategory == 'phone') {
            return (
                <FormGroup className='options'>
                    <p>По цене</p>
                    <FormControl
                        type="text"
                        placeholder="От"
                        onChange={(event) => this.handleChangePrice('from', event.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="До"
                        onChange={(event) => this.handleChangePrice('to', event.target.value)}
                    />
                    <p>По весу</p>
                    <FormControl
                        type="text"
                        placeholder="От"
                        onChange={(event) => this.handleChangeWeight('from', event.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="До"
                        onChange={(event) => this.handleChangeWeight('to', event.target.value)}
                    />
                    <p >Процессор</p>
                    <DropdownButton title='' id={`dropdown-basic`} >
                        <Checkbox className='checkbox-options' checked={this.checkedCpu('Apple A9')} onChange={(event) => this.handlerCpu(event.target.checked, 'Apple A9')}> A9 </Checkbox>
                        <Checkbox className='checkbox-options' checked={this.checkedCpu('Apple A10')} onChange={(event) => this.handlerCpu(event.target.checked, 'Apple A10')}> A10 </Checkbox>
                    </DropdownButton>
                    <p>Количество ядер</p>
                    <FormControl
                        type="text"
                        placeholder="От"
                        onChange={(event) => this.handleChangeCpuCount('from', event.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="До"
                        onChange={(event) => this.handleChangeCpuCount('to', event.target.value)}
                    />
                    <p >Разрешение</p>
                    <DropdownButton title='' id={`dropdown-basic`} >
                        <Checkbox className='checkbox-options' checked={this.checkedRes('750x1334')} onChange={(event) => this.handlerResolution(event.target.checked, '750x1334')}> 750x1334 </Checkbox>
                        <Checkbox className='checkbox-options' checked={this.checkedRes('640x1136')} onChange={(event) => this.handlerResolution(event.target.checked, '640x1136')}> 640x1136 </Checkbox>
                    </DropdownButton>
                </FormGroup>
            )
        } else if (this.props.currentCategory == 'laptop') {
            return (
                <FormGroup className='options'>
                    <p>По цене</p>
                    <FormControl
                        type="text"
                        placeholder="От"
                        onChange={(event) => this.handleChangePrice('from', event.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="До"
                        onChange={(event) => this.handleChangePrice('to', event.target.value)}
                    />
                    <p>По весу</p>
                    <FormControl
                        type="text"
                        placeholder="От"
                        onChange={(event) => this.handleChangeWeight('from', event.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="До"
                        onChange={(event) => this.handleChangeWeight('to', event.target.value)}
                    />
                    <p >Процессор</p>
                    <DropdownButton title='' id={`dropdown-basic`} >
                        <Checkbox className='checkbox-options' checked={this.checkedCpu('Intel Core i5')} onChange={(event) => this.handlerCpu(event.target.checked, 'Intel Core i5')}> Intel Core i5 </Checkbox>
                        <Checkbox className='checkbox-options' checked={this.checkedCpu('Intel Core i7')} onChange={(event) => this.handlerCpu(event.target.checked, 'Intel Core i7')}> Intel Core i7 </Checkbox>
                    </DropdownButton>
                    <p>Количество ядер</p>
                    <FormControl
                        type="text"
                        placeholder="От"
                        onChange={(event) => this.handleChangeCpuCount('from', event.target.value)}
                    />
                    <FormControl
                        type="text"
                        placeholder="До"
                        onChange={(event) => this.handleChangeCpuCount('to', event.target.value)}
                    />
                    <p >Разрешение</p>
                    <DropdownButton title='' id={`dropdown-basic`} >
                        <Checkbox className='checkbox-options' checked={this.checkedRes('1920x1080')} onChange={(event) => this.handlerResolution(event.target.checked, '1920x1080')}> 1920x1080 </Checkbox>
                        <Checkbox className='checkbox-options' checked={this.checkedRes('750x1334')} onChange={(event) => this.handlerResolution(event.target.checked, '750x1334')}> 750x1334 </Checkbox>
                    </DropdownButton>
                </FormGroup>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps (state) {
    return {
        currentCategory: state.categories.currentCategory,
        cpu: state.categories.cpu,
        resolution: state.categories.resolution
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppOptions);
