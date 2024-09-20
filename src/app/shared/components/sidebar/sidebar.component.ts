import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){
    console.log(this.gifsService.tagsHistory.length)

  }

get tags (){
  return this.gifsService.tagsHistory;
}

searchTag(newTag: string){

  this.gifsService.searchTag(newTag)

  console.log(newTag)
}



}
