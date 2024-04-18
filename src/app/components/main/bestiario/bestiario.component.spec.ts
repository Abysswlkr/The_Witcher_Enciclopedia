import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiarioComponent } from './bestiario.component';

describe('BestiarioComponent', () => {
  let component: BestiarioComponent;
  let fixture: ComponentFixture<BestiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestiarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
