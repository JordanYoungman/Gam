import { Injectable } from '@angular/core'

import { AuthService } from '@auth0/auth0-angular'

import { switchMap, EMPTY } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LocalAuthService {
  constructor(public auth: AuthService) {}

  async onLoad() {
    console.log('gay')

    this.auth.isAuthenticated$.subscribe((x) => {
      console.log(x)
    })

    this.auth.isAuthenticated$
      .pipe(
        switchMap((x): any => {
          console.log(x)
          if (x == false) {
            return this.auth.loginWithRedirect().pipe(
              switchMap((x: any) => {
                if (x == true) {
                  return this.auth.user$
                } else {
                  return EMPTY
                }
              }),
            )
          } else {
            return this.auth.user$
          }
        }),
      )
      .subscribe((x) => {
        console.log(x)
      })

    // if (isAuthed) {
    //   console.log(isAuthed)
    //   return true
    // } else {
    //   this.auth.loginWithRedirect().subscribe((x) => {
    //     console.log(x)
    //     return false
    //   })
    //   return false
    // }
  }
}
