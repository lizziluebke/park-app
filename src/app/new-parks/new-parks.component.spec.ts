import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParksComponent } from './new-parks.component';

describe('NewParksComponent', () => {
  let component: NewParksComponent;
  let fixture: ComponentFixture<NewParksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewParksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
