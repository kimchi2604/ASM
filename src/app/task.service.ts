import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private url: HttpClient) { }
  apiUrl = 'http://localhost:3000'
  postTask( data:any, id:any){ 
    return this.url.post(this.apiUrl+'/task', data)
  }
  getTask () {
    return this.url.get(this.apiUrl+'/task')
  }
  getTaskId (id: any) {
    return this.url.get(this.apiUrl+'/task/'+id)
  }
  deleteTask(id:any){
    return this.url.delete(this.apiUrl+'/task/'+id)
  }
  putTask(data: any, idTask: any){
    return this.url.put(this.apiUrl+'/task/'+idTask, data)
  }
}
