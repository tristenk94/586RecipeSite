import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipePageComponent } from './new-recipe-page.component';

describe('NewRecipePageComponent', () => {
  let component: NewRecipePageComponent;
  let fixture: ComponentFixture<NewRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecipePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
