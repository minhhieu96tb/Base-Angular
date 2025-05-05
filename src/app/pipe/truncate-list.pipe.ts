import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateList' })
export class TruncateListPipe implements PipeTransform {
  transform(value: any[], limit: number = 10): any[] {
    if (!Array.isArray(value) || value.length <= limit) {
      return value;
    }

    const truncated = value.slice(0, limit);
    const remaining = value.length - limit;

    return [...truncated, { name: `+${remaining}` }];
  }
}
