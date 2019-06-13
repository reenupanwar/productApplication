import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash"

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.key_value_pairs(value)
    
  }

  key_value_pairs(obj) 
   {
    var keys = this._keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], obj[keys[i]]];

    }
    return pairs;
  }

 _keys(obj) 
  {
    if (!this.isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
   isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
}
