import { Component, OnInit } from '@angular/core';
import {UtilitiesService} from './../../services/app.utility.services';
@Component({
    selector: 'app-utilityservice-component',
    templateUrl: './app.utilityservice.view.html' 
})
export class UtilityServiceComponent implements OnInit {
    message: string;
    msg:string;
    // inject the service using Constructor Injection
    constructor(private serv: UtilitiesService) { 
      this.message = '';
      this.msg = '';
    }

    ngOnInit(): void {
        this.message = this.serv.changeStringCase('Angular Service','U');
        this.msg = this.serv.changeStringCase('Angular Service','L');
    
    }
}
