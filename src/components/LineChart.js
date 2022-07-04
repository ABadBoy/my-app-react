import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class LineChart extends  React.Component{
  constructor(props) {
    super(props);

    this.state={
      chartOptions:{
        xAxis:{
          categories: ['A', 'B', 'C'],
        },
        series:[
          {data:[1,2,3]}
        ]
      },
      hoverData:null
    };
  }

  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
        <div>
          <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              containerProps={{ style: { width: "100%", height: "100%" }}}
          />
        </div>
    )
  }
}

export default LineChart;
