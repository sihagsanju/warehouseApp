import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../shared/services/inventory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {

    this.inventoryService.getInventoryData().subscribe((resp: any) => {
      console.log('Inventiry  response', resp);
      this.products = resp;
    });
  }

}
