import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args != undefined && args != null && args != null) {
			return value.filter(data => (data.name.toLowerCase()).indexOf(args) > -1);
		}
		return value;
  }

}
