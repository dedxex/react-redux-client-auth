import React,{ Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {
    componentWillMount() {
        this.props.SignOutUser();
    }
    handleFormSubmit({ email,password }) {
            console.log(email,password);
            this.props.SignInUser({ email,password });
        }
    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops{this.props.errorMessage}</strong>
                </div>
            );
        }
    }
    render() {
        const { handleSubmit,fields : { email,password } } = this.props;  
        return (
            <div className="container">
            <br/>
                <div className="col-xs-5">
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <div className="form-group">
                            <input {...email} type="text"  className="form-control" placeholder="example@example.com" />
                        </div>
                        <div className="form-group">
                            <input {...password} type="password"  className="form-control" placeholder="enter your password" />
                        </div>
                        {this.renderAlert()}
                        <div className="form-group">
                            <button action="submit" className="btn btn-primary">signin</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { errorMessage : state.auth.error };
}
export default reduxForm({
    form : 'signin',
    fields : ['email','password']
},mapStateToProps,actions)(SignIn);