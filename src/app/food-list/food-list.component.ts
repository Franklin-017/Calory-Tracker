import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foodList: Array<any> = [];
  newFoodArray: Array<any> = [];
  searchItem: string = '';
  name: string = '';
  calories: number = 0;
  image: string = '';
  quantity: number = 0;
  quantityAdded: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addFood() {
    let addedFood:any = {};
    let valueArr = this.foodList.map(function(item){ return item.name });
    let isDuplicate = valueArr.includes(this.name);
    
    if (this.name && this.calories && this.image && !isDuplicate) {
      addedFood.name = this.name;
      addedFood.calories = this.calories;
      addedFood.image = this.image;
      addedFood.quantity = this.quantity;
      addedFood.image = this.image;
      this.foodList.push(addedFood);
    } else {

    }
  }

  addQuantity(name: any) {
    this.foodList.map((item: any) => {
      if(item.name === name) {
        item.quantity = Number(this.quantityAdded) + item.quantity;
      }
    })
  }

  setQuantity(event: any) {
    this.quantityAdded = event.target.value;
  }
}
