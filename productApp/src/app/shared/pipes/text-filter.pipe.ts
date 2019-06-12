import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("----",Object.keys(value), typeof Object.keys(value))
    return Object.keys(value);
  }
}
