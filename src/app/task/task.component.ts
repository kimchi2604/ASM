import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HostServiceService } from '../host-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  id=0
  project: any = {}
  constructor(private service:HostServiceService,private task: TaskService ,private router: Router, private routes:ActivatedRoute ){
    this.id = this.routes.snapshot.params['id']
  }
  ngOnInit(): void{
    this.service.getIdProject(this.id).subscribe(res =>{
      this.project= res
    })
  }
  onAdd(data: any ): void{
    let isValid = true;
    if (data.nameTask == '') {
      isValid = false
    }
    if (isValid) {
      this.task.postTask(data, this.id).subscribe(res => {
        alert('Bạn đã thêm mới thành công')
        this.router.navigate(['/projeck/list'])
      })
    }
  }
}
