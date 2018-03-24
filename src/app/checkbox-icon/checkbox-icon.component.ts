import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-checkbox-icon',
  templateUrl: './checkbox-icon.component.html',
  styleUrls: ['./checkbox-icon.component.css']
})
export class CheckboxIconComponent implements OnInit {
  @Input() iconName: string;
  @Input() iconClass: string;
  @Input() activeColor: string;
  @Input() inactiveColor: string;
  @Input() status: boolean;
  @Output() statusVal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.iconName = 'close';
    this.activeColor = 'green';
    this.inactiveColor = 'red';
    this.status = false;
  }

  ngOnInit() {
  }


  clickEvent() {
    this.status = !this.status;
    this.statusVal.emit(this.status);
  }

}
