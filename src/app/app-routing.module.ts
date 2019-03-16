import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './routes/home/base.module#BaseModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
