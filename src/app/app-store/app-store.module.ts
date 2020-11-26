import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AccountStoreModule } from './account-store/account-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule { }
