import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SaludadorComponent } from "./saludador/saludador.component";

const routes: Routes = [
    { path: "", redirectTo: "/saluda", pathMatch: "full" },
    { path: "saluda", component: SaludadorComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }