import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

  constructor(private UserService:UserService) { }

  proclamation:string;
  username:string;

  ngOnInit() {
    this.username = this.UserService.getUsername();
    this.proclamation = `My name is ${this.username}. First of his name. Son of ...`;
  }

}
