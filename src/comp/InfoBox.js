import React, {Component} from "react";
import Chart from 'react-apexcharts';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// function Footer() {
//   return(
//     <h1>FOOTER</h1>
//   )
// }

// export default Footer

class InfoBox extends Component {

constructor(props) {
    super(props);
    
    this.state = {
      series:  props.data.NUM_COMPANIES,
      chartOptions: {
        labels: props.data.SECTORS,
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return Number((val).toFixed(0)) + "%"
          }
        },
        title: {
          text: this.props.data.NAME,
          align: "left",
          margin: 20,
          offsetY: 0,
          style: {
            fontSize: "20px"
          }
        },
        subtitle: {
          text: "Anzahl Unternehmen pro Wirtschaftssektor",
          align: "left",
          margin: 20,
          offsetY: 30,
          style: {
            fontSize: "12px"
          }
        },
        chart: {
          type: 'donut',
          background: '#f4f4f4',
          foreColor: '#333'
        },

        legend: {
          position: 'bottom',
          itemMargin: {
            horizontal: 5,
            vertical: 5
        }
        },

        plotOptions: {
          pie: {
            donut: {
              size: '45%'
            }
          }
        }
      }
    }
  }

  render() {    
    // return(
    //   <div>
    //     Hello
    //   </div>
    // )
    return (
      <div>
        <p> </p>
        <Chart
          options={this.state.chartOptions}
          series={this.state.series}
          type='donut'
          height="200%"
          width="100%"
        />
        <p> </p>
        <a target="_blank" href={this.props.data.SOURCE}><font size="10px">Zur Quelle</font></a>
      </div>
    );
  }
}

export default InfoBox;