import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Apartado de mercado:
//        - Detalle de productos (caracteristicas, stock*, proyectos realizados, empresa [mision,vision], contactenos, area de clientes
// Apartado de Usuarios:
//        - Productos adquiridos, plan renovación, calendario de instalacion.
// * leyenda:
// 1.- si llegas a tener un almacen, sino quedaria como campo escondido hasta que lo consigas
