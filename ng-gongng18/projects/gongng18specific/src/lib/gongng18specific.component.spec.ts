import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gongng18specificComponent } from './gongng18specific.component';

describe('Gongng18specificComponent', () => {
  let component: Gongng18specificComponent;
  let fixture: ComponentFixture<Gongng18specificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gongng18specificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gongng18specificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
