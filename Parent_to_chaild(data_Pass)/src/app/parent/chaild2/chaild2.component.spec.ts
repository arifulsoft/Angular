import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaild2Component } from './chaild2.component';

describe('Chaild2Component', () => {
  let component: Chaild2Component;
  let fixture: ComponentFixture<Chaild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chaild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chaild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
