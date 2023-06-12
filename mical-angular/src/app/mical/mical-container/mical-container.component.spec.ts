import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicalContainerComponent } from './mical-container.component';

describe('MicalContainerComponent', () => {
  let component: MicalContainerComponent;
  let fixture: ComponentFixture<MicalContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicalContainerComponent]
    });
    fixture = TestBed.createComponent(MicalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
