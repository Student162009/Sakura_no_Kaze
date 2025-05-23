import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime17Component } from './anime17.component';

describe('Anime17Component', () => {
  let component: Anime17Component;
  let fixture: ComponentFixture<Anime17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
