import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http: HttpClient) { }
  postSer(data):Observable<any> {
    return this.http.post('https://artblog7.herokuapp.com/users',data)
  }
  getSer():Observable<any> {
    return this.http.get('https://artblog7.herokuapp.com/list')
  }
  updateSer(data):Observable<any> {
    return this.http.put('https://artblog7.herokuapp.com/update',data)
  }
  deleteSer(data): Observable<any> {
    console.log(data.id);
    return this.http.delete('https://artblog7.herokuapp.com/delete/'+data.id)
  }
}
