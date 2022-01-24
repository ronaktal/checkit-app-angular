import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Detailpage } from './detail.page';

describe('Detailpage', () => {
  let component: Detailpage;
  let fixture: ComponentFixture<Detailpage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Detailpage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Detailpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
