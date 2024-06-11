import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HostServiceService } from '../host-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
new: any;
  constructor(private service:HostServiceService, private router: Router){}
  onAdd(data: any ): void{
    let isValid = true;

    if (data.name == '') {
      isValid = false
    }
    console.log(isValid);
    if (data.price == '' || data.price < 1) {
      isValid = false
    }
    if (data.size < 4) {
      isValid = false
    }
    if (isValid) {
      this.service.potsProject(data).subscribe(res => {
        alert('bạn đã thêm mới thành công')
        this.router.navigate(['/projeck/list'])
      })
    }
  }
}
