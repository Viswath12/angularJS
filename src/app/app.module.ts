import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//firebase talking
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AuthService } from './providers/auth.service';
import { HomepageComponent } from './homepage/homepage.component';

//initialize firebase
export const config = {
    apiKey: "AIzaSyAhM5S1iV6HoI6KbvO_S3tSIUvifal3olk",
    authDomain: "mytrial-2554d.firebaseapp.com",
    databaseURL: "https://mytrial-2554d.firebaseio.com",
    projectId: "mytrial-2554d",
    storageBucket: "mytrial-2554d.appspot.com",
    messagingSenderId: "239722080635"
  };

  const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'login', component: LoginPageComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
