import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-homepg-animation',
  templateUrl: './homepg-animation.component.html',
  styleUrls: ['./homepg-animation.component.scss']
})
export class HomepgAnimationComponent implements OnInit {

  options: AnimationOptions = {    
    path: './../../../assets/images/Lottie_animation/home.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
