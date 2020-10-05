import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.sass']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content:string = "warn title";
  hideContent = true;
  severity = 423;

  changeButton(){
    this.hideContent = !this.hideContent;
  }

  changeButtonAsync(){
    timer(500).subscribe(() => {
      this.changeButton()
    })
  }

}
