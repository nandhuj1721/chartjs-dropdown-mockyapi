import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { WeatherService } from 'src/app/layout/weather.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe((res: { [x: string]: any; }) => {
      let labels = res['labels'];
      let values = res['values'];
      var ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
      var doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            { 
              data: values,
              backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
              borderColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: true
          },
          animation: {
            duration: 1000
          }
        }
      });
      
    })
  }
}