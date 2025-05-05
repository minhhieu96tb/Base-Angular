import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropImage'
})
export class CropImagePipe implements PipeTransform {

  transform(imageData: any): any {
    if (!imageData) return {};

    const { imageUrl, cropX, cropY, cropWidth, cropHeight, scale } = imageData;

    return {
      'background-image': `url(${imageUrl})`,
      'background-position': `${-cropX * scale}px ${-cropY * scale}px`,
      'background-size': `${cropWidth * scale}px ${cropHeight * scale}px`,
      'width': '100%',
      'height': '100%',
      'overflow': 'hidden'
    };
  }
}
