// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HostServiceService } from '../host-service.service';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id=0
  project: any = {}
  task : any = {}
  taskId: any[]=[] 
constructor (private service: HostServiceService, private serviecTask: TaskService, private routes:ActivatedRoute){
  this.id = this.routes.snapshot.params['id']
}
ngOnInit(): void {
  this.service.getIdProject(this.id).subscribe(project => {
    this.project = project;
    this.serviecTask.getTask().subscribe(tasks => {
      this.task = tasks;
      if (Array.isArray(this.task)) {
        this.taskId = this.task.filter(task => task.idProject === this.project.id);
      } else {
        console.error('Tasks is not an array:', this.task);
      }
    })
  })
}
onDelete(id: any, name: string) :void{
  if (confirm(`bạn có muốn xóa task có tên là  ${name} không`)) {
    this.serviecTask.deleteTask(id).subscribe((res: any) => {
        alert(`xóa thành công `);
        this.ngOnInit();
      }
    )
  }
}
}
