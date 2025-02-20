import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-num',
  standalone: false,
  templateUrl: './num.component.html',
  styleUrl: './num.component.css'
})
export class NumComponent implements OnInit,OnChanges{

  @Input()
  values:number[]=[]
  total:number=0

  @Input()
  latest:number = 0

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info("SIMPLE CHANGES:",changes)
    this.total = changes['values'].currentValue.reduce((acc:number,v:number) => acc+v)
  }


  
}
