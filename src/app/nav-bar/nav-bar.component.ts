import { Component, OnInit } from '@angular/core';
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  //standalone: true,
  //imports: [NgbCollapseModule],
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isCollapsed = false;
  isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  

}
