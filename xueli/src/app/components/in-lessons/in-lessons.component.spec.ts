import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InLessonsComponent } from './in-lessons.component';

describe('InLessonsComponent', () => {
  let component: InLessonsComponent;
  let fixture: ComponentFixture<InLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
