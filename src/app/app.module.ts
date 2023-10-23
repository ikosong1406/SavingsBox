import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './sharepage/sidebar/sidebar.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { EULAComponent } from './pages/eula/eula.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { SpendingComponent } from './pages/spending/spending.component';
import { CreditComponent } from './pages/credit/credit.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    EULAComponent,
    PartnerComponent,
    AboutUsComponent,
    SavingsComponent,
    SpendingComponent,
    CreditComponent,
    ImageCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
