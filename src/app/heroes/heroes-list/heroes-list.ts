import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

 
@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=45;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';
 
  showImage(): void {
  this.muestraImage = !this.muestraImage;
}
 
 
  heroes:IHeroes[]=[
    {
      image:"https://dragonball-api.com/characters/ChiChi_DBS.webp",
      nombre:"CHI-CHI",
      description:"Esposa de Goku y madre de Gohan. ",
      race:"human",
      ki:0,
    },
 
    {
      image:"https://dragonball-api.com/characters/17_Artwork.webp",
      nombre:"Android 17",
      description:"Hermano mellizo de la Androide Número 18",
      race:"Android",
      ki:320000000,
    },
 
    {
      image:"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      description:"Bulma es la protagonista femenina de la serie manga Dragon Ball",
      race:"human",
      ki:0,
    },
 
    {
      image:"https://dragonball-api.com/characters/Androide_18_Artwork.webp",
      nombre:"Android 18",
      description:"Es la hermana melliza del Androide Número 17 ",
      race:"android",
      ki:2800000,
    },
  ]
}
 