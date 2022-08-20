import { Component, OnInit,  HostListener,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 85;
  }

  @Output() menuArea = new EventEmitter<string>();

  goTo(value: any) {
    this.menuArea.emit(value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
