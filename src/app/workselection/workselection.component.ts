import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-workselection',
  templateUrl: './workselection.component.html',
  styleUrls: ['./workselection.component.css']
})
export class WorkselectionComponent implements OnInit {

    constructor( private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

}