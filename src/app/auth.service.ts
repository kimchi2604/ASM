import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl= 'http://localhost:3000'
  constructor(private url: HttpClient) {
   }
   register(data: any){
    return this.url.post(this.apiUrl+'/register', data)
  }
  login(data: any){
    return this.url.post(this.apiUrl+'/login',data)
  }
  logout() {
    localStorage.removeItem('token');
  }
}
