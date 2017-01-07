import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class Header extends Component {
    renderButtons() {
        if(this.props.authenticated) {
            return [
                <li key={5} className="nav-item">
                    <Link className="nav-link" to="/signout"><h3>Singout</h3></Link>
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
    render() {
        return (
          <nav className="navbar navbar-light bg-faded">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                  <Link to="/" className="nav-link">
                      <h3>Home</h3>
                  </Link>
              </li>
                {this.renderButtons()}
            </ul>
          </nav>
        );
    }
}
function mapStateToProps(state) {
    return {
        authenticated : state.auth.authenticate
    }
}
export default connect(mapStateToProps)(Header);