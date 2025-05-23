import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime9Component } from './anime9.component';

describe('Anime9Component', () => {
  let component: Anime9Component;
  let fixture: ComponentFixture<Anime9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
