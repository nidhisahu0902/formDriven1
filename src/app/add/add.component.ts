import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formdata
  constructor(public service:ServiceService,public router:Router) { }
  member:{email:string,password:string}={email:"",password:""}
  ngOnInit() {
  }

  onsubmit(form:NgForm)
  {
        this.service.addmember(form.value)
        form.resetForm()
        console.log(form)
        this.router.navigateByUrl("")
  }

}
