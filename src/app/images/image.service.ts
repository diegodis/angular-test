import { Injectable } from '@angular/core';
import { Image } from "../models/image";
import { HttpClient} from  '@angular/common/http';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

 constructor(private http:HttpClient) { }

  _url:string = 'http://localhost:4000/api/photos';

  getImages():Observable<Image[]>{
    return this.http.get<Image[]>(this._url );
  }

  getImagebyId(id:string):Observable<Image[]>{
    return this.http.get<Image[]>(this._url + "/" + id);
  }

}
