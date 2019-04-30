import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EmployeComponent } from './employe/employe.component';
import { ServiceComponent } from './service/service.component';
import { EmployeByServiceComponent } from './employe-by-service/employe-by-service.component';
import { EmployeService } from './employe/employe.service';
import { ServiceService } from './service/service.service';
import { EmployeByServiceServiceService } from './employe-by-service/employe-by-service-service.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
   

  ],
  providers: [ServiceService,EmployeService,EmployeByServiceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
