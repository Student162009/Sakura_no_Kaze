import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime13Component } from './anime13.component';

describe('Anime13Component', () => {
  let component: Anime13Component;
  let fixture: ComponentFixture<Anime13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
