import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Device.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

// const columns = [{
//   dataField: 'id',
//   text: 'Product ID'
// }, {
//   dataField: 'name',
//   text: 'Product Name'
// }, {
//   dataField: 'price',
//   text: 'Product Price'
// }];
class Device extends Component {
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {
            contactData: [],

        };

    }

    componentWillMount() {
        fetch('http://localhost:8080/device')
            .then(res => res.json())
            .then(data => this.setState({
                contactData: data
            }));

    }

    handleGetReloadData() {
        this.setState({
            message: "reload it!"
        });
    }

    render() {
        const { contactData } = this.state;
        console.log(contactData);
        const columns = [
            {
                dataField: 'deviceId',
                text: 'deviceId',
            },
            {
                dataField: 'name',
                text: 'Product Name',
                filter: textFilter()
            }, {
                dataField: 'ip',
                text: 'Product IP'
            }, {
                dataField: 'equipment_no',
                text: 'Product Number'
            }, {
                dataField: 'imsi',
                text: 'IMSI'
            }, {
                dataField: 'sim_serial',
                text: 'SIM serial',
                filter: textFilter()
            }];
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            selected: []
        };

        return (
            <div>
                <BootstrapTable keyField='deviceId' data={contactData} columns={columns} striped
                    hover
                    condensed
                    selectRow={selectRow}
                    pagination={paginationFactory()} 
                    filter={ filterFactory() }/>





            </div>
         
        )

    }
}

export default Device;
