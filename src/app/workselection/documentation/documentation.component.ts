import { Component, OnInit , NgModule} from '@angular/core';
import { timer } from 'rxjs';
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
  subscribeTimer: any;



  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  endTimer() {
    clearInterval(this.interval);
  }

}