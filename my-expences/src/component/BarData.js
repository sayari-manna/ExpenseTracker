import * as React from 'react';
import {Bar} from 'react-chartjs-2';

export default function BarData(props) {
  let yearly_data = {"2019":0,"2020":0,"2021":0,"2022":0}
  let monthly_data = {"January":0,"February":0,"March":0,"April":0,"May":0,"June":0,"July":0,"August":0,"September":0,"October":0,"November":0,"December":0};
  let years = [];
  if (props.year==="All"){
        years.push("2019");
        years.push("2020");
        years.push("2021");
        years.push("2022");
      }
  else{
      years.push(props.year);}
  for(let i in props.result){
    yearly_data[props.result[i].year] = yearly_data[props.result[i].year] + props.result[i].price;
    if(years.includes(props.result[i].year)){
      let month = props.result[i].date.split(' ');
      monthly_data[month[1]] = monthly_data[month[1]] + props.result[i].price;
    }
  }  
  const monthly_state = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Money Spend per month',
        backgroundColor: ['rgba(54, 162, 235, 0.4)','rgba(214, 165, 237, 0.4)','rgba(163, 234, 164, 0.4)','rgba(250, 248, 122, 0.4)',//
        'rgba(239, 178, 87, 0.4)','rgba(35, 234, 244, 0.4)','rgba(41, 67, 233, 0.4)','rgba(237, 88, 183, 0.4)',//
        'rgba(238, 52, 55, 0.4)','rgba(36, 139, 28, 0.4)','rgba(113, 19, 189, 0.4)','rgba(207, 93, 12, 0.4)'],

        borderColor: ['rgba(54, 162, 235, 1)','rgba(161, 45, 215, 1)','rgba(71, 178, 73, 1)','rgba(237, 233, 7, 1)',//
        'rgba(203, 136, 35, 1)','rgba(50, 172, 179, 1)','rgba(40, 58, 178, 1)','rgba(174, 59, 174, 1)',//
        'rgba(182, 26, 28, 1)','rgba(56, 132, 51, 1)','rgba(94, 34, 143, 1)','rgba(202, 114, 73, 1)'],
        borderWidth: 1,
        data: [monthly_data.January, monthly_data.February, monthly_data.March, monthly_data.April, monthly_data.May, //
              monthly_data.June, monthly_data.July, monthly_data.August, monthly_data.September, monthly_data.October, monthly_data.November, monthly_data.December]
      }
    ]
  };
   
  const yearly_state = {
    labels: ['2019', '2020', '2021', '2022','2023'],
    datasets: [
      {
        label: 'Money Spend per year',
        backgroundColor: ['rgba(54, 162, 235, 0.4)','rgba(214, 165, 237, 0.4)','rgba(163, 234, 164, 0.4)','rgba(250, 248, 122, 0.4)',//
        'rgba(239, 178, 87, 0.4)','rgba(35, 234, 244, 0.4)','rgba(41, 67, 233, 0.4)','rgba(237, 88, 183, 0.4)',//
        'rgba(238, 52, 55, 0.4)','rgba(36, 139, 28, 0.4)','rgba(113, 19, 189, 0.4)','rgba(207, 93, 12, 0.4)'],

        borderColor: ['rgba(54, 162, 235, 1)','rgba(161, 45, 215, 1)','rgba(71, 178, 73, 1)','rgba(237, 233, 7, 1)',//
        'rgba(203, 136, 35, 1)','rgba(50, 172, 179, 1)','rgba(40, 58, 178, 1)','rgba(174, 59, 174, 1)',//
        'rgba(182, 26, 28, 1)','rgba(56, 132, 51, 1)','rgba(94, 34, 143, 1)','rgba(202, 114, 73, 1)'],
        borderWidth: 1,
        data: [yearly_data["2019"], yearly_data["2020"],yearly_data["2021"], yearly_data["2022"], yearly_data["2023"]]
      }
    ]
  };

    return (<div>
      <div sx={{minHeight: '80%'}}>
        <Bar
          data={monthly_state}
          height='350px'
          options={{
            title:{
              display:true,
              text:'',
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              yAxes: [{
                  display: true,
                  ticks: {
                    min: 0,
                    max: 150000,
                  }
              }]
          },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <br/>
      <div sx={{minHeight: '20%'}}>
      <Bar
        data={yearly_state}
        height='200px'
        options={{
          title:{
            display:true,
            text:'',
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [{
                display: true,
                ticks: {
                  min: 0,
                  max: 150000,
                  stepSize: 5000
                }
            }]
        },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
    </div>
    );
  }