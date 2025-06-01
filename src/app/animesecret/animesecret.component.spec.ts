import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesecretComponent } from './animesecret.component';

describe('AnimesecretComponent', () => {
  let component: AnimesecretComponent;
  let fixture: ComponentFixture<AnimesecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimesecretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
