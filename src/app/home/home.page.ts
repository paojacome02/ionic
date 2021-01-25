import { Component } from '@angular/core';
import {Color} from '../model/color.model'
import { ColorsService } from '../services/colors.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colors : Color[];

  constructor(private colorsService: ColorsService) {
    this.colorsService.getColors().subscribe(res =>{
      this.colors = res.data;
    });
  }
}
