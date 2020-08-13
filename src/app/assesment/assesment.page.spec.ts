import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssesmentPage } from './assesment.page';

describe('AssesmentPage', () => {
  let component: AssesmentPage;
  let fixture: ComponentFixture<AssesmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssesmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
