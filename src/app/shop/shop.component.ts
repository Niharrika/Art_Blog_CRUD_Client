import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerService } from '../ser.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listData;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private router: Router, private list: SerService) {
      this.list.getSer().subscribe((data) => {
        this.listData = data
        console.log(this.listData)
      })
  }

  ngOnInit(): void {

  }
}
