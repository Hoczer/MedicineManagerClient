import { Component, OnInit } from '@angular/core';
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  model:any={}
  isMenuCollapsed = true;
  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }


  login (){
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: _rout => this.router.navigateByUrl('/medicine-cabinet')
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
