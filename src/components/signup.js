/**
 * Created by taranjeetsingh on 01-01-2017.
 */
import React,{ Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class SignUp extends Component{
    componentWillMount() {
        this.props.SignOutUser();
    }
    handleFormSubmit(formProps){
        this.props.SignUpUser(formProps);
    }
    renderErrorMessage() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops{this.props.errorMessage}</strong>
                </div>
            );
        }
    }
    render() {
        const { handleSubmit,fields:{email,password,cpassword}}=this.props;
        return (
            <div className="col-xs-5">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="form-group">
                        <input type="text" className="form-control" {...email} placeholder="enter email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" {...password} placeholder="enter password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" {...cpassword} placeholder="enter confirm password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                    <div className="form-group">
                        {this.renderErrorMessage()}
                    </div>
                    {cpassword.touched && cpassword.error && <div className="error">{cpassword.error}</div>}
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        errorMessage : state.auth.error
    };
}
function validate(formProps) {
    let error = {};
    const { email,password,cpassword } = formProps;
    /*formProps.map(formProp => {
        if(!formProp) {
            error.formProp=`${formProp} is required`;
        }
    });*/
    if(!email) {
        error.email="email is required";
    }
    if(!password) {
        error.password="password is required";
    }
    if(!cpassword) {
        error.cpassword="confirm password is required";
    }

    if(password!==cpassword) {
        error.cpassword = "password should match";
    }
    return error;
}
export default reduxForm({
    form : 'signup',
    fields : ['email','password','cpassword'],
    validate
},mapStateToProps,actions)(SignUp);