import React,{ Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import Stats from './Stats';
import Table from './table';
import Card from './Card';
import { Spinner } from '../common';
import * as actions from '../../actions';
class Feature extends Component{
    getData(collection) {
        this.props.fetchCollectionData(collection);
    }
    componentWillMount() {
        this.props.fetchMessage();
        this.props.fetchCollectionData("exercise");
    }
    renderCard() {
        if(!this.props.collection_data){
            console.log("data is loading");
            return <Spinner></Spinner>;
        }
        else{
            this.props.collection_data.map(item => <Card />);
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar onClick={this.getData.bind(this)}></SideBar>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <h1>Dashboard</h1>
                            <Stats></Stats>
                            <h2>Section title</h2>
                            { this.renderCard() }
                            <Table></Table>
                        </main>
                    </div>
                </div>
                {this.props.message}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { message : state.auth.message,
    collection_data : state.basic.collection_data,
    dataloading : state.basic.dataloading}
}
export default connect(mapStateToProps,actions)(Feature);