import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
  private n : number=100;
private dt : any = new Date();
private base : number = 2;
private powd : number = 5;
  constructor() { }

  ngOnInit() {
  }

}
