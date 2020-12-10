import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipePageComponent } from './edit-recipe-page.component';

describe('EditRecipePageComponent', () => {
  let component: EditRecipePageComponent;
  let fixture: ComponentFixture<EditRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecipePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
