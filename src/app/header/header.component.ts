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
    // document.getElementById('dropdownMenu2').style.border = 'none';
    // document.getElementById('dropdownMenu3').style.border = 'none';
    // document.getElementById('dropdownMenu4').style.border = 'none';
    // document.getElementById('dropdownMenu5').style.border = 'none';
    // document.getElementById('dropdownMenu6').style.border = 'none';

    // document.getElementById(id).style.borderLeft = ' 3px solid white';
    // document.getElementById(id).style.color = '#f8f9fa';

    
    
  }
}
