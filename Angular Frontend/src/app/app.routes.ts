import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
// import { AuthGuard } from './auth/auth.guard';  1. Temporarily disables Guards auth for Messages page

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
    // { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] }, 2. Temporarily disables Guards auth for Messages page
    { path: 'messages', component: MessagesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }