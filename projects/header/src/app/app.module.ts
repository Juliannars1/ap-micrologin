import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],
  providers: [],
  //bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  /// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngDoBootstrap() {
    const header = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('ap-header-mf', header);
  }
}
