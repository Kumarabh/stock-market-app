import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  
  constructor() { }

  ngOnInit() {
  }
  setBottomBorder (id) {
    if(id === 'dropdownMenu2') {
      // document.getElementById('contactUs').style.border = 'none';
      // document.getElementById('calculator').style.border = 'none';
      // document.getElementById('contactUs').style.color = 'rgba(255, 255, 255, 0.8)';
      // document.getElementById('calculator').style.color = 'rgba(255, 255, 255, 0.8)';
      document.getElementById(id).style.borderLeft = ' 3px solid white';
      document.getElementById(id).style.color = '#f8f9fa';
      
    } 
    if(id === 'contactUs'){
      document.getElementById('contactUs').style.border = 'none';
      document.getElementById('calculator').style.border = 'none';
      document.getElementById(id).style.borderBottom = ' 3px solid';

      document.getElementById('contactUs').style.color = 'rgba(255, 255, 255, 0.8)';
      document.getElementById('calculator').style.color = 'rgba(255, 255, 255, 0.8)';
      document.getElementById(id).style.color = '#f8f9fa';


    }
    
  }
}
