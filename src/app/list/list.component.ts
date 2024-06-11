import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listProjects: any= [];
  APIUrl = 'http://localhost:3000/projects';
  constructor(private url: HttpClient){
  }
  ngOnInit(): void{
    this.url.get(this.APIUrl).subscribe(res =>{
      this.listProjects= res
    })
  }
  onDelete(id: any, name: string) :void{
    if (confirm(`bạn có muốn xóa dự án có tên là  ${name} không`)) {
      this.url.delete(this.APIUrl + "/" + id).subscribe((res: any) => {
          alert(`xóa thành công `);
          this.ngOnInit();
        }
      )
    }
  }
}
