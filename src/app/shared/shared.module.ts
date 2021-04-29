import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { LabelAtributoPokemonComponent } from './components/label-atributo-pokemon/label-atributo-pokemon.component';
import { ListaAtributoPokemonComponent } from './components/lista-atributo-pokemon/lista-atributo-pokemon.component';
import { ModalPokemonDetailComponent } from './components/modal-pokemon-detail/modal-pokemon-detail.component';
import { NavbarComponent } from './components/navigation/navigation.component';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { PokemonService } from './services/pokemon.service';

registerLocaleData(ptBr);

@NgModule({
  entryComponents: [
    ModalPokemonDetailComponent,
  ],
  declarations: [
    NavbarComponent,
    CardPokemonComponent,
    LabelAtributoPokemonComponent,
    ListaAtributoPokemonComponent,
    ModalPokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BootstrapModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BootstrapModule,
    NavbarComponent,
    CardPokemonComponent,
    LabelAtributoPokemonComponent,
    ListaAtributoPokemonComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    PokemonService
  ],
})
export class SharedModule { }
