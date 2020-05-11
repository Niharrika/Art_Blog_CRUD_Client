import { Component, OnInit, Input } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData;
  constructor(private list: SerService) {
    this.list.getSer().subscribe((data) => {
      this.listData = data
    })
  }

  ngOnInit(): void {
  }
  
}
