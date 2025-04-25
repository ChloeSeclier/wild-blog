import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThumbnailComponent } from './article-thumbnail.component';

describe('ArticleThumbnailComponent', () => {
  let component: ArticleThumbnailComponent;
  let fixture: ComponentFixture<ArticleThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleThumbnailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
