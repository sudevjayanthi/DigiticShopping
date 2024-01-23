import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbarComponent } from './endbar.component';

describe('EndbarComponent', () => {
  let component: EndbarComponent;
  let fixture: ComponentFixture<EndbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndbarComponent]
    });
    fixture = TestBed.createComponent(EndbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
