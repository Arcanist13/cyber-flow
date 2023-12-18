import { Component } from '@angular/core';
import { FlowOption, Flowchart, flowchartData } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cyber-flow';

  public maps = new Array<Flowchart>();
  public currentChart?: Flowchart;
  public currentOption?: FlowOption;

  constructor() {
    this.maps = flowchartData;

    this.loadKey('start');
  }

  public reset(): void {
    this.currentChart = undefined;
    this.currentOption = undefined;
  }

  public loadChart(index: number): void {
    this.currentChart = flowchartData[index];
    this.loadKey('start');
  }

  public loadKey(key: string): void {
    this.currentOption = this.currentChart?.flow.filter((val) => val.key === key)[0];
  }
}
