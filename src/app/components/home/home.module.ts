import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({

    declarations: [
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        FormsModule,
        BrowserModule
    ]
})

export class HomeModule{

}