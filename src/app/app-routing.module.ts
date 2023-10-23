import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { EULAComponent } from './pages/eula/eula.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { SpendingComponent } from './pages/spending/spending.component';
import { CreditComponent } from './pages/credit/credit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'termsOfUse', component: TermsOfUseComponent },
  { path: 'eula', component: EULAComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'spending', component: SpendingComponent },
  { path: 'credit', component: CreditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
