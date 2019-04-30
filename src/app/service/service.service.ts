import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../config/api.url.config';
import { Service } from '../shared/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http :HttpClient){

  }

  getServices(): Observable<any>{
    return this.http.get(API_URLS.SERVICE_URL);
}

addService(service:Service): Observable<any>{
    return this.http.post(API_URLS.SERVICE_URL, service);
}

getServiceById(id:number): Observable<any>{
  return this.http.get(API_URLS.SERVICE_URL+`/${id}`);
}

updateService(service:Service): Observable<any>{
    return this.http.put(API_URLS.SERVICE_URL, service);
}

deleteService(id:number): Observable<any>{
    console.log("iciiiii "+ id);
    return this.http.delete(API_URLS.SERVICE_URL +`/${id}`);
}
}
