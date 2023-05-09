import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent  implements OnInit{
  datareceived:any;
  constructor(private fliupdate:AdminserviceService,private route:Router,private snackBar:MatSnackBar) {}
  ngOnInit(): void {
    this.datareceived = this.fliupdate.flightdata;
    console.log(this.datareceived)
  }
  
  submit(reg:any){
    console.log(reg.value)
    const flightinput={
      "name":reg.value.name,
      "source":reg.value.source,
      "destination":reg.value.destination,
      "date":reg.value.date,
      "price":reg.value.price,
      "capacity":reg.value.capacity,
      "duration":reg.value.duration
    }
   this.fliupdate.updateFlight(flightinput,this.datareceived.flightid).subscribe((result)=>{
    console.log(result)
    this.snackBar.open('Data Updated Sucessfully!!!', 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
    setTimeout(()=>{
      this.route.navigate(['homepage'])
    },1000)
    
   })
    
    }

}
