import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public showLoading: boolean = true;

  constructor() {}
}
