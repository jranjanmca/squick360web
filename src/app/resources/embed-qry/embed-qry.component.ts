import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-embed-qry',
  templateUrl: './embed-qry.component.html',
  styleUrls: ['./embed-qry.component.scss']
})

export class EmbedQryComponent implements OnInit {
    
@Input() autoSearh:boolean = false;
@Input() enblSearchBtn:boolean = false;
@Input() inputType:string = 'text';
@Input() searchBoxPlaceHolder:string = 'Type a ary phrase.';
qryVal = new FormControl();
searchedObjs:Array<any>;
projs:Array<string>;
selectedObjs:Array<any>;

constructor() { }
ngOnInit(): void {
}

}
