import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'newlineToBr'
})
export class NewlineToBrPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return value;
    // Replace \n with <br> and sanitize the HTML
    const htmlString = value.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

}