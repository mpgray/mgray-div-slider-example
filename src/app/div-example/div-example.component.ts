import {Component, NgZone, OnInit} from '@angular/core';
import {MatSliderModule} from '@angular/material';
import {RESTService} from './div-example.service';
import update from '@angular/cli/commands/update';

@Component({
  selector: 'app-div-example',
  templateUrl: './div-example.component.html',
  styleUrls: ['./div-example.component.scss']
})
export class DivExampleComponent implements OnInit {
  sliderNum = 500;
  people: any = [];
  temp: any = [];
  constructor(public rest: RESTService) {

  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.people = [];
    this.rest.getExampleItem().subscribe((data: {}) => {
      console.log(data);
      this.people = data;
      console.log(this.people.quantity);
      this.updateSlider(this.people.quantity);
    });
    this.updateSlider(this.people.quantity);
  }

  updatePeople() {
    this.people = [];
    this.rest.updateExampleItem(this.people).subscribe((data: {}) => {
      console.log(data);
      this.people = data;
      console.log(this.people.quantity);
      this.updateSlider(this.people.quantity);
    });
    this.updateSlider(this.people.quantity);
  }



  updateSlider(s) {
    this.sliderNum = s;
  }



}
