import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule, MatMenuModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule
    ],
})
export class AngularMaterialModule {
}
