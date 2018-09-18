import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SldrComponent } from './sldr.component';

describe('SldrComponent', () => {
  let component: SldrComponent;
  let fixture: ComponentFixture<SldrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SldrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SldrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
