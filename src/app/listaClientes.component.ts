import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {cliente} from './cliente';
import { ServiciosService } from './user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './listaClientes.html'
})

// tslint:disable-next-line:class-name
export class listaClientesComponent {
    clientes: cliente[];

    constructor(public service: ServiciosService, public router:Router){

        service.obtenerClientes().subscribe(result => {
            const obj = JSON.parse(result);
            this.clientes = obj.clienteWS;
        });
    }
}
