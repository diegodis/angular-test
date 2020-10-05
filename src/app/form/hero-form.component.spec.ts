import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HeroFormComponent } from './hero-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFormComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el titulo debe tener warn'), () => {
    expect(component.content).toContain("warn title");
  }

  it('La severidad es mayor a 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  })

  it('el titulo esperado en h1 ', ()=> {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe("ALERT BUTTON");
  })

  it('to be tiitle truthy', () => {
    expect(component.hideContent).toBeTruthy();
    component.changeButton();
    expect(component.hideContent).toBeFalsy();
  })

  it('boton asincronico' , fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.changeButtonAsync();
    tick(500)
    expect(component.hideContent).toBeFalsy();
  }) )


});
