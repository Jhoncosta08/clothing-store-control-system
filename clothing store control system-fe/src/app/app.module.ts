import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './principal/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCardModule  } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentPrincipalComponent } from './principal/component-principal/component-principal.component';
import { ListaAdmComponent } from './cadastro/cadastro-adm/lista-adm/lista-adm.component';
import { AdicionarAdmComponent } from './cadastro/cadastro-adm/adicionar-adm/adicionar-adm.component';
import { ListaVendedorComponent } from './cadastro/cadastro-vendedor/lista-vendedor/lista-vendedor.component';
import { AdicionarVendedorComponent } from './cadastro/cadastro-vendedor/adicionar-vendedor/adicionar-vendedor.component';
import { IniciarPausarCaixaComponent } from './caixa/iniciar-pausar-caixa/iniciar-pausar-caixa.component';
import { FecharCaixaComponent } from './caixa/fechar-caixa/fechar-caixa.component';
import { ListaVendasComponent } from './vendas/lista-vendas/lista-vendas.component';
import { AdicionarVendaComponent } from './vendas/adicionar-venda/adicionar-venda.component';
import { EditarVendaComponent } from './vendas/editar-venda/editar-venda.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { AdicionarProdutoComponent } from './produtos/adicionar-produto/adicionar-produto.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component';
import { VisualizarProdutoComponent } from './produtos/visualizar-produto/visualizar-produto.component';
import { VisualizarVendaComponent } from './vendas/visualizar-venda/visualizar-venda.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { ListaVariacoesComponent } from './variacoes/lista-variacoes/lista-variacoes.component';
import { LoginComponent } from './login/login/login.component';
import { EsqueciSenhaComponent } from './login/esqueci-senha/esqueci-senha.component';
import { ListaEntregasComponent } from './entregas/lista-entregas/lista-entregas.component';
import { RelatorioVendasComponent } from './relatorios/relatorio-vendas/relatorio-vendas.component';
import { RelatorioProdutosComponent } from './relatorios/relatorio-produtos/relatorio-produtos.component';
import { RelatorioVendedoresComponent } from './relatorios/relatorio-vendedores/relatorio-vendedores.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CampoGeralComponent } from './forms/cadastro-produtos/campo-geral/campo-geral.component';
import { CampoEstoqueComponent } from './forms/cadastro-produtos/campo-estoque/campo-estoque.component';
import { CampoVariacaoComponent } from './forms/cadastro-produtos/campo-variacao/campo-variacao.component';
import { CampoImagensComponent } from './forms/cadastro-produtos/campo-imagens/campo-imagens.component';
import { CampoPrecoComponent } from './forms/cadastro-produtos/campo-preco/campo-preco.component';
import { FinalizarCadastroComponent } from './forms/cadastro-produtos/finalizar-cadastro/finalizar-cadastro.component';
//import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentPrincipalComponent,
    ListaAdmComponent,
    AdicionarAdmComponent,
    ListaVendedorComponent,
    AdicionarVendedorComponent,
    IniciarPausarCaixaComponent,
    FecharCaixaComponent,
    ListaVendasComponent,
    AdicionarVendaComponent,
    EditarVendaComponent,
    ListaProdutosComponent,
    AdicionarProdutoComponent,
    EditarProdutoComponent,
    VisualizarProdutoComponent,
    VisualizarVendaComponent,
    ListaCategoriasComponent,
    ListaVariacoesComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    ListaEntregasComponent,
    RelatorioVendasComponent,
    RelatorioProdutosComponent,
    RelatorioVendedoresComponent,
    CampoGeralComponent,
    CampoEstoqueComponent,
    CampoVariacaoComponent,
    CampoImagensComponent,
    CampoPrecoComponent,
    FinalizarCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule, 
    MatExpansionModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    //NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
