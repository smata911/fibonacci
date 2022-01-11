import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary" class="tolbar">
<a class="titulo" [routerLink]="['/']">  <span >AHORROS EN BASE A FIBONACCI</span>  </a>
    
  
  <!-- <span class="spacer"></span> -->

  
</mat-toolbar>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

constructor(private router:Router) {
  
}
  goToCheckout():void{
    this.router.navigate(['/checkout'])

  }
}
