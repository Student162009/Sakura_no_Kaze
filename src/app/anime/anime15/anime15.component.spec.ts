import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime15Component } from './anime15.component';

describe('Anime15Component', () => {
  let component: Anime15Component;
  let fixture: ComponentFixture<Anime15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
