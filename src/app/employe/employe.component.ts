import { Component, OnInit } from '@angular/core';
import { Employe } from '../shared/Employe';
import { EmployeService } from './employe.service';
import { ServiceService } from '../service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../shared/Service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {

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
this.initEmploye();
this.loadEmployes();

}

createForm(){
this.employeForm = this.fb.group({
  nom: '',
  prenom:'',
  email:'',
  telephone:'',
  service:''
});
}

loadEmployes(){
  this.employeService.getEmployes().subscribe(
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

findServiceById(id:any):any{
  console.log('service  '+this.selectedEmploye.service)
   this.serviceService.getServiceById(id).subscribe(
    data => {this.service = data},
    error => {console.log('erreurrrrrrrr !')},
    () => {console.log('Le chargement des services est terminé'+this.service.nom)}
  );
  return this.service;
}

addEmploye(){
  console.log('service  '+this.selectedEmploye.service)
  const s = this.employeForm.value;
  console.log('find by ' + this.findServiceById(this.selectedEmploye.service));
  if(this.findServiceById(this.selectedEmploye.service)!=null){
    s.service = this.findServiceById(this.selectedEmploye.service);
  }    
  this.employeService.addEmploye(s).subscribe(    
    res => {
      this.initEmploye();
      this.loadEmployes();
    }
   
  );
}

updateEmploye(){
  if(this.findServiceById(this.selectedEmploye.service)!=null){
    this.selectedEmploye.service = this.findServiceById(this.selectedEmploye.service);
  }  
  this.employeService.updateEmploye(this.selectedEmploye).subscribe(
    res => {
      this.initEmploye();
      this.loadEmployes();
      this.operation="add";
    }
  );
}

deleteEmploye(){
  this.employeService.deleteEmploye(this.selectedEmploye.id).subscribe(
    res => {
      this.selectedEmploye = new  Employe();
      this.loadEmployes();
    }
  );
}

initEmploye(){
  this.selectedEmploye = new  Employe();
  this.createForm();
}





}
