import React,{ Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import * as actions from '../../actions';
class Feature extends Component{
    componentWillMount() {
        this.props.fetchMessage();
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar></SideBar>
                    </div>
                </div>
                {this.props.message}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { message : state.auth.message }
}
export default connect(mapStateToProps,actions)(Feature);