import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDataFormComponent } from './recipe-data-form.component';

describe('RecipeDataFormComponent', () => {
  let component: RecipeDataFormComponent;
  let fixture: ComponentFixture<RecipeDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
