import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public titulo: string = "Cursos Realizados";
  public cursos: Array<Curso> = [];
  constructor() {
    this.cursos = [
      new Curso('Master en Javascript','13-09-2022','Victor Robles'),
      new Curso('Master en Javascript','13-09-2022','Victor Robles'),
      new Curso('Master en Javascript','13-09-2022','Victor Robles')
      ];
    }

  ngOnInit(): void {
  }

}
