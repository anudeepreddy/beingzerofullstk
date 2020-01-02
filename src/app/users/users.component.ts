import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData={}
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData1().subscribe(d=>{
      this.userData=[...d['data']];
    })

  }

}
