import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form;
  constructor(private update: SerService) {
    this.form = new FormGroup
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
    this.update.updateSer(this.form.value).subscribe((data2) => {
      alert("Product Updated");
    })
  }
}
