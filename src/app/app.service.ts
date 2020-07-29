import { HttpClient, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

   constructor(private http: HttpClient) {

   }

    public getPosts(): Observable<any> {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }

    public getPost(postId): Observable<any> {
    	console.log("postId");
        return this.http.get("https://jsonplaceholder.typicode.com/posts/"+postId);
    }

    public getComments(postId): Observable<any> {
    	let params = new HttpParams();
		params = params.append("postId", postId);
        return this.http.get("https://jsonplaceholder.typicode.com/comments", { params: params });
    }

}