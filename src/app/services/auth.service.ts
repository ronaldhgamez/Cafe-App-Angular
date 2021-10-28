import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = environment.baseUrl;

  private _usuario !: Usuario;

  getUsuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string) {
    const url = `${this.baseUrl}auth/admi`;
    const body = { usuario, contrasena };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp =>{
          if(resp.ok===true){
            this._usuario={
              usuario:resp.usuario!,
              uid:resp.uid!
            }
          }
        }),
         
        map(resp => resp.ok),//para que devuelva solo el booleano de si esta bien o mal (true,false)
        catchError(err => of(err.error.msg))//atrapa el error del request y muestra cual es
        )
  }
}