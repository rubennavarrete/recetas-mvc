import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import config from "config/config";
import { AppComponent } from "./app.component";
import { HomeModule } from "./pages/home/home.module";
import { RecetasModule } from "./pages/admin/recetas/recetas.module";
import { AdminModule } from "./pages/admin/admin.module";

const routes: Routes = [{
    path: config.URL_API_BASE,
    data: AppComponent,
    children: [
        {path:'', loadChildren: ()=> AdminModule},
    ]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}