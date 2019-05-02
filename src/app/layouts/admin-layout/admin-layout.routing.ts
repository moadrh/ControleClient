import { Routes } from '@angular/router';


import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EmployeByServiceComponent } from '../../employe-by-service/employe-by-service.component';
import { EmployeComponent } from '../../employe/employe.component';
import { ChartComponent } from '../../chart/chart.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'employe-by-service',      component: EmployeByServiceComponent },
    { path: 'employe',      component: EmployeComponent },
    { path: 'chart',      component: ChartComponent },
 
    { path: 'upgrade',        component: UpgradeComponent }
];
