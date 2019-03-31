import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/http/api.service';
import { User } from '../../../../core/interfaces/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    users: User[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        // Una vez he cargado todo, pido los usuarios
        this.getUsers();
        this.getUsers2();
    }

    getUsers() {
        this.apiService.getUsers()
            .subscribe((users: User[]) => {
                    console.log(users);
                    this.users = users;
                },
                null,
                () => {
                    console.log('completo');
                });
    }

    getUsers2() {
        this.apiService.getUsersWithoutHandlingError()
            .subscribe((users: User[]) => {
                console.log(users);
                this.users = users;
            }, (error) => {
                console.log('error2');
                console.log(error);
            }, () => {
                console.log('completo2');
            });
    }
}
