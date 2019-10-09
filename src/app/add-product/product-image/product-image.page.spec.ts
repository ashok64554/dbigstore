import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagePage } from './product-image.page';

describe('ProductImagePage', () => {
  let component: ProductImagePage;
  let fixture: ComponentFixture<ProductImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
