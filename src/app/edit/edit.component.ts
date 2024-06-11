import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HostServiceService } from '../host-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  idProduct=0
  projects: any = {};
  constructor(private service: HostServiceService,private routes:ActivatedRoute, private route: Router ){
    this.idProduct = this.routes.snapshot.params['id']
  }
  
  ngOnInit(): void{
    this.service.getIdProject(this.idProduct).subscribe(res =>{
      this.projects= res
    })
  }
  onEdit(data:any): void{
    let isValid = true;

    if (data.name == '' || data.name.length < 5) {
      isValid = false
    }
    console.log(isValid);
    if (data.price == '' || data.price < 1) {
      isValid = false
    }
    if (data.image == '') {
      isValid = false
    }
    if (isValid) {
      this.service.putProject(this.idProduct,data).subscribe(res =>{
        alert('sửa thành công')
        this.route.navigate(['/projeck/list'])
      })
    }
  }
}
