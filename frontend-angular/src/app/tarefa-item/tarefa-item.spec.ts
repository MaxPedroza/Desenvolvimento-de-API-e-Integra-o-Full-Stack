import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaItem } from './tarefa-item';

describe('TarefaItem', () => {
  let component: TarefaItem;
  let fixture: ComponentFixture<TarefaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
