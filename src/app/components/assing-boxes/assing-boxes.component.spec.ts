import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingBoxesComponent } from './assing-boxes.component';

describe('AssingBoxesComponent', () => {
  let component: AssingBoxesComponent;
  let fixture: ComponentFixture<AssingBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssingBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssingBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
