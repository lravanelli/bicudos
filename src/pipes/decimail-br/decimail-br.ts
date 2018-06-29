import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DecimailBrPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'decimailBr',
})
export class DecimailBrPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number): string {
    return value.toString().replace(",","&").replace(".",",").replace("&",".");
  }
}
