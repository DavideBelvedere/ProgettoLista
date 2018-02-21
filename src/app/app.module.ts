import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { HeaderService } from './headerService';
import { ListVideogame } from './listVideogame';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { FormsModule } from '@angular/forms';
import { DetailToEditService } from './detail-to-edit.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeViewComponent,
    ListViewComponent,
    EditViewComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeaderService,ListVideogame,DetailToEditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
