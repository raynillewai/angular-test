import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post: any;
  comments: any;
  textFilter: string = "";
  filter: any;

  constructor(private _appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params.postId);
    const postId = this.route.snapshot.params.postId;
    this.getAll(postId);
  }

  applyFilter() {
    console.log("add filter");
    this.filter = { $or: [{'name' : this.textFilter}, {'email' : this.textFilter}, {'body' : this.textFilter}] };
  }

  getAll(postId) {
  console.log(postId);
    this._appService.getPost(postId).subscribe(data => {
        console.log(data);
        this.post = data;
        this._appService.getComments(postId).subscribe(data => {
            console.log(data);
            this.comments = data;
        });
    });
  }

}