import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinNames'
})
export class JoinNamesPipe implements PipeTransform {

  transform(directions: {id: string, name: string}[]): string {
    return directions.map(direction => direction.name).join('/');
  }

}