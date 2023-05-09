import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-insertform',
  templateUrl: './insertform.component.html',
  styleUrls: ['./insertform.component.css']
})
export class InsertformComponent {
  constructor(private fli: AdminserviceService,private snackBar:MatSnackBar,private route:Router) {
  }
  name!: String;
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
  this.name = reg.value.name
  this.fli.addFlight(flightinput).subscribe((result)=>{
    this.snackBar.open('Data Added Sucessfully!!!', 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    }
   
    );
    this.route.navigate(['homepage'])
    console.log(result)
  
  }
  )
  
  }
}
