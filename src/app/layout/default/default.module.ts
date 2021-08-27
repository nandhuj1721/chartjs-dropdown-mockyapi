import { WeatherService } from './../weather.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './default.component';
import { BarChartComponent } from 'src/app/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from 'src/app/charts/radar-chart/radar-chart.component';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';
import {MatSelectModule} from '@angular/material/select';
import { DoughnutChartComponent } from 'src/app/charts/doughnut-chart/doughnut-chart.component';



@NgModule({
  declarations: [
    DefaultComponent,
    BarChartComponent,
    PieChartComponent,
    RadarChartComponent,
    LineChartComponent, 
    DoughnutChartComponent,
  ],
  imports: [
    CommonModule, 
    ChartsModule, 
    RouterModule, 
    HttpClientModule, 
    FormsModule, 
    MatSelectModule, 
    BrowserAnimationsModule
  ], 
  providers: [WeatherService],
})
export class DefaultModule { }