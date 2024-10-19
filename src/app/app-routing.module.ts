import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";

const app_routes: Routes = [
    {
        path: '',
        component: PortafolioComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'item',
        component: ItemComponent
    },
    {
        path: '**',
        pathMatch: 'full', // cualquier ruta que no exista redirige a portafolio
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}