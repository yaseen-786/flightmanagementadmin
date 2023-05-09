import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.css']
})
export class AllbookingComponent implements OnInit {
  bookingdata:any;
  constructor(private booking:AdminserviceService){}
  ngOnInit(): void {
    this.booking.getallBooking().subscribe((data:any)=>{

      this.bookingdata=data;
     // console.log(this.bookingdata)

    })
   console.log(this.bookingdata) 
  }

}
