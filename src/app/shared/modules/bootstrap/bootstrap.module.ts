import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
  ],
  exports: [
    CommonModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    PaginationModule,
    CollapseModule,
    CarouselModule,
    ProgressbarModule,
    AlertModule,
  ]
})
export class BootstrapModule { }
