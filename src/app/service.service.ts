import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
members=[]
  constructor() { }

  addmember(mem)
  {
    this.members.push(mem)
    
  }

  getmember()
  {
    return this.members

  }

  delmember(index)
  {
    this.members.splice(index,1)
  }
  getindex(index)
  { 
      return this.members[index]
  }
  editmember(index,update)
  {
    this.members[index]=update
  }
}
