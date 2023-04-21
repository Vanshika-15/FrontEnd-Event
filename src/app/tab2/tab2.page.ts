import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  Speaker:any;
  constructor(private data1: HomeService) {}
  ngOnInit(){
    this.data1.getData().subscribe(data => {
      console.log(data);
      this.Speaker = data;
    })
  }
}
