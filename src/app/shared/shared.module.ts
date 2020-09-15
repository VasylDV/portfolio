import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from './modules/modules.module';
@NgModule({
  imports: [CommonModule, ModulesModule]
})
export class SharedModule { }
