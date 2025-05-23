import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {

  
  transform(value: number): string {
    if (value == null || isNaN(value)) {
      return '☆☆☆☆☆'; 
    }

    const floor = Math.floor(value);
    const fract = value - floor;
    const starCount = fract >= 0.5 ? floor + 1 : floor;

    const maxStar = 5;
    let result = '';

    for (let i = 0; i < starCount; i++) {
      result += '★';
    }

    for (let i = starCount; i < maxStar; i++) {
      result += '☆';
    }

    return result;
  }

}
