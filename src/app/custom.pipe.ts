import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bkz'})
export class BakinizPipe implements PipeTransform {
  transform(value: string,  params: any) {
          console.log(params);
          return "<div>adasda</div>";
          
  }
}

@Pipe({ name: 'characterEscape' })
export class CharacterEscapePipe implements PipeTransform {
  transform(value: string) {
    return encodeURIComponent(value);
  }
}