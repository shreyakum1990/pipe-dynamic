import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private x : ActivatedRoute) { }

  ngOnInit() {
    this.x.params.subscribe(
      (res)=>{
        console.log("the parameter is" +res['id1']+"--"+res['id2']+"--"+res['id3'])
      }
    )
  }

}
