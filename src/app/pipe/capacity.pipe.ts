import { Injectable, Pipe, PipeTransform } from '@angular/core';

// MB, GB
@Injectable({
  providedIn: 'root',
})
@Pipe({ name: 'capacity' })
export class CapacityPipe implements PipeTransform {
  transform(value: number, unit: 'Byte' | 'KB' | 'MB' | 'GB' | 'auto' = 'auto'): string {
    if (isNaN(value)) {
      return '';
    }

    let result: string;

    switch (unit) {
      case 'Byte':
        result = `${value} Byte`;
        break;
      case 'KB':
        const kb = (value / 1024).toFixed(2);
        result = `${kb} KB`;
        break;
      case 'MB':
        const mb = (value / 1048576).toFixed(2);
        result = `${mb} MB`;
        break;
      case 'GB':
        const gb = (value / 1073741824).toFixed(2);
        result = `${gb} GB`;
        break;
      default: // 'auto'
        if (value < 1024) {
          result = `${value} Byte`;
        } else if (value < 1048576) {
          const autoKb = Math.round(value / 1024);
          result = `${autoKb} KB`;
        } else if (value < 1073741824) {
          const autoMb = (value / 1048576).toFixed(2);
          result = `${autoMb} MB`;
        } else {
          const autoGb = (value / 1073741824).toFixed(2);
          result = `${autoGb} GB`;
        }
    }

    return result;
  }
}