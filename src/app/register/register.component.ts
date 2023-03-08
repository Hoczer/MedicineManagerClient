import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(
    private accountServive: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  register() {
    this.accountServive.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
      }
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
