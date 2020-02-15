import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  learnMode = false;
  constructor() {}

  ngOnInit() {}

  registerToogle() {
    this.registerMode = true;
  }
  learnMoreToogle() {
    this.learnMode = true;
  }
  backRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
  backLearnMoreMode(learnMode: boolean) {
    this.learnMode = learnMode;
  }
}
