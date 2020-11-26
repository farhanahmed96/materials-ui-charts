import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Burger',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'lightgreen',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [31, 39, 80, 81, 150, 100, 69]
    },
    {
      label: 'Biryani',
      backgroundColor: 'rgba(25,54,142,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'lightblue',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [47, 52, 78, 123, 15, 55, 40]
    },
    {
      label: 'Nihari',
      backgroundColor: 'rgba(150,50,12,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'red',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 40, 80, 54, 18, 129]
    }
  ]
};

function BarChart(){
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }

  export default BarChart;