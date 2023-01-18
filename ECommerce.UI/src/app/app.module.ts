import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ProductService } from './Service/product.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { MensComponent } from './Components/Categories/mens/mens.component';
import { WomensComponent } from './Components/Categories/womens/womens.component';
import { ClothingComponent } from './Components/Categories/mens/clothing/clothing.component';
import { FootwearComponent } from './Components/Categories/mens/footwear/footwear.component';
import { AccesoriesComponent } from './Components/Categories/mens/accesories/accesories.component';
import { LuggageComponent } from './Components/Categories/mens/luggage/luggage.component';
import { ProductContainerComponent } from './Components/product-container/product-container.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MensComponent,
    WomensComponent,
    ClothingComponent,
    FootwearComponent,
    AccesoriesComponent,
    LuggageComponent,
    ProductContainerComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
