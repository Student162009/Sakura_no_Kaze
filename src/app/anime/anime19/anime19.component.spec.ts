import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime19Component } from './anime19.component';

describe('Anime19Component', () => {
  let component: Anime19Component;
  let fixture: ComponentFixture<Anime19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
