import { inject, TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


describe('ImageService', () => {
  let service: ImageService;
  let httpTestCtrl: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImageService]
    });
    service = TestBed.get(ImageService)
  });




  it('should be created', inject([ImageService], ( service: ImageService ) => {

    expect(service).toBeTruthy();
  }));
});
