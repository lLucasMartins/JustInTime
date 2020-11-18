import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditaTarefaPage } from './edita-tarefa.page';

describe('EditaTarefaPage', () => {
  let component: EditaTarefaPage;
  let fixture: ComponentFixture<EditaTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTarefaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditaTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
