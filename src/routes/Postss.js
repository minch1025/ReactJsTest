import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Postss.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Postss extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contactData: []
        }
    }
    componentWillMount() {
        fetch('http://localhost:8080/detail')
            .then(res => res.json())
            .then(data => this.setState({
                contactData: data
            }));

    }

    render() {
        const { contactData } = this.state;
        const columns = [

       {
            dataField: 'demandTime',
            text: 'Demand Time',
        }, {
            dataField: 'power',
            text: 'Power',    
        }, {
            dataField: 'voltage',
            text: 'Voltage',
      
        }, {
            dataField: 'current1',
            text: 'Current1'
        }, {
            dataField: 'current2',
            text: 'Current2'
        }, {
            dataField: 'current3',
            text: 'Current3'
        }, {
            dataField: 'current4',
            text: 'Current4'
        }, {
            dataField: 'current5',
            text: 'Current5'
        }, 
        {
            dataField: 'current6',
            text: 'Current6'
        }, {
            dataField: 'current7',
            text: 'Current7'
        }, {
            dataField: 'current8',
            text: 'Current8'
        }, {
            dataField: 'temperture1',
            text: 'Temperture1'
        }, {
            dataField: 'temperture2',
            text: 'Temperture2'
        }, {
            dataField: 'temperture3',
            text: 'Temperture3'
        }, {
            dataField: 'temperture4',
            text: 'Temperture4'
        }, {
            dataField: 'temperture5',
            text: 'Temperture5'
        }, {
            dataField: 'temperture6',
            text: 'Temperture6'
        }, {
            dataField: 'temperture7',
            text: 'Temperture7'
        }, {
            dataField: 'temperture8',
            text: 'Temperture8'
        }, {
            dataField: 'ry_status',
            text: 'Ry_status'
        }, {
            dataField: 'mode1',
            text: 'Mode1'
        }, {
            dataField: 'mode2',
            text: 'Mode2'
        }, {
            dataField: 'mode3',
            text: 'Mode3'
        }, {
            dataField: 'mode4',
            text: 'Mode4'
        }, {
            dataField: 'input1',
            text: 'Input1'
        }, {
            dataField: 'inpu2',
            text: 'Input2'
        }, {
            dataField: 'valid',
            text: 'Valid'
         }
        ];
     

        
        return (
            <div style= {{padding:"20px"}}>
            <h1 className="h2">contactData</h1>
                <BootstrapTable keyField='id' data={contactData} columns={columns} striped
                    hover
                    condensed
                    pagination={ paginationFactory()} />
                     
                    
            </div>
        
        )
    }
}
export default Postss;