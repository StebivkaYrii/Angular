import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getById(id).subscribe(value => this.post = value)
    })
  }

}
