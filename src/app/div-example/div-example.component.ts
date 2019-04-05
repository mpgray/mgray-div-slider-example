import {Component, NgZone, OnInit} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-div-example',
  templateUrl: './div-example.component.html',
  styleUrls: ['./div-example.component.scss']
})
export class DivExampleComponent implements OnInit {
  sliderNum = 500;
  constructor() {

  }

  ngOnInit() {

  }

}
