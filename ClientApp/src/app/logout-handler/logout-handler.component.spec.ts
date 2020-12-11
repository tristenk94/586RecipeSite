import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutHandlerComponent } from './logout-handler.component';

describe('LogoutHandlerComponent', () => {
  let component: LogoutHandlerComponent;
  let fixture: ComponentFixture<LogoutHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
