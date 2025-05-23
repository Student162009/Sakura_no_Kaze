import { Pipe, PipeTransform } from '@angular/core';
import { rand } from '../rand';

@Pipe({
  name: 'fraza'
})
export class FrazaPipe implements PipeTransform {

  transform(value: any[]): any | null {
    const Index = rand(0,5);
    return value[Index];
  }

}
