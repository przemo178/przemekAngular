import { Injectable } from "@angular/core";
import { IMenuItem } from "../models/menu.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class MenuService {
    public isAuthorize$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public menuItems$: BehaviorSubject<IMenuItem[]> = new BehaviorSubject<IMenuItem[]>([]);
    
    constructor(private _httpClient: HttpClient) {}

    getMenuItems(): Observable<IMenuItem[]> {
        return this._httpClient.get<IMenuItem[]>('http://localhost:3000/menu');
    }
}
