import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-learnMore',
  templateUrl: './learnMore.component.html',
  styleUrls: ['./learnMore.component.css']
})
export class LearnMoreComponent implements OnInit {
  @Output() backLearnMore = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  backToHome() {
    this.backLearnMore.emit(false);
    console.log('cancled');
  }
}
