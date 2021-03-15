import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class WebService {

  constructor(private http: HttpClient) { }

  public async Get<T>(url: string): Promise<T> {
    return this.http.get<T>(url).toPromise();
  }

  public Post<T>(url: string, data: any): Promise<T> {
    return this.http.post<T>(url, data).toPromise();
  }
}
