import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteDisenoComponent } from './arte-diseno.component';

describe('ArteDisenoComponent', () => {
  let component: ArteDisenoComponent;
  let fixture: ComponentFixture<ArteDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArteDisenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArteDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
