import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { PaginaPadraoComponent } from './components/pagina-padrao/pagina-padrao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaUnidadesComponent } from './pages/lista-unidades/lista-unidades.component';
import { CadastroConsumoComponent } from './pages/cadastro-consumo/cadastro-consumo.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CDashboardComponent } from './components/cdashboard/cdashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuLateralComponent,
    PaginaPadraoComponent,
    ListaUnidadesComponent,
    CadastroConsumoComponent,
    UnidadesComponent,
    CadastroComponent,
    CDashboardComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
