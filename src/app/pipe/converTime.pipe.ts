import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimeConfig'
})
export class ConvertTimeConfigPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0: return 'Ngày';
      case 1: return 'Tuần';
      case 2: return 'Tháng';
      case 3: return 'Năm';
      default: return '';
    }
  }
}