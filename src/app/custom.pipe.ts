import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-jalaali';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/




// @Pipe({ name: 'NumberSplit' })
// export class NumberSplitPipe implements PipeTransform {
//     transform(value: any) {
//         return (value / 10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//     }
// }
// @Pipe({ name: 'inputNumberSplit' })
// export class inputNumberSplit implements PipeTransform {
//     transform(value: any) {
//         if (!value)
//             return

//         var regex = /[.,\s]/g;
//         var result = value.replace(regex, '');
//         return (result).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//     }
// }
@Pipe({ name: 'ShamsiDate' })
export class ShamsiDatePipe implements PipeTransform {
    transform(value: any) {
        if (!value) {
            return '';
        }
        let date = moment(value).format('jYYYY/jMM/jDD');
        return date;

    }
}
// @Pipe({ name: 'ShamsiFullDate' })
// export class ShamsFullDatePipe implements PipeTransform {
//     transform(value: any) {
//         if (!value) {
//             return '';
//         }
//         let fullDate = moment(value).format('jYYYY/jMM/jDD HH:mm:ss');
//         return fullDate;

//     }
// }

// @Pipe({ name: 'ShamsiUTC' })
// export class ShamsiUTCPipe implements PipeTransform {
//     transform(value: any) {
//         if (!value) {
//             return '';
//         }
//         const idate = moment(value + 'Z');
//         let date = idate.format('HH:mm')
//         return date;

//     }
// }

// @Pipe({ name: 'ShamsiFullDateZone' })
// export class ShamsiFullDateZonePipe implements PipeTransform {
//     transform(value: any) {

//         if (!value) {
//             return '';
//         }
//         let date = moment(value + "Z").format('jYYYY/jMM/jDD HH:mm');
//         return date;

//     }
// }

// @Pipe({ name: 'ShamsiDateZone' })
// export class ShamsiDateZonePipe implements PipeTransform {
//     transform(value: any) {

//         if (!value) {
//             return '';
//         }
//         let date = moment(value + "Z").format('jYYYY/jMM/jDD');
//         return date;

//     }
// }

// @Pipe({ name: 'JustTime' })
// export class JustTimePipe implements PipeTransform {
//     transform(value: any) {
//         let date = moment(value + "Z").format('HH:mm');
//         return date;
//     }
