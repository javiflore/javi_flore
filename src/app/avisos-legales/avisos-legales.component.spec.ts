import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosLegalesComponent } from './avisos-legales.component';

describe('AvisosLegalesComponent', () => {
  let component: AvisosLegalesComponent;
  let fixture: ComponentFixture<AvisosLegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisosLegalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
