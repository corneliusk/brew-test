import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreweryComponent } from './add-brewery.component';

describe('AddBreweryComponent', () => {
  let component: AddBreweryComponent;
  let fixture: ComponentFixture<AddBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
