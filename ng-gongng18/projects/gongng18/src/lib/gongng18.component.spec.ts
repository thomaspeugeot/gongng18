import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gongng18Component } from './gongng18.component';

describe('Gongng18Component', () => {
  let component: Gongng18Component;
  let fixture: ComponentFixture<Gongng18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gongng18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gongng18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
