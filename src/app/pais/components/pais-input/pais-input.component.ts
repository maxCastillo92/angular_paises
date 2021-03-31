import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: []
})
export class PaisInputComponent implements OnInit  {
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebpunce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  public termino: string = '';

  debounce:Subject<string> = new Subject();

  constructor() { }

  ngOnInit(){
    this.debounce
      .pipe(
        debounceTime(300))
      .subscribe( valor => {
        this.onDebpunce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( ){
    this.debounce.next( this.termino);
  }
}
