import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ServersService} from './servers/servers.service';
import {ServerResolver} from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
