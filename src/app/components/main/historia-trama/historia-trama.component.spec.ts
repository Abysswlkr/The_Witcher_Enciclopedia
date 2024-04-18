import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaTramaComponent } from './historia-trama.component';

describe('HistoriaTramaComponent', () => {
  let component: HistoriaTramaComponent;
  let fixture: ComponentFixture<HistoriaTramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaTramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaTramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
