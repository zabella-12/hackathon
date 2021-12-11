import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtacadaoExpressListaDropdownPage } from './atacadao-express-lista-dropdown.page';

describe('AtacadaoExpressListaDropdownPage', () => {
  let component: AtacadaoExpressListaDropdownPage;
  let fixture: ComponentFixture<AtacadaoExpressListaDropdownPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtacadaoExpressListaDropdownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtacadaoExpressListaDropdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
