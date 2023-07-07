import { Injectable } from '@angular/core';
import { ICarouselItem } from '../models/menu.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  public isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public carouselItems$: BehaviorSubject<ICarouselItem[]> = new BehaviorSubject<
    ICarouselItem[]
  >([]);

  constructor(private _httpClient: HttpClient) {}

  getCarouselItems(): Observable<ICarouselItem[]> {
    return this._httpClient.get<ICarouselItem[]>(
      'http://localhost:3000/carousel'
    );
  }
}
