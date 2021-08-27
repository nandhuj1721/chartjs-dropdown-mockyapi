import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { WeatherService } from 'src/app/layout/weather.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe(res => {
      let labels = res['labels'];
      let values = res['values'];

      var ctx = document.getElementById('radarChart') as HTMLCanvasElement;
      var radarChart = new Chart(ctx, {
        type: 'radar',
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