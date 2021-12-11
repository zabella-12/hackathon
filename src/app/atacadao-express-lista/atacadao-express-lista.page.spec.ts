import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtacadaoExpressListaPage } from './atacadao-express-lista.page';

describe('AtacadaoExpressListaPage', () => {
  let component: AtacadaoExpressListaPage;
  let fixture: ComponentFixture<AtacadaoExpressListaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtacadaoExpressListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtacadaoExpressListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
