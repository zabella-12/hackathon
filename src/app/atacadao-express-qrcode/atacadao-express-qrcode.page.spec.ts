import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtacadaoExpressQrcodePage } from './atacadao-express-qrcode.page';

describe('AtacadaoExpressQrcodePage', () => {
  let component: AtacadaoExpressQrcodePage;
  let fixture: ComponentFixture<AtacadaoExpressQrcodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtacadaoExpressQrcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtacadaoExpressQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
