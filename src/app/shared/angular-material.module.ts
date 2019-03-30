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
    MatSlideToggleModule,
    MatMenuModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

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
        MatMenuModule,
        FormsModule
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
        MatMenuModule,
        FormsModule
    ]
})
export class AngularMaterialModule {
}
