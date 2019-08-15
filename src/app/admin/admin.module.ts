import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../../app/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule
  ],
})
export class AdminModule { }
