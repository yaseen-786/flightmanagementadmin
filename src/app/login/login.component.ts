import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router,private snackBar: MatSnackBar) {
  }
  name!: String;
  submit(reg:any){
  console.log(reg.value)
  if(reg.value.username=="admin"&& reg.value.password=="admin123"){
    this.route.navigate(['homepage'])
  }
  else{
    this.snackBar.open('Please enter valid credentials', 'Close', {
      duration: 3000,
      verticalPosition: 'top'
    });
    this.route.navigate([''])
  }
  this.name = reg.value.name

  
  }
  get sname1(){
    return this.name;
 }
}
