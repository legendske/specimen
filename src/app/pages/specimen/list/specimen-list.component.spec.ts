import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecimenListComponent } from './specimen-list.component';

describe('SpecimenListComponent', () => {
  let component: SpecimenListComponent;
  let fixture: ComponentFixture<SpecimenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecimenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecimenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
