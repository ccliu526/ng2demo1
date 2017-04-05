import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, length?: number): any {
    if(value.length > length){
      return value.substr(0,value.length-length) + "***";
    }else{
      return value + "***";
    }
  }

}
