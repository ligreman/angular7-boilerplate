import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { FlexModule } from '@angular/flex-layout';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [HomeComponent, Home2Component],
    imports: [
        CommonModule,
        CoreModule,
        HomeRoutingModule,
        AngularMaterialModule,
        FlexModule
    ]
})
export class HomeModule {
}
