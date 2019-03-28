import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Data } from './data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain',
    'Authorization': 'Bearer <KEY GOES HERE>'
  })
};

@Injectable()

export class YelpService {

  surl = '';

  constructor(private http: HttpClient) { }


  getData(price: string, location: string) : Observable<Data[]> {
    this.surl = 'https://api.yelp.com/v3/businesses/search?' + 'term=delis&location=carmel,in'
    console.log(this.surl)

    //if (searchTerm !== '') {
    //  this.surl = this.surl + '?search=' + searchTerm;
    //}

    return this.http.get<Data[]>(this.surl , httpOptions)
    .pipe(
      map(data => data['results']),
    );
  }

}
