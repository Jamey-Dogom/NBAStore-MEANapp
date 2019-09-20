import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  errors = null
  newJersey = {
    name: "",
    image: "",
    price: ''
  }
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  handleSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    let observable = this._httpService.addJersey(this.newJersey);
    // Reset this.newTask to a new, clean object.
    observable.subscribe((data: any) => {
      if (data.hasOwnProperty('errors')) {
        this.errors = data.errors;
        console.log("we have errors")
      } else {
        this.newJersey = {
          name: "",
          image: "",
          price: ''
        }
        this._router.navigate(['/products'])
      }
    })

  }

}
