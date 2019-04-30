import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe/employe.service';
import { ServiceService } from '../service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../shared/Service';
import { Employe } from '../shared/Employe';

@Component({
  selector: 'app-employe-by-service',
  templateUrl: './employe-by-service.component.html',
  styleUrls: ['./employe-by-service.component.scss']
})
export class EmployeByServiceComponent implements OnInit {

  employes : Employe[];
  services : Service[];
  service : Service;
  service2 : Service;
  employeForm: FormGroup;
  operation: string = 'add';
  selectedEmploye :Employe ;
  
 constructor(private employeService : EmployeService,private serviceService :ServiceService, private fb: FormBuilder){
     this.createForm();
  }

ngOnInit() {

this.loadServices();

}

createForm(){
this.employeForm = this.fb.group({
  service:''
});
}

loadEmployes(id: number){
  console.log(id);
  this.employeService.getEmployesByService(id).subscribe(
    data => {this.employes = data},
    error => {console.log('erreurrrrrrrr !')},
    () => {console.log('Le chargement des employes est terminé ' +this.employes[0].nom)}
  );
 
}



loadServices(){
this.serviceService.getServices().subscribe(
  data => {this.services = data},
  error => {console.log('erreurrrrrrrr !')},
  () => {console.log('Le chargement des services est terminé'+this.services[0].nom)}
);
}
}
