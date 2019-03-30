import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-home2',
    host: {class: 'flex-row-parent'},
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
    title = 'angular7-boilerplate';
    now = DateTime.local();

    constructor() {
    }

    ngOnInit() {
    }

}
