import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomePageComponent {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
}
