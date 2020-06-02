import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassificatorComponent } from './image-classificator.component';

describe('ImageClassificatorComponent', () => {
  let component: ImageClassificatorComponent;
  let fixture: ComponentFixture<ImageClassificatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassificatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassificatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
