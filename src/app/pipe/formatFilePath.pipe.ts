import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFilepath'
})
export class FormatFilePathPipe implements PipeTransform {

  transform( filePath: string): string {
    if (!filePath) {
        return '';
      }
      const segments = filePath.split('/').map(segment => segment.trim());
      if (segments.length <= 2) {
        return filePath;
      }
      const firstSegment = segments[0];
      const lastSegment = segments[segments.length - 1];
      return `${firstSegment} / ... / ${lastSegment}`;
  }
}