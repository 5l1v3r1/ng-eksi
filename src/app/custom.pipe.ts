import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bkz' })
export class BakinizPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/\(bkz: (.*)\)/g, "<a href=\"/entry/$1\">$1</a>");

  }
}

@Pipe({ name: 'characterEscape' })
export class CharacterEscapePipe implements PipeTransform {
  transform(value: string) {
    return encodeURIComponent(value);
  }
}