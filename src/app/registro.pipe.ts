import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registro'
})
export class RegistroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
