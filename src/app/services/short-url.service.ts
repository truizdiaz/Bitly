import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  urlBitly = 'https://api-ssl.bitly.com/v4/bitlinks';
  token = 'e06ee00fac1f1f108cee64b3967a703c8f4aa27a';

  constructor(private http: HttpClient) { }

  getUrlShort(url: string): Observable<any> {
    const token = this.getToken();
    const body = {
      long_url: url
    };

    return this.http.post(this.urlBitly, body, { headers: token });
  }

  getToken() {
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer' + this.token});
    return tokenHeader;
  }
}
