import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { ApiService } from '../../../../core/http/api.service';

@Component({
    selector: 'app-home2',
    host: {class: 'flex-row-parent'},
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
    title = 'angular7-boilerplate';
    now = DateTime.local();
    result = '';

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.getCSRF()
            .subscribe((res) => {
                this.result = JSON.stringify(res);
            });
    }


    doPost() {
        this.apiService.doPost()
            .subscribe((res) => {
                this.result = JSON.stringify(res);
            });
    }

}
