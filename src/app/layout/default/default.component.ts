import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: 'src/app/layout/default/default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public changeChart: string = "Bar Chart";
  selected = this.router.navigate(["./charts/bar-chart"]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onChangeAmountClicked() {
    if (this.changeChart == "Bar Chart") {
      this.router.navigate(["./charts/bar-chart"]);
    }
    else if (this.changeChart == "Line Chart") {
      this.router.navigate(["./charts/line-chart"]);
    }
    else if (this.changeChart == "Radar Chart") {
      this.router.navigate(["./charts/radar-chart"]);
    }
    else if (this.changeChart == "Pie Chart") {
      this.router.navigate(["./charts/pie-chart"]);
    }
    else if (this.changeChart == "Doughnut Chart") {
      this.router.navigate(["./charts/doughnut-chart"]);
    }
  }
}