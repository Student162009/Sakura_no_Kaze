import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime0Component } from './anime0.component';

describe('Anime0Component', () => {
  let component: Anime0Component;
  let fixture: ComponentFixture<Anime0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
