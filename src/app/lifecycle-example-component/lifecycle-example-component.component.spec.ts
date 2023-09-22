import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExampleComponentComponent } from './lifecycle-example-component.component';

describe('LifecycleExampleComponentComponent', () => {
  let component: LifecycleExampleComponentComponent;
  let fixture: ComponentFixture<LifecycleExampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleExampleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
