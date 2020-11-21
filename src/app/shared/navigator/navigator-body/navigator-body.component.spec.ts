import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorBodyComponent } from './navigator-body.component';

describe('NavigatorBodyComponent', () => {
  let component: NavigatorBodyComponent;
  let fixture: ComponentFixture<NavigatorBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
