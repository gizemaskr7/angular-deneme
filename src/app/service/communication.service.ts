// communication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private currentComponentSubject = new BehaviorSubject<string>('login');
  public currentComponent$: Observable<string> = this.currentComponentSubject.asObservable();

  setCurrentComponent(component: string) {
    this.currentComponentSubject.next(component);
  }
}
