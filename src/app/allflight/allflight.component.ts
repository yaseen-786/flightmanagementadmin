import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-allflight',
  templateUrl: './allflight.component.html',
  styleUrls: ['./allflight.component.css']
})
export class AllflightComponent implements OnInit{
  data:any;
  constructor(private getfli:AdminserviceService){}
  ngOnInit(): void {
    this.getfli.getallFlight().subscribe((data:any)=>{
      this.data=data;
    })
  }

}
