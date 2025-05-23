import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime14Component } from './anime14.component';

describe('Anime14Component', () => {
  let component: Anime14Component;
  let fixture: ComponentFixture<Anime14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
