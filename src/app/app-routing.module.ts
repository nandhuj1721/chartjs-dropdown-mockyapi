import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { DefaultComponent } from 'src/app/layout/default/default.component';

const routes: Routes = [
  {path: '', component: DefaultComponent, 
children: [
  {
    path: 'charts/bar-chart', 
    component: BarChartComponent
  },
  {
    path: 'charts/pie-chart', 
    component: PieChartComponent
  },
  {
    path: 'charts/radar-chart', 
    component: RadarChartComponent
  },
  {
    path: 'charts/line-chart', 
    component: LineChartComponent
  },
  {
    path: 'charts/doughnut-chart', 
    component: DoughnutChartComponent
  },
]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }