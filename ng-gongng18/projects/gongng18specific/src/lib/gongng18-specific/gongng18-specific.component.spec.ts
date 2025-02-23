import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gongng18SpecificComponent } from './gongng18-specific.component';

describe('Gongng18SpecificComponent', () => {
  let component: Gongng18SpecificComponent;
  let fixture: ComponentFixture<Gongng18SpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gongng18SpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gongng18SpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
