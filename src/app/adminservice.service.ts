import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  flightdata:any;
  constructor(private http:HttpClient) { }

  addFlight(input:any){
    return this.http.post("http://localhost:8082/flightregister",input);

  }

  getallFlight(){
    return this.http.get("http://localhost:8082/getallflight")
  }

  getallCustomer(){
    return this.http.get("http://localhost:8082/users/getallcustomer")
  }

  getallBooking(){
    return this.http.get("http://localhost:8082/getallbooking")
  }

  updateFlight(input:any,id:number){
    const flightid=id
    return this.http.put("http://localhost:8082/flightupdate/"+id,input)
  }

  deleteFlight(id:number){
    return this.http.delete("http://localhost:8082/flightdelete/"+id)
  }
}
