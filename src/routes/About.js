import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './About.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class About extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 {this.props.match.params.username}
    //             </div>
    //         );
    //     }
    // }


    constructor(props) {
        super(props);
        this.state = {
            contactData: []
        }
    }
    componentWillMount() {
        fetch('http://localhost:8080/sample')
            .then(res => res.json())
            .then(data => this.setState({
                contactData: data
            }));

    }

    render() {
        const { contactData } = this.state;
        console.log(contactData);
        const columns = [

            {
                dataField: 'address',
                text: 'Address',
                filter: textFilter()
            }, {
                dataField: 'version',
                text: 'Version',

            }, {
                dataField: 'type',
                text: 'Type'
            }, {
                dataField: 'controlRateCH1',
                text: 'ControlRateCH1'
            }, {
                dataField: 'controlRateCH2',
                text: 'ControlRateCH2'
            }, {
                dataField: 'controlRateCH3',
                text: 'ControlRateCH3'
            }, {
                dataField: 'controlRateCH4',
                text: 'ControlRateCH4'
            },
            {
                dataField: 'calculateTime',
                text: 'CalculateTime'
            }, {
                dataField: 'avgVoltage',
                text: 'AvgVoltage'
            }, {
                dataField: 'avgPower',
                text: 'AvgPower'
            }, {
                dataField: 'avgCurrent1',
                text: 'AvgCurrent1'
            }, {
                dataField: 'avgCurrent2',
                text: 'AvgCurrent2'
            }, {
                dataField: 'avgCurrent3',
                text: 'AvgCurrent3'
            }, {
                dataField: 'avgCurrent4',
                text: 'AvgCurrent4'
            }, {
                dataField: 'avgCurrent5',
                text: 'AvgCurrent5'
            }, {
                dataField: 'avgCurrent6',
                text: 'AvgCurrent6'
            }, {
                dataField: 'avgCurrent7',
                text: 'AvgCurrent7'
            }, {
                dataField: 'avgCurrent8',
                text: 'AvgCurrent8'
            }, {
                dataField: 'avgReducedCH1',
                text: 'AvgReducedCH1'
            }, {
                dataField: 'avgReducedCH2',
                text: 'AvgReducedCH2'
            }, {
                dataField: 'avgReducedCH3',
                text: 'AvgReducedCH3'
            }, {
                dataField: 'avgReducedCH4',
                text: 'AvgReducedCH4'
            }, {
                dataField: 'controNumCH1',
                text: 'ControNumCH1'
            }, {
                dataField: 'controNumCH2',
                text: 'ControNumCH2'
            }, {
                dataField: 'controNumCH3',
                text: 'ControNumCH3'
            }, {
                dataField: 'controNumCH4',
                text: 'ControNumCH4'
            }, {
                dataField: 'offNumCH1',
                text: 'OffNumCH1'
            }, {
                dataField: 'offNumCH2',
                text: 'OffNumCH2'
            }, {
                dataField: 'offNumCH3',
                text: 'OffNumCH3'
            }, {
                dataField: 'offNumCH4',
                text: 'OffNumCH4'
            }, {
                dataField: 'worktimeCH1',
                text: 'WorktimeCH1'
            }, {
                dataField: 'worktimeCH2',
                text: 'WorktimeCH2'
            }, {
                dataField: 'worktimeCH3',
                text: 'WorktimeCH3'
            }, {
                dataField: 'worktimeCH4',
                text: 'WorktimeCH4'
            },


            {
                dataField: 'controlTimeCH1',
                text: 'controlTimeCH1'
            }, {
                dataField: 'controlTimeCH12',
                text: 'controlTimeCH2'
            }, {
                dataField: 'controlTimeCH13',
                text: 'controlTimeCH3'
            }, {
                dataField: 'controlTimeCH14',
                text: 'controlTimeCH14'
            },



            {
                dataField: 'stopTimeCH1',
                text: 'StopTimeCH1'
            }, {
                dataField: 'stopTimeCH2',
                text: 'StopTimeCH2'
            }, {
                dataField: 'stopTimeCH3',
                text: 'StopTimeCH3'
            }, {
                dataField: 'stopTimeCH4',
                text: 'StopTimeCH4'
            }
        ];


        return (
            <div>
                <BootstrapTable
                    keyField='address'
                    data={contactData}
                    columns={columns}
                    striped
                    hover
                    condensed
                    pagination={paginationFactory()}
                    filter={filterFactory()} />




            </div>

        )
    }
}
export default About;