import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab-checkbox',
  templateUrl: './tab-checkbox.component.html',
  styleUrls: ['./tab-checkbox.component.scss']
})
export class TabCheckboxComponent implements OnInit {

  @Input() display: string = 'inline-block';
  @Input() width: string = '100%';
  @Input() valueDefault: string | number;
  @Input() listButtonCheck: any[] = [];
  @Input() style: any = null;
  @Input() widthGroup: string = '';

  @Output() changeTab = new EventEmitter<string | number>()

  constructor() { }

  ngOnInit(): void {
  }

  handleOnChange(value){
    this.changeTab.emit(value);
  }

}
