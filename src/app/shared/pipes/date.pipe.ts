import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';  

@Pipe({ name: 'creationDatePipe' })
export class CreationDatePipe extends DatePipe implements PipeTransform {
    override transform(value: any, args?: any): any {
        return super.transform(value, "d MMM, y") 
    }
}
