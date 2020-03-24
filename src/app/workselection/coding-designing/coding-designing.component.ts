import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-coding-designing',
  templateUrl: './coding-designing.component.html',
  styleUrls: ['./coding-designing.component.css']
})
export class CodingDesigningComponent implements OnInit {



  ngOnInit() {
  }
 timeLeft: number = 60;
  interval;
  subscribeTimer: any;

  constructor() { }

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

  pauseTimer() {
    clearInterval(this.interval);
  }

}

