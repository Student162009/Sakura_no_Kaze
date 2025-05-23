import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime16Component } from './anime16.component';

describe('Anime16Component', () => {
  let component: Anime16Component;
  let fixture: ComponentFixture<Anime16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
