import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime18Component } from './anime18.component';

describe('Anime18Component', () => {
  let component: Anime18Component;
  let fixture: ComponentFixture<Anime18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
