import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewMapComponent } from './brew-map.component';

describe('BrewMapComponent', () => {
  let component: BrewMapComponent;
  let fixture: ComponentFixture<BrewMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
