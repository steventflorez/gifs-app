import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/serch-box/Search-box.component';
import { CardListsComponent } from './components/card-lists/card-lists.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
