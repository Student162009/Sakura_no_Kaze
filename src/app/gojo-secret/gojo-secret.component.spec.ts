import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GojoSecretComponent } from './gojo-secret.component';

describe('GojoSecretComponent', () => {
  let component: GojoSecretComponent;
  let fixture: ComponentFixture<GojoSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GojoSecretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GojoSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
