import { Route } from '@angular/router';
import { CadastroGeracaoComponent } from '../pages/cadastro-geracao/cadastro-geracao.component';
import { CadastroUnidadeComponent } from '../pages/cadastro-unidade/cadastro-unidade.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ListaUnidadesComponent } from '../pages/lista-unidades/lista-unidades.component';
import { LoginComponent } from '../pages/login/login.component';
import { AutenticacaoGuard } from '../services/guards/autenticacao.guard';

export const ROTAS: Route[] = [
    {
      path: '',
      component: DashboardComponent, canActivate: [AutenticacaoGuard]
    },
    {
      path: 'dashboard',
      component: DashboardComponent, canActivate: [AutenticacaoGuard]
    },
    {
      path: 'cadastro-geracao',
      component: CadastroGeracaoComponent, canActivate: [AutenticacaoGuard]
    },
    {
      path: 'unidades',
      component: ListaUnidadesComponent, canActivate: [AutenticacaoGuard]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'cadastro-unidade',
      component: CadastroUnidadeComponent, canActivate: [AutenticacaoGuard]
    }
]