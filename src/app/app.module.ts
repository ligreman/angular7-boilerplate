import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { LoginComponent } from './routes/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AngularMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
