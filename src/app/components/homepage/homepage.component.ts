import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-home-page',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomePageComponent implements OnInit {
    public user: firebase.User;

    constructor(
        public afAuth: AngularFireAuth
    ) { }

    public ngOnInit() {
        this.afAuth.authState.subscribe((user) => {
            this.user = user;
        });
    }
}
