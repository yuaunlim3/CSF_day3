import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { InputComponent } from './component/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  //FIND NUMCOMPONENT
  @ViewChild("abc")
  numInput!:InputComponent

  @ViewChild("xyz")
  numInput2!:InputComponent

  @ViewChildren(InputComponent)
  numInputs!: QueryList<InputComponent>;
  

  nums:number[] = [1,2,3,4,5]

  newNum = 0

  

  ngAfterViewInit(): void {
    console.info(">>>>",this.numInput)
    console.info(">>>>",this.numInput2)
  }

  addNum($event:number){
    this.newNum = $event
    /*
    this.nums.unshift($event)
    const newNums = []
    for(let v of this.nums)
      newNums.push(v)


    this.nums = newNums
    */

    //Similar to the top 
    this.nums = [$event,...this.nums]
  }

  square(){
    console.info("SQUARE")
    let currentValue = this.numInput.value

    console.info("GET NAME:",this.numInput.getName)

    this.numInput.value = currentValue * currentValue

    this.numInput.process()


  }

  negate(){
    console.info("NEGATE")

    let currentValue = this.numInput.value

    this.numInput.value = - currentValue
    this.numInput.process()
  }

}
