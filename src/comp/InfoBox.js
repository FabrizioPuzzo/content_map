import React, {Component} from "react";
import Chart from 'react-apexcharts';

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
            fontSize: "15px"
          }
        },
        subtitle: {
          text: "Anzahl Unternehmen pro Wirtschaftssektor",
          align: "left",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "9px"
          }
        },
        chart: {
          type: 'donut',
          background: '#f4f4f4',
          foreColor: '#333'
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
    return <Chart
      options={this.state.chartOptions}
      series={this.state.series}
      type='donut'
      height="200%"
      width="200%"
    />;
  }
}

export default InfoBox;