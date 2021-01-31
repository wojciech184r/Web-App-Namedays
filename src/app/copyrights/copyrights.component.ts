import { ColorsService } from './../services/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.css'],
})
export class CopyrightsComponent implements OnInit {
  redChannel = 0;
  greenChannel = 0;
  blueChannel = 0;

  constructor(private colorsService: ColorsService) {}

  ngOnInit(): void {}

  onAddColor() {
    if (
      this.isCorrectChannelValue(this.redChannel) &&
      this.isCorrectChannelValue(this.greenChannel) &&
      this.isCorrectChannelValue(this.blueChannel)
    ) {
      this.addColor();
    } else {
      alert(
        'One or many of channels have incorrect value. Channel value should be from <0, 255>'
      );
    }
  }

  private addColor() {
    this.colorsService.colors.push(
      `rgb(${this.redChannel}, ${this.greenChannel}, ${this.blueChannel})`
    );
  }

  private isCorrectChannelValue(channelValue: number): boolean {
    return channelValue >= 0 && channelValue <= 255;
  }
}
