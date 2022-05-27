import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate (){
    if(!environment.userLogado){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
