import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  flightdata:any;
  //url:String = "http://localhost:8081/"
  constructor(private http:HttpClient) { }

  addFlight(input:any){
    return this.http.post(`${environment.apiUrl}/flightregister`,input);

  }

  getallFlight(){
    return this.http.get(`${environment.apiUrl}/getallflight`)
  }

  getallCustomer(){
    return this.http.get(`${environment.apiUrl}/users/getallcustomer`)
  }

  getallBooking(){
    return this.http.get(`${environment.apiUrl}/getallbooking`)
  }

  updateFlight(input:any,id:number){
    const flightid=id
    return this.http.put(`${environment.apiUrl}/flightupdate/`+id,input)
  }

  deleteFlight(id:number){
    return this.http.delete(`${environment.apiUrl}/flightdelete/`+id)
  }
}
