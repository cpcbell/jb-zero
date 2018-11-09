import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivPostListComponent } from './div-post-list.component';

describe('DivPostListComponent', () => {
  let component: DivPostListComponent;
  let fixture: ComponentFixture<DivPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
