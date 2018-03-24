import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExpressRefillComponent } from './express-refill/express-refill.component';
import { TransferRefillComponent } from './transfer-refill/transfer-refill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'expressrefill', component: ExpressRefillComponent},
  {path: 'transferrefill', component: TransferRefillComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExpressRefillComponent,
    TransferRefillComponent,
    NavbarComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
