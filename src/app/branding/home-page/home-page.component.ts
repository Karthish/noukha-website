import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let items = document.querySelectorAll('.carousel .carousel-item')

    // items.forEach((el) => {
    //     const minPerSlide = 3
    //     let next = el.nextElementSibling
    //     for (var i=1; i<minPerSlide; i++) {
    //         if (!next) {
    //             // wrap carousel by using first child
    //           next = items[0]
    //         }
    //         let cloneChild = next.cloneNode(true)
    //         el.appendChild(cloneChild.childNodes[0])
    //         next = next.nextElementSibling
    //     }
    //   })

    

  }

  scroll(el: any) {
   let target =  document.getElementById(el);
    console.log('target',target);
    target!.scrollIntoView({behavior: 'smooth'});
  }


}
