import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bkz'})
export class BakinizPipe implements PipeTransform {
  transform(value: string) {
          return "anan";
  }
}