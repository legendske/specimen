import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSpecimenComponent } from './add.specimen.component';

describe('AddSpecimenComponent', () => {
  let component: AddSpecimenComponent;
  let fixture: ComponentFixture<AddSpecimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecimenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
