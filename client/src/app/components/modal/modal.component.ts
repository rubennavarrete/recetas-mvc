import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title = '';
  public show = false;

  showModel(){
    this.show = true;
  }

  hideModel(){
    this.show = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
