import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allJerseys = []

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllJerseys()
  }

  getAllJerseys() {
    // calling our get Pokemon method and receive an observable
    let observable = this._httpService.getJerseys()
    observable.subscribe((data : any)=> {
      // put all shows from call into allShows array
      for(let jersey of data){
          this.allJerseys.push(jersey)
      }
    })
  }

  deleteJersey(id){
    this._httpService.deleteJersey(id)
      .subscribe(() => {
        // this.allJerseys = this.allJerseys.filter(jersey => jersey._id != id)
      })
      this.allJerseys = []
      this.getAllJerseys()
  }

}
