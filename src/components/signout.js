/**
 * Created by taranjeetsingh on 01-01-2017.
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.SignOutUser();
    }
    render() {
        return (
            <div></div>
        );
    }
}
export default connect(null,actions)(SignOut);