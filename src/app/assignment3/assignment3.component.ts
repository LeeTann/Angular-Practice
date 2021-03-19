import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  toggle = false
  clickArray = []
  count = 0

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.toggle = !this.toggle
    this.clickArray.push(this.count++)
  }
}
