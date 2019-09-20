import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  errors = null
  jersey : any
  constructor(
    private _httpService:HttpService, 
    private _router:Router,
    private _route : ActivatedRoute) { }

  ngOnInit() {
    // get the id from the paramater
    this._route.params
    .subscribe((params: Params) => {
      this._httpService.getOne(params.id)
      .subscribe((data : any) => {
        this.jersey = data
      })
    })
  }

  updateJersey() {
      this._httpService.updateJ(this.jersey._id, this.jersey)
        .subscribe((data : any ) => {
          if(data.hasOwnProperty('errors')){
            this.errors = data.errors;
            console.log(this.errors)
            console.log('errors are here!')
          } else {
            this._router.navigate(['/products'])
          }
        })
  }
  

}
