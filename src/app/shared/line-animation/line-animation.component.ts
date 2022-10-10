import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-line-animation',
  templateUrl: './line-animation.component.html',
  styleUrls: ['./line-animation.component.scss']
})
export class LineAnimationComponent implements OnInit {

  options1: AnimationOptions = {    
    path: './../../../assets/images/Lottie_animation/dot_line.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
