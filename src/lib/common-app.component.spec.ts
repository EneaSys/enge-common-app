import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAppComponent } from './common-app.component';

describe('CommonAppComponent', () => {
  let component: CommonAppComponent;
  let fixture: ComponentFixture<CommonAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
