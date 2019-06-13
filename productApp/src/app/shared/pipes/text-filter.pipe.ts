import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash"

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.objectToArray(value)
    
  }

  objectToArray(obj) 
   {
    var property = this.properties(obj);
    var length = property.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [property[i], obj[property[i]]];

    }
    return pairs;
  }

  properties(obj) 
  {
    if (!this.isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var properties = [];
    for (var key in obj) if (_.has(obj, key)) properties.push(key);
    return properties;
  }
   isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
}
