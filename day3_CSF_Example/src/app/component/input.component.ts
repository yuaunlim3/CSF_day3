import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  
  private _instanceName = 'abc'
  
  get instanceName():string{
    return this._instanceName
  }

  @Input()
  set instanceName(name:string){
    this._instanceName = name
  }

  
  get value(){
    return this.form.value.num
  }

  set value(val:number){
    this.form.get('num')?.setValue(val)
  }


  
  @Output()
  number = new Subject<number>()


  private fb = inject(FormBuilder)

  protected form!:FormGroup
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        num:this.fb.control<number>(0)
      }
    )
  }

  process(){
    const value = this.form.get('num')?.value
    //const val = this.form.value.num
    console.info(">>>VALUE:",value)

    this.number.next(value)

    this.form.reset()
  }


  getName(){
    return this._instanceName
  }

}
