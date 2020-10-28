import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterTemplatesItemComponent } from './poster-templates-item.component';

describe('PosterTemplatesItemComponent', () => {
  let component: PosterTemplatesItemComponent;
  let fixture: ComponentFixture<PosterTemplatesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterTemplatesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterTemplatesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
