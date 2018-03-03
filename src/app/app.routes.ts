/* Este archivo nos sirve para poder rutearnos desde diferentes vistas */

import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { IngresoComponent } from "./components/ingreso/ingreso.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { ComprasRealizadasComponent } from "./components/compras-realizadas/compras-realizadas.component";
import { SinginComponent } from "./components/singin/singin.component";
import { SingupComponent } from "./components/singup/singup.component";
import { StockComponent } from "./components/stock/stock.component";


export const router: Routes = [
    /*primer objeto */
    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'compras-realizadas',
        component: ComprasRealizadasComponent
    },

    {
        path: 'ingreso',
        component: IngresoComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'singin',
        component: SinginComponent
    },
    {
        path: 'singup',
        component: SingupComponent
    },
    {
        path: 'stock',
        component: StockComponent
    }

];
/* para exportar y ddecir que este es nuestro router principal y lo agregaamos en app.modules */
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
