import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import config from "config/config";
import { AppComponent } from "./app.component";
import { HomeModule } from "./pages/home/home.module";
import { RecetasModule } from "./pages/admin/recetas/recetas.module";
import { AdminModule } from "./pages/admin/admin.module";
import { Layouts } from "./layout/layout";

const routes: Routes = [{
    path: config.URL_BASE_PATH,
    data: {layout: Layouts.simple},
    children: [
        {path:'', loadChildren: ()=> HomeModule},
        // {path:'home', loadChildren: ()=> AdminModule},
        {path:'recetas', loadChildren:()=> RecetasModule}
    ],
},
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}