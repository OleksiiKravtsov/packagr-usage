import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

// if this line is removed, then all typings generated successfully
import { CacheService } from 'ng2-cache/ng2-cache';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent // <-- this!
  ]
})
export class HeaderModule { }