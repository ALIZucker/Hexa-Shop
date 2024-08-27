import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotenComponent } from './boten.component';

describe('BotenComponent', () => {
  let component: BotenComponent;
  let fixture: ComponentFixture<BotenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
