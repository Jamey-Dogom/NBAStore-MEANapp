import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  // Get all shows
  getJerseys(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/api/jerseys');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

 getOne(id){
  // our http response is an Observable, store it in a variable
  return this._http.get('/api/jerseys/'+ id);
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  // tempObservable.subscribe(data => console.log("Got 1 task", data));
}

  // Create One New Show
  addJersey(newJersey){
    return this._http.post('/api/jerseys', newJersey)
  }

  deleteJersey(JerseyId) {
    return this._http.delete('/api/jerseys/' + JerseyId)
  }

  updateJ(jerseyID, jersey){
    return this._http.put('/api/jerseys/' + jerseyID, jersey);
  }

}