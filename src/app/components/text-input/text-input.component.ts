import { Component, OnInit, EventEmitter , Output, Input} from '@angular/core';

@Component({
  selector: 'acme-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Output() textInputted = new EventEmitter();
  @Input() buttonLabel ='';

  constructor() { }

  ngOnInit() {
  }

  inputTask(taskInput : HTMLInputElement) {
    this.textInputted.emit(taskInput.value);
  }

}
