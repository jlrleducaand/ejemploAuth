import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

export const ROUTES: Routes = [
    {path: "home", component: HomeComponent},
    {path: "precios", component: PreciosComponent},
    {path: "protegida", component: ProtegidaComponent},
    {path: "**", pathMatch: "full", redirectTo: "home"}
];


