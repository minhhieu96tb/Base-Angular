import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUpscaleQuality'
})
export class ConvertUpscaleQualityPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case '2': return '4K';
      case '1': return '2K';
      case '0': return 'HD';
      default: return '';
    }
  }
}