import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorProductComponent } from './explor-product.component';

describe('ExplorProductComponent', () => {
  let component: ExplorProductComponent;
  let fixture: ComponentFixture<ExplorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
