import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime11Component } from './anime11.component';

describe('Anime11Component', () => {
  let component: Anime11Component;
  let fixture: ComponentFixture<Anime11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
