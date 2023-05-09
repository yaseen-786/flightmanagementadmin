import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {
  data:any;
  constructor(private delfli:AdminserviceService,private route:Router , private snackBar:MatSnackBar){}
  ngOnInit(): void {
    this.delfli.getallFlight().subscribe((data:any)=>{
      this.data=data;
    })
  }
  getItemData(item:any){
    console.log(item);
    this.delfli.deleteFlight(item.flightid).subscribe((data)=>{
      this.data=data;
    })
    this.snackBar.open('Data Deleted Sucessfully!!!', 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
   
      this.route.navigate(['homepage'])
  }

}
