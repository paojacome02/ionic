import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../services/colors.service';
import {ActivatedRoute} from '@angular/router';
import { Color } from '../model/color.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
  color: Color[];

  constructor(private route: ActivatedRoute, private colorsService: ColorsService) { 
    this.route.params.subscribe(parameters =>{
      if(parameters.id){
        this.colorsService.getSingleColor(parameters.id).subscribe(res =>{
          this.color = res.data;
        });
      }
      });
    } 
  ngOnInit() {
  }

}
