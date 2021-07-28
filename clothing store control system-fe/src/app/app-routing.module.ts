import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';
import { ComponentPrincipalComponent } from './principal/component-principal/component-principal.component';
import { ListaAdmComponent } from './cadastro/cadastro-adm/lista-adm/lista-adm.component';
import { ListaVendedorComponent } from './cadastro/cadastro-vendedor/lista-vendedor/lista-vendedor.component';
import { IniciarPausarCaixaComponent } from './caixa/iniciar-pausar-caixa/iniciar-pausar-caixa.component';
import { FecharCaixaComponent  } from './caixa/fechar-caixa/fechar-caixa.component';
import { ListaVendasComponent } from './vendas/lista-vendas/lista-vendas.component';
import { AdicionarAdmComponent } from './cadastro/cadastro-adm/adicionar-adm/adicionar-adm.component';
import { AdicionarVendedorComponent } from './cadastro/cadastro-vendedor/adicionar-vendedor/adicionar-vendedor.component';
import { AdicionarVendaComponent } from './vendas/adicionar-venda/adicionar-venda.component';
import { EditarVendaComponent } from './vendas/editar-venda/editar-venda.component';
import { VisualizarVendaComponent } from './vendas/visualizar-venda/visualizar-venda.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { AdicionarProdutoComponent } from './produtos/adicionar-produto/adicionar-produto.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component';
import { VisualizarProdutoComponent } from './produtos/visualizar-produto/visualizar-produto.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { ListaVariacoesComponent } from './variacoes/lista-variacoes/lista-variacoes.component';
import { LoginComponent } from './login/login/login.component';
import { EsqueciSenhaComponent } from './login/esqueci-senha/esqueci-senha.component';
import { ListaEntregasComponent } from './entregas/lista-entregas/lista-entregas.component';
import { RelatorioProdutosComponent } from './relatorios/relatorio-produtos/relatorio-produtos.component';
import { RelatorioVendasComponent } from './relatorios/relatorio-vendas/relatorio-vendas.component';
import { RelatorioVendedoresComponent } from './relatorios/relatorio-vendedores/relatorio-vendedores.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentPrincipalComponent,
    children: [

      {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'esqueci-senha',
        component: EsqueciSenhaComponent
      },

      {
        path: 'Lista-adm',
        component: ListaAdmComponent
      },

      {
        path: 'adicionar-adm',
        component: AdicionarAdmComponent
      },

      {
        path: 'Lista-vendedor',
        component: ListaVendedorComponent
      },

      {
        path: 'adicionar-vendedor',
        component: AdicionarVendedorComponent
      },

      {
        path: 'iniciar-pausar-caixa',
        component: IniciarPausarCaixaComponent
      },

      {
        path: 'fechar-caixa',
        component: FecharCaixaComponent
      },

      {
        path: 'lista-vendas',
        component: ListaVendasComponent
      },

      {
        path: 'adicionar-vendas',
        component: AdicionarVendaComponent
      },

      {
        path: 'editar-venda',
        component: EditarVendaComponent
      },

      {
        path: 'visualizar-venda',
        component: VisualizarVendaComponent
      },

      {
        path: 'lista-produtos',
        component: ListaProdutosComponent
      },

      {
        path: 'adicionar-produto',
        component: AdicionarProdutoComponent
      },

      {
        path: 'editar-produto',
        component: EditarProdutoComponent
      },

      {
        path: 'visualizar-produto',
        component: VisualizarProdutoComponent
      },

      {
        path: 'lista-categorias',
        component: ListaCategoriasComponent
      },

      {
        path: 'lista-variacoes',
        component: ListaVariacoesComponent 
      },

      {
        path: 'lista-entregas',
        component: ListaEntregasComponent
      },

      {
        path: 'relatorio-produtos',
        component: RelatorioProdutosComponent
      },

      {
        path: 'relatorio-vendas',
        component: RelatorioVendasComponent
      },

      {
        path: 'relatorio-vendedores',
        component: RelatorioVendedoresComponent
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
