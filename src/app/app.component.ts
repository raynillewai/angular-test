import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comment-manager-app';

  constructor(private _appService: AppService, private router: Router) {
  }

}


