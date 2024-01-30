import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnictureComponent } from './furnicture.component';

describe('FurnictureComponent', () => {
  let component: FurnictureComponent;
  let fixture: ComponentFixture<FurnictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnictureComponent]
    });
    fixture = TestBed.createComponent(FurnictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
