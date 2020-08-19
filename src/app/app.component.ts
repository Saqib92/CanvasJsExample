import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../assets/canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {  
  ngOnInit() {

  let a = [];
    let b = [];
    let f = [];
    let maxY = 0;
var chart = new CanvasJS.Chart("chartContainer", {
 animationEnabled: true,
  theme: "light1",

  axisY: {
    labelFormatter: function(e) {
      return Math.round((e.value/maxY*100)) +"%";        
    },
  },
  axisX:{
    gridThickness: 1,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
  },
  legend: {
    cursor: "pointer",
    itemclick: this.toogleDataSeries
  },
  data: [
  {        
    type: "spline",
    markerSize: 1,
    showInLegend: true,
    dataPoints: [
      { x: new Date(2020,0o7,24), y: 302 },
      { x: new Date(2020,0o7,25), y: 3100 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,26), y: 750 },
      { x: new Date(2020,0o7,27), y: 260 },
      { x: new Date(2020,0o7,28), y: 3000 },
      { x: new Date(2020,0o7,29), y: 300 },
      { x: new Date(2020,0o7,30), y: 290 },
      
    ]
  },
  {  
    type: "spline",
    markerSize: 1,
    showInLegend: true,
    
    dataPoints: [
      { x: new Date(2020,0o7,24), y: 391 },
      { x: new Date(2020,0o7,25), y: 370 },
      { x: new Date(2020,0o7,26), y: 200 },
      { x: new Date(2020,0o7,27), y: 2500 },
      { x: new Date(2020,0o7,28), y: 610 },
      { x: new Date(2020,0o7,29), y: 500 },
      { x: new Date(2020,0o7,30), y: 600 }
    ]
  }
  ]
});

if(chart.options.data.length > 1){
    let na = [];    
    chart.options.data.forEach((val)=>{
      //console.log(JSON.stringify(val));
      val.dataPoints.forEach((val2)=>{
        na.push(val2.y)
      })    
    })      
    maxY = Math.max(...na);
    chart.options.axisY.maximum = maxY;
    chart.options.axisY.interval = maxY / 10;
}

chart.render();
chart.toolTip.showAtX(new Date(2020,0o7,26));


		
  }


    toogleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
}
