import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
// import {LoginComponent} from './login/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    // {path: 'test', component: LoginComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
