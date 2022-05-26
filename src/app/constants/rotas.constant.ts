import { Route } from '@angular/router';
import { CadastroGeracaoComponent } from '../pages/cadastro-geracao/cadastro-geracao.component';
import { CadastroUnidadeComponent } from '../pages/cadastro-unidade/cadastro-unidade.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ListaUnidadesComponent } from '../pages/lista-unidades/lista-unidades.component';
import { LoginComponent } from '../pages/login/login.component';

export const ROTAS: Route[] = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'cadastro-geracao',
      component: CadastroGeracaoComponent
    },
    {
      path: 'unidades',
      component: ListaUnidadesComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'cadastro-unidade',
      component: CadastroUnidadeComponent
    }
]