import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';
import {Link} from 'react-router-dom'

export default class AppHeader extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
