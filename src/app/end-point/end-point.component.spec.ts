import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPointComponent } from './end-point.component';

describe('EndPointComponent', () => {
  let component: EndPointComponent;
  let fixture: ComponentFixture<EndPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndPointComponent]
    });
    fixture = TestBed.createComponent(EndPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
