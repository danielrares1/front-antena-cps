import { CollaboratorComponent } from './collaborator/collaborator.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AgendaComponent, NgbdModalContent } from './agenda/agenda.component';
import { Agenda1Component } from './agenda/agenda1.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing-page/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './projeto/projeto.component';
import { StudentformsComponent } from './studentforms/studentforms.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RegEventComponent } from './reg-event/reg-event.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    FooterComponent,
    ContentComponent,
    ProfileComponent,
    LandingComponent,
    CadastroComponent,
    AboutComponent,
    CarouselComponent,
    ProjectComponent,
    AgendaComponent,
    Agenda1Component,
    NavbarComponent,
    StudentformsComponent,
    NgbdModalContent,
    RegEventComponent,
    CollaboratorComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule
  ],
  providers:[NgbCarouselConfig, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, 
    Title],
  entryComponents: [AgendaComponent, NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
