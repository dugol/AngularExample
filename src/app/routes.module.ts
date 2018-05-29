import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { LoginComponent } from './login.component';
import { listaClientesComponent } from './listaClientes.component';

const appModules: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cliente', component: listaClientesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appModules, { })
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouterModule { }
