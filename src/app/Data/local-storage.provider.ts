import {InjectionToken} from '@angular/core';

export const appLocalStorage = new InjectionToken('inkaLocalStorage', {
  factory: () => {
    return window.localStorage
  }
})
