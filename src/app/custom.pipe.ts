import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bkz' })
export class BakinizPipe implements PipeTransform {
  
  transform(value: string, params: any) {
    // Normal bkz
    value = value.replace(/\(bkz: ?([^)]+)\)/g, (match, p1: string) => {
      return `(bkz: <a href="/entry/${p1}/1">${p1}</a>)`;
    });

    // Gizli bkz
    value = value.replace(/`([^`:]+)`/g, (match, p1: string) => {
      return `<a href="/entry/${p1}/1">${p1}</a>`;
    });

    // Yildizli bkz
    value = value.replace(/`:([^`]+)`/g, (match, p1: string) => {
      return `<a href="/entry/${p1}/1">*</a>`;
    });

    // Gizli link
    value = value.replace(/\[(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}) ([^\]]*)\]/g, (match, p1: string, p2: string) => {
      return `<a href="${p1}">${p2}</a>`;
    });

    // Normal link
    value = value.replace(/(?: |\n)(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g, (match, p1: any) => {
      return `<a href="${p1}">${p1}</a>`;
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
