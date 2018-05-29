import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosService {
    constructor(private http: Http) { }

    login(user: string, pws: string): Observable<any> {
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Usuario?login=' + user + '&clave=' + pws).
        map(response => response.text());
    }

    obtenerClientes(): Observable<any> {
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Cliente').
        map(response => response.text());
    }
}
