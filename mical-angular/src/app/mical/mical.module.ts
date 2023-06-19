import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicalRoutingModule } from './mical-routing.module';
import { MicalContainerComponent } from './mical-container/mical-container.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';

@NgModule({
  declarations: [MicalContainerComponent, MenuComponent, MenuItemComponent, HeaderComponent, CarouselComponent, CarouselItemComponent],
  imports: [CommonModule, MicalRoutingModule],
})
export class MicalModule {}
