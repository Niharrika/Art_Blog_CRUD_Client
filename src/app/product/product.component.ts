import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  private sub: any;
  productDetails;
  
  constructor(private route: ActivatedRoute, private router: Router, private list:SerService) {
      this.list.getSer().subscribe((data) => {
        this.productDetails = data
        console.log(this.productDetails)
      })
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']

    });
  }

}
