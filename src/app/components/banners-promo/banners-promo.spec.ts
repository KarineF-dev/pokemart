import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannersPromo } from './banners-promo';

describe('BannersPromo', () => {
  let component: BannersPromo;
  let fixture: ComponentFixture<BannersPromo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersPromo],
    }).compileComponents();

    fixture = TestBed.createComponent(BannersPromo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
