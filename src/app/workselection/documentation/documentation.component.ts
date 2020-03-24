import { Component, OnInit , NgModule} from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
timeLeft: number = 7200;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 7200;
      }
    },1000)
  }

  endTimer() {
    clearInterval(this.interval);
  }
}