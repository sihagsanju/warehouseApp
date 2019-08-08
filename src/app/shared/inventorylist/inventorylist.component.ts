import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventorylistComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit() {
     console.log('*******', this.product);
  }

}
