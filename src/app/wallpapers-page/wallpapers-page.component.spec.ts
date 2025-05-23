import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpapersPageComponent } from './wallpapers-page.component';

describe('WallpapersPageComponent', () => {
  let component: WallpapersPageComponent;
  let fixture: ComponentFixture<WallpapersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallpapersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallpapersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
