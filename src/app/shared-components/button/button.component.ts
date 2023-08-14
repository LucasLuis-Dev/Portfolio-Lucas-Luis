import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()
  link: string = "";
  @Input()
  content: string = "";
  @Input()
  isDownload: boolean = false;
  @Input()
  newTab:boolean = false;
}
