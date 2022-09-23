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
      new Curso('Master en Javascript: Aprender JS, JQuery, Angular, NodeJS','07-09-2022','Victor Robles'),
      new Curso('PostgreSQL. Curso completo de PostgreSQL','En curso','Redait Media'),
      new Curso('Spring Framework 5 & Spring Boot 2 desde 0 a experto 2022','En curso','Andrés José Guzmán'),
      new Curso('Angular Framework Desde Cero','En curso','Yirsis Serrano')
      ];
      
    }

  ngOnInit(): void {
  }

}
