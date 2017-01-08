import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import { Spinner } from '../common';
class Header extends Component {
    renderButtons() {
        console.log(this.props.errorcod);
        if(this.props.authenticated) {
            return [
                <li key={5} className="nav-item">
                    <a className="nav-link" onClick={this.signout.bind(this)}><h3>Signout</h3></a>
                </li>,
                <li key={4} className="nav-item">
                    <Link  className="nav-link" to="/feature"><h3>Feature</h3></Link>
                </li>
            ];
        }
        else{
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin"><h3>SignIn</h3></Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup"><h3>SignUp</h3></Link>
                </li>
            ];
        }
    }
    signout(){
        this.props.SignOutUser();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Dashboard</a>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            {this.renderButtons()}
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        authenticated : state.auth.authenticate,errorcod : state.auth.error
    }
}
export default connect(mapStateToProps,actions)(Header);