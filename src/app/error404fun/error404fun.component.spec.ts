import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404funComponent } from './error404fun.component';

describe('Error404funComponent', () => {
  let component: Error404funComponent;
  let fixture: ComponentFixture<Error404funComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404funComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error404funComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
