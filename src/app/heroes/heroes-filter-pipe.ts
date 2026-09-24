import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes';

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {
  transform(value: IHeroes[], args: string): IHeroes[] {
    let filter: string = args ? args.toLowerCase() : ''; 

    return filter
      ? value.filter((hero: IHeroes) =>
          hero.nombre.toLowerCase().indexOf(filter) !== -1): value;
  }
}