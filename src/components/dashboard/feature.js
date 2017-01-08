import React,{ Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import Stats from './Stats';
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
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <h1>Dashboard</h1>
                            <Stats></Stats>
                        </main>
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