import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directionsPath'
})
export class DirectionsPathPipe implements PipeTransform {

  transform(directions: { id: string; name: string }[]): string {
    if (!directions || directions.length === 0) {
      return '';
    }
    directions = directions.reverse();
    return directions.map(direction => direction.name).join('/');
  }

}