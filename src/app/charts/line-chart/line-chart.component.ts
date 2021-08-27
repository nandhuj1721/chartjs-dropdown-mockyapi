import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { WeatherService } from 'src/app/layout/weather.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe((res: { [x: string]: any; }) => {
      let labels = res['labels'];
      let values = res['values'];
      var ctx = document.getElementById('lineChart') as HTMLCanvasElement;
      var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            { 
              label: "Rating of GOT", 
              data: values,
              backgroundColor: "red",
              borderColor: "red",
              fill: false
            },

          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true, 
              ticks: {
                beginAtZero: true
              }
            }],
          }, 
          animation: {

            duration: 1000
          }
        }
      });
      
    })
  }
}