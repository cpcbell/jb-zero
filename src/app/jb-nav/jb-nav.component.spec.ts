
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { JbNavComponent } from './jb-nav.component';

describe('JbNavComponent', () => {
  let component: JbNavComponent;
  let fixture: ComponentFixture<JbNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [JbNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
