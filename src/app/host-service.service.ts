import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {
  apiUrl = 'http://localhost:3000'
  constructor(private url : HttpClient, ) { }
  getproject () {
    return this.url.get(this.apiUrl+'/projects')
  }
  getIdProject(id: any){
    return this.url.get(this.apiUrl+'/projects/'+id)
  }
  potsProject(data: any) {
    return this.url.post(this.apiUrl+'/projects', data)
  }
  putProject(id: any, data: any){
    return this.url.put(this.apiUrl+'/projects/'+id,data)
  }
  deleteProject(id:any){
    return this.url.delete(this.apiUrl+'/projects/'+id)
  }
  
}
