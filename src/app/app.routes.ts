import { AddComponent } from './add/add.component';
// import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
// import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { DemoComponent } from './demo/demo.component';
import { TaskComponent } from './task/task.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { checkLoginGuard } from './check-login.guard';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent,
    },
    {
        path:'demo',
        component: DemoComponent
    },
    {
        path:'',
         children:[
            {
                path:'projeck',
                children:[
                    {
                        path:'list',
                        component: ListComponent,
                        title: 'List',
                    },
                    {
                        path:'add',
                        component: AddComponent
                    },
                    {
                        path:'edit/:id',
                        component: EditComponent,
                    },
                    {
                        path:'detail/:id',
                        component: DetailComponent,
                    },
                    {
                        path:'demo',
                        component: DemoComponent
                    },
                    {
                        path:'task/:id',
                        component: TaskComponent,
                    },
                    {
                        path:'taskUpdate/:idTask/:id',
                        component: TaskUpdateComponent,
                    },
                ]
            }, 
            {
                path:'member',
                children:[
                    // {
                    //     path:'info',
                    // },
                ]
            }
        ]
    }, 
    {
        path:'**',
        component: NotfoundComponent
    },  
];
