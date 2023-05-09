import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent {
  data:any
  constructor(private allcust:AdminserviceService){
    
  }
  ngOnInit(): void {
    this.allcust.getallCustomer().subscribe((data:any)=>{
      this.data=data;
    })
  }

}
