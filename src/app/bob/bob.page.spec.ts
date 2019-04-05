import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobPage } from './bob.page';

describe('BobPage', () => {
  let component: BobPage;
  let fixture: ComponentFixture<BobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
