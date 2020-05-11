import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  delForm;
  constructor(private del: SerService) {
      this.delForm = new FormGroup
        ({
          'id': new FormControl(),
        })
}

  ngOnInit(): void {
  }
  sendData() {
    this.del.deleteSer(this.delForm.value).subscribe((data2) => {
      alert("Product Deleted")
    })
  }
}
