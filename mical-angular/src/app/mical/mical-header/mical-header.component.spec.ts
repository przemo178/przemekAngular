import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicalHeaderComponent } from './mical-header.component';

describe('MicalHeaderComponent', () => {
  let component: MicalHeaderComponent;
  let fixture: ComponentFixture<MicalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicalHeaderComponent]
    });
    fixture = TestBed.createComponent(MicalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
