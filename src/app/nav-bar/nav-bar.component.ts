import { Component, OnInit } from '@angular/core';
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  model:any={}
  isMenuCollapsed = true;
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {

  }


  login (){
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error=>console.log(error)
    });
  }

  logout(){
    this.accountService.logout();
  }


}
