import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm;
  constructor(private details:SerService) {
    this.userForm = new FormGroup
      ({
        'id': new FormControl(),
        'name': new FormControl(),
        'image': new FormControl(),
        'currency': new FormControl(),
        'price': new FormControl()
      })
  }
  ngOnInit(): void {
  }
  sendData() {
    this.details.postSer(this.userForm.value).subscribe((data2) => {
      alert("Product Created");
    })
  }
}
