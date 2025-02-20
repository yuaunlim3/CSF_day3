import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LOTTIE } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //animation index
  index: number = 0
  share=false

  ngOnInit(): void {
    const idx = localStorage.getItem('idx')
    /*
    if(idx != null){
      this.index = parseInt(idx)
    }
      */
    console.info(idx)
    this.index = parseInt(idx || '0')

    this.options = {
      path: LOTTIE[this.index]
    }

    console.info(">>>>share:",navigator.share)
    this.share = !!navigator.share
  }

  //Lottie file options
  options: AnimationOptions = {
    path: LOTTIE[this.index]
  }

  width = '45vw'



  shareContent(){
    navigator.share({
      title:'FUN ANGULAR APP',
      text:'CHECKOUT MY FIRST PWA',
      url: window.location.origin
    })
  }

  nextAnimation() {
    this.index = (this.index + 1) % LOTTIE.length
    this.options = { path: LOTTIE[this.index] }

    //save to localStorage
    localStorage.setItem('idx', `${this.index}`)
    localStorage.setItem('updated', (new Date()).toISOString())
  }

}
