import { Pipe, PipeTransform } from '@angular/core';
import { deviceTimeZoneOffset } from 'src/app/helper/common.helper';

@Pipe({
  name: 'timezone'
})
export class TimezonePipe implements PipeTransform {

    transform(value: string, format: string = 'dd/MM/yyyy HH:mm:ss'): string {
        if (!value) return '';
    
        const utcDate = new Date(value);
        if (isNaN(utcDate.getTime())) return '';
    
        const offset = deviceTimeZoneOffset();
        const [hoursOffset, minutesOffset] = offset.split(':').map(Number);
        const offsetInMinutes = hoursOffset * 60 + minutesOffset;
        const offsetInMilliseconds = offsetInMinutes * 60 * 1000;
    
        const localDate = new Date(utcDate.getTime() + offsetInMilliseconds);
    
        const day = String(localDate.getDate()).padStart(2, '0');
        const month = String(localDate.getMonth() + 1).padStart(2, '0');
        const year = localDate.getFullYear();
        const hour = String(localDate.getHours()).padStart(2, '0');
        const minute = String(localDate.getMinutes()).padStart(2, '0');
        const second = String(localDate.getSeconds()).padStart(2, '0');
    
        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
      }
}
