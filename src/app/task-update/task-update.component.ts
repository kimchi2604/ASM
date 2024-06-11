import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HostServiceService } from '../host-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-update.component.html',
  styleUrl: './task-update.component.css'
})
export class TaskUpdateComponent {
  id=0
  idTask=0
  tasks : any = {}
  project: any = {}
  constructor(private task:TaskService, private service: HostServiceService, private router: Router, private routes:ActivatedRoute ){
    this.id = this.routes.snapshot.params['id']
    this.idTask = this.routes.snapshot.params['idTask']
  }
  
  ngOnInit(): void {
    this.service.getIdProject(this.id).subscribe(res =>{
      this.project= res
    })
    this.task.getTaskId(this.idTask).subscribe(res=> {
      this.tasks = res
    })
  }
  onUpdate(data: any ): void{
    let isValid = true;
    if (data.nameTask == '') {
      isValid = false
    }
    if (isValid) {
      this.task.putTask(data, this.idTask).subscribe(res => {
        alert('Bạn đã cập nhật thành công')
        this.router.navigate(['/projeck/detail/'+this.project.id])
      })
    }
  }
}
