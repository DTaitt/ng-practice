import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

  constructor() { }

  proclomation:string = 'This is my sanctification proclomation for the people all IN the nation'

  ngOnInit() {
  }

}
