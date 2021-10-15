import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  constructor(private httpclient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.httpclient.post('http://localhost:3000/user/signup', novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.httpclient.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
