import { Component, OnInit, Input, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Service } from '../shared/Service';
import { EmployeService } from '../employe/employe.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  constructor(private serviceService: ServiceService, private employeService: EmployeService) { }

  ngOnInit() {
    this.loadServicesNames();
    this.loadServicesCounts();
  }
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Nombre' }

  ];

  loadServicesNames() {

    this.employeService.getServicesNames().subscribe(
      data => { this.lineChartLabels = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des services est terminé ') }

    );


  }

  loadServicesCounts() {

    this.employeService.countEmployesByservice().subscribe(
      data => { this.lineChartData = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des services est terminé ') }
    );


  }

 







}
