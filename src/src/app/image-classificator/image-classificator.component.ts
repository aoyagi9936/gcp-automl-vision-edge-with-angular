import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Prediction } from '../prediction';

declare function run(): void;
declare function classify(): Promise<Prediction>;

@Component({
  selector: 'app-image-classificator',
  templateUrl: './image-classificator.component.html',
  styleUrls: ['./image-classificator.component.scss']
})
export class ImageClassificatorComponent implements OnInit {

  predictions: Array<Prediction> = new Array();
  model: any;
  imgURL: any;
  fileName: string;
  @ViewChild('imgSource') imgSource: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;
  loading = false;

  constructor() { }

  ngOnInit() {
    this.imgURL = './assets/images/card_title.png';
    run();
  }

  onClick() {
    this.fileInput.nativeElement.click();
  }

  preview(files) {

    this.loading = true;

    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    this.fileName = files[0].name;

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      classify()
        .then(v => {
          this.predictions = new Array();
          this.predictions.push(v);
          this.loading = false;
        });
    }
  }

}
