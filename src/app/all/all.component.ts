import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  member=[]
  constructor(public service:ServiceService) { }

  ngOnInit() {

    this.member=this.service.getmember()
    console.log(this.member)
  }
  del(i)
  {
    this.service.delmember(i)
  }
}
