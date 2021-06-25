import { Input, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input()
  showModal!: boolean;

  @Input() itemData: any;
  item: any;
  item2: any;
  newCreate: string = '';
  ingredietList: any = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.showModal) {
      this.showModal = changes.showModal.currentValue;
      // console.log(this.showModal);
    }
    if (changes.itemData) {
      this.item = changes.itemData.currentValue;
      if (this.item) {
        this.item2 = this.item.drinks[0];
        this.showModal = true;
      }
    }
  }

  closeModelHandler() {
    this.showModal = false;
    console.log(this.showModal);
  }
}
