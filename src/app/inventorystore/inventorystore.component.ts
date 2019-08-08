import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';


@Component({
  selector: 'app-inventorystore',
  templateUrl: './inventorystore.component.html',
  styleUrls: ['./inventorystore.component.css']
})
export class InventorystoreComponent implements OnInit {

  inventoryForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.inventoryForm = this.formBuilder.group({
      productName: ['' , Validators.required],
      category: ['', Validators.required],
      description: [''],
      availableUnits: ['', Validators.pattern('[0-9]*')],
      unitprice: [''],
      Country: [''],
      state: ['']
    });
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    f.reset();
  }

  addInventory() {
    console.log('inventory store value', this.inventoryForm.value);
  }

}
