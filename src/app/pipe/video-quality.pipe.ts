import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoQuality'
})
export class VideoQualityPipe implements PipeTransform {
  transform(width: string | number, height: string | number): string {
    const w = typeof width === 'string' ? Number(width) : width;
    const h = typeof height === 'string' ? Number(height) : height;

    if (isNaN(w) || isNaN(h)) {
      return 'Unknown';
    }

    if (w >= 3840 && h >= 2160) {
      return '4K';
    } else if (w >= 2560 && h >= 1440) {
      return '2K';
    } else if (w >= 1920 && h >= 1080) {
      return 'HD';
    } else {
      return 'SD';
    }
  }
}