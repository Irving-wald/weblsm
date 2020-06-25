import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from "./guard.guard";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/shared/error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
