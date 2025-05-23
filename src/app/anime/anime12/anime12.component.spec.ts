import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime12Component } from './anime12.component';

describe('Anime12Component', () => {
  let component: Anime12Component;
  let fixture: ComponentFixture<Anime12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
