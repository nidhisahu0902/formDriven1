import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  index
  member:{email:string,password:string}={email:"",password:""}
  constructor(public service:ServiceService,public router:Router, public route:ActivatedRoute) { }

  ngOnInit() {
    this.index=this.route.snapshot.paramMap.get("id")
    this.member=this.service.getindex(this.index)
  }


  onsubmit(newValue : NgForm){
      this.service.editmember(this.index,newValue.value)
      this.router.navigateByUrl("")
  }
}
