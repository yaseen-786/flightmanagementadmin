import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CitiAir';
  constructor(private matIconRegistry:MatIconRegistry,
    private domSantizer:DomSanitizer ){
      this.matIconRegistry.addSvgIcon('favicon',this.domSantizer.bypassSecurityTrustResourceUrl('../assets/svg/favicon.svg'))
    }

}
