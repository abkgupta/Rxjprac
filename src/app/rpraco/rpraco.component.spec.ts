import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpracoComponent } from './rpraco.component';

describe('RpracoComponent', () => {
  let component: RpracoComponent;
  let fixture: ComponentFixture<RpracoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpracoComponent]
    });
    fixture = TestBed.createComponent(RpracoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
