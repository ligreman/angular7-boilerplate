import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';

@NgModule({
    declarations: [HomeComponent, Home2Component],
    imports: [
        CommonModule,
        BaseRoutingModule
    ]
})
export class BaseModule {
}
