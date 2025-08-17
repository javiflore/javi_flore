import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalGameComponent } from './continental-game.component';

describe('ContinentalGameComponent', () => {
  let component: ContinentalGameComponent;
  let fixture: ComponentFixture<ContinentalGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentalGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentalGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
