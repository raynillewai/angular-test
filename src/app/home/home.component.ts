import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  comments: any;

  constructor(private _appService: AppService, private router: Router) {
  }

  ngOnInit() {
  	this._appService.getPosts().subscribe(data => {
        console.log(data);
        this.comments = data;
    });
  }

  gotoPost(postId) {
  	console.log(postId);
  	this.router.navigate(['/post', postId]);
  }

}


