import { Component, OnInit } from '@angular/core';
import { ImageService } from '../images/image.service'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass']
})
export class ImagesComponent implements OnInit {

  public images = [];

  constructor(private imageService:ImageService) { console.log("initImages") }

  ngOnInit(): void {
    console.log("initImages")
    this.initImages();
  }

  public initImages():void{
    alert("init")
    console.log("carganfdo imagenes")
    this.imageService.getImages().subscribe(data => this.images = data);
  }

}
