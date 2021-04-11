import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenderOnModalService {

  mySubject: any;
  myObserver: any;
  
  constructor() { 
    this.mySubject = new BehaviorSubject({});
    this.myObserver = this.mySubject.asObservable();
  }
}
