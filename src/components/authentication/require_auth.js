/**
 * Created by taranjeetsingh on 01-01-2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.youAreNotAuth();
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.youAreNotAuth();
                this.context.router.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticate,error : state.auth.error };
    }

    return connect(mapStateToProps,actions)(Authentication);
}