import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaJuegoComponent } from './sistema-juego.component';

describe('SistemaJuegoComponent', () => {
  let component: SistemaJuegoComponent;
  let fixture: ComponentFixture<SistemaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
