import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { PaginaPadraoComponent } from './components/pagina-padrao/pagina-padrao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaUnidadesComponent } from './pages/lista-unidades/lista-unidades.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CDashboardComponent } from './components/cdashboard/cdashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
import { RouterModule } from '@angular/router';
import { CadastroGeracaoComponent } from './pages/cadastro-geracao/cadastro-geracao.component';
import { GeracaoComponent } from './components/geracao/geracao.component';
import { CadastroUnidadeComponent } from './pages/cadastro-unidade/cadastro-unidade.component';

import { ROTAS } from './constants/rotas.constant';
import { LoginFormularioComponent } from './components/login-formulario/login-formulario.component';
import { LoginModalRegistroComponent } from './components/login-modal-registro/login-modal-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuLateralComponent,
    PaginaPadraoComponent,
    ListaUnidadesComponent,
    UnidadesComponent,
    CadastroComponent,
    CDashboardComponent,
    GraficoComponent,
    CadastroGeracaoComponent,
    GeracaoComponent,
    CadastroUnidadeComponent,
    LoginFormularioComponent,
    LoginModalRegistroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgChartsModule,
    RouterModule.forRoot(ROTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
