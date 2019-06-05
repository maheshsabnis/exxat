import { Injectable } from '@angular/core';

// the service is available for Injection across all
// objects in the current application

@Injectable({
     providedIn:'root'
})
export class UtilitiesService {
    changeStringCase(str: string, choice: string): string {
        let res: string ='';
        if(choice === 'U') {
            res = str.toUpperCase();
        }

        if(choice === 'L') {
            res = str.toLowerCase();
        }
        return res;
    }
}