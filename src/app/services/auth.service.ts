import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }
    //
    login(email: string, password: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email, password);
    }
    // 
    authenticated(): boolean {
      return this.afAuth.authState !== null;
    }

    //
    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    //

    currentUserObservable(): any {
        return this.afAuth.authState;
    }

    //
    newPassword(newPassword: string) {
      return this.afAuth.currentUser.then((user) => {
        if (user) {
          return user.updatePassword(newPassword);
        } else {
          return;
        }
      });
    }

    //
    newEmail(newEmail: string) {
      return this.afAuth.currentUser.then((user) => {
        if (user) {
          return user.updateEmail(newEmail);
        } else {
          return;
        }
      });
    }

    //

     getUser(): any {
      return this.afAuth.currentUser.then((user) => {
        if (user) {
          return [
            {
              username: user.displayName,
              email: user.email
            }
          ]
        } else {
          return;
        }
      });
    }

    //
    updateCurrentUserName(name: string) {
      return this.afAuth.currentUser.then((user) => {
        if (user) {
          return user.updateProfile({
            displayName: name
          });
        } else {
          return;
        }
      });
    }

    //
    registrate(email: string, password: string, name?: string) {
      return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
        if (name) {
          this.updateCurrentUserName(name);
        }
        return result.user;
      });
    }


}
