import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bkz' })
export class BakinizPipe implements PipeTransform {
  transform(value: string, params: any) {
    // Normal bkz
    value = value.replace(/\(bkz: ?([^)]+)\)/g, (match, p1: any) => {
      return `(bkz: <a href="/entry/${p1}/1">${p1}</a>)`;
    });

    // Gizli bkz
    value = value.replace(/`([^`:]+)`/g, (match, p1: any) => {
      return `<a href="/entry/${p1}/1">${p1}</a>`;
    });

    // Yildizli bkz
    value = value.replace(/`:([^`]+)`/g, (match, p1: any) => {
      return `<a href="/entry/${p1}/1">*</a>`;
    });

    return value;
  }
}

@Pipe({ name: 'characterEscape' })
export class CharacterEscapePipe implements PipeTransform {
  transform(value: string) {
    return encodeURIComponent(value);
  }
}
