import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DashComponent } from './dash/dash.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},  
  {path:'dash',component:DashComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'list',component:ListuserComponent},
    {path:'about',component:AboutComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
