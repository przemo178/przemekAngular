import { Injectable } from '@angular/core';
import { IFormItem } from '../models/menu.interface';
import { BehaviorSubject, Observable, ObservableNotification, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url = 'http://localhost:3000/applications';
  url2 = 'https://micalangular-default-rtdb.firebaseio.com/';

  constructor(private _httpClient: HttpClient) {}

  postData(params: {
    fullName: string;
    email: string;
    phoneNumber: string;
    nationality?: string;
    country?: string;
    message?: string;
    skills?: [];
  }) {
    console.log(params);
    this._httpClient
      .post(this.url2 + 'applications.json', params)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onDeleteData(id: string) {
    this._httpClient
      .delete(
        'https://micalangular-default-rtdb.firebaseio.com/applications/' +
          id +
          '.json'
      )
      .subscribe();
  }

  onDeleteAllData() {
    this._httpClient
      .delete(
        'https://micalangular-default-rtdb.firebaseio.com/applications.json'
      )
      .subscribe();
  }

  // updateData(id: string, value: IFormItem) {
  //   this._httpClient
  //     .put(
  //       'https://micalangular-default-rtdb.firebaseio.com/applications/' +
  //         id +
  //         '.json',
  //       value
  //     )
  //     .subscribe();
  // }

  // postData(postItems: IFormItem) {
  //   return this._httpClient
  //     .post(this.url, postItems)
  //     .pipe(tap(console.log));
  // }

  // postFormItems(data) {
  //   this._httpClient
  //     .post('http://localhost:3000/applications', data)
  //     .subscribe((result) => {
  //       console.log('result', result);
  //     });
  //   console.log(data);
  // }
}
