import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

import store from 'my-redux-store'; 
interface IAppState {
  /* ... */
}

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    console.log('store', store)
    ngRedux.provideStore(store);
  }
}
