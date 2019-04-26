import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryAutocompleteComponent } from './brewery-autocomplete.component';

describe('BreweryAutocompleteComponent', () => {
  let component: BreweryAutocompleteComponent;
  let fixture: ComponentFixture<BreweryAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
