import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime10Component } from './anime10.component';

describe('Anime10Component', () => {
  let component: Anime10Component;
  let fixture: ComponentFixture<Anime10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
