import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {EmployeByServiceComponent} from '../../employe-by-service/employe-by-service.component';
import { EmployeComponent } from '../../employe/employe.component';
import { ChartComponent } from '../../chart/chart.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    
    UpgradeComponent,
    
    EmployeByServiceComponent,
    EmployeComponent,
    ChartComponent
  ]
})

export class AdminLayoutModule {}
