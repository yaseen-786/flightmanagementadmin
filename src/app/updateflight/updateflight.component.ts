import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit{
  data:any;
  item:any;
  updatedata:any
  constructor(private getfli:AdminserviceService,private route:Router){}

  ngOnInit(): void {
    this.getfli.getallFlight().subscribe((data:any)=>{
      this.data=data;
    })
  }
  getItemData(item:any){
    console.log(item);
    this.getfli.flightdata = item;
    this.route.navigate(['homepage/updateform'])
  }
}
