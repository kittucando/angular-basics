import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLevelProvider1Component } from './class-level-provider1.component';

describe('ClassLevelProvider1Component', () => {
  let component: ClassLevelProvider1Component;
  let fixture: ComponentFixture<ClassLevelProvider1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassLevelProvider1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelProvider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
