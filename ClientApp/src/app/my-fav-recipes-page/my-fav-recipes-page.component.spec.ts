import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavRecipesPageComponent } from './my-fav-recipes-page.component';

describe('MyFavRecipesPageComponent', () => {
  let component: MyFavRecipesPageComponent;
  let fixture: ComponentFixture<MyFavRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavRecipesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
