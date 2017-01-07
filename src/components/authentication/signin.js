import React,{ Component } from 'react';
import { reduxForm } from 'redux-form';
import { Spinner } from '../common';
import * as actions from '../../actions';

class SignIn extends Component {
    componentWillMount() {
        this.props.SignOutUser();
    }
    handleFormSubmit({ email,password }) {
            console.log(email,password);
            this.props.SignInUser({ email,password });
        }
    renderContent() {
        console.log(this.props.loading);
        if(this.props.loading){
            return (
                <Spinner></Spinner>
            );
        }
        const { handleSubmit,fields : { email,password } } = this.props;
        return (
            <div className="col-xs-5">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="form-group">
                        <input {...email} type="text"  className="form-control" placeholder="example@example.com" />
                    </div>
                    <div className="form-group">
                        <input {...password} type="password"  className="form-control" placeholder="enter your password" />
                    </div>
                    <div className="form-group">
                        <button action="submit" className="btn btn-primary">signin</button>
                    </div>
                </form>
            </div>
        );
    }
    render() {
        return (
            <div className="container">
            <br/>
                {this.renderContent.bind(this)()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { loading : state.auth.loading };
}
export default reduxForm({
    form : 'signin',
    fields : ['email','password']
},mapStateToProps,actions)(SignIn);