import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime8Component } from './anime8.component';

describe('Anime8Component', () => {
  let component: Anime8Component;
  let fixture: ComponentFixture<Anime8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anime8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
