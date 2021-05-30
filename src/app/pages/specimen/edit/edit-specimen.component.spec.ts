import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSpecimenComponent } from './edit-specimen.component';

describe('EditSpecimenComponent', () => {
  let component: EditSpecimenComponent;
  let fixture: ComponentFixture<EditSpecimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpecimenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpecimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
