import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postApi(data:any):Observable<any>{

    return this.http.post(`https://crud-83a58-default-rtdb.firebaseio.com/user.json/`,data)

  }

  getApi():Observable<any>{

    return this.http.get(`https://crud-83a58-default-rtdb.firebaseio.com/user.json`)

  }

  getApiById(id:any):Observable<any>{

    return this.http.get(`https://crud-83a58-default-rtdb.firebaseio.com/user/${id}.json`)

  }

  updateApi(id:any,data:any):Observable<any>{

    return this.http.put(`https://crud-83a58-default-rtdb.firebaseio.com/user/${id}.json`,data)

  }

  deleteApi(id:any):Observable<any>{

    return this.http.delete(`https://crud-83a58-default-rtdb.firebaseio.com/user/${id}.json`)

  }

}
