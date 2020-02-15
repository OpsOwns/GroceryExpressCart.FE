import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() backRegister = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  register() {
    console.log(this.model);
  }
  backToHome() {
    this.backRegister.emit(false);
    console.log('cancled');
  }
}
