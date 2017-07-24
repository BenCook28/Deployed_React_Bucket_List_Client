import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavBarHeader extends Component{
	renderLinks(){
		if(this.props.authenticated){
			return <NavItem href="signout">Sign Out</NavItem>
		}else{
			return [
				<NavItem key={1} href="signin">Sign In</NavItem>,
				<NavItem key={2} href="signup">Sign Up</NavItem>
			];
		}
	}

	render(){
		return(
			<Navbar className = "navBar">
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Bucket List Plus</a>
					</Navbar.Brand>
				</Navbar.Header>
					<Nav>
						{this.renderLinks()}
						<NavDropdown key={3} title="Cool Stuff" id="basic-nav-dropdown">
							<MenuItem key={3.1}>Action</MenuItem>
							<MenuItem key={3.2}>Another Action</MenuItem>
							<MenuItem key={3.3}>A Third Action</MenuItem>
							<MenuItem divider />
							<MenuItem key={3.4}>Separated Link</MenuItem>
						</NavDropdown>
					</Nav>
			</Navbar>
		);
	}
}
function mapStateToProps(state) {
		return {
			authenticated: state.auth.authenticated
		};
	}
export default connect(mapStateToProps)(NavBarHeader);