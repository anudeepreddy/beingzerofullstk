import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../postdata.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postdata = {};
  constructor(private data: PostdataService) { }

  ngOnInit() {
    this.data.getData().subscribe(d=>{
      this.postdata['data'] = d;
      alert(d['title']);
    });
  }

}
