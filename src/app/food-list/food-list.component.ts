import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foodList: Array<any> = [{
    name: 'apple',
    calories: 240,
    image: '',
    quantity: 100,
  }];
  newFoodArray: Array<any> = [];
  searchItem: string = '';
  name: string = '';
  calories: number = 0;
  image: string = '';
  quantity: number = 1;
  quantityAdded: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addFood() {
    let addedFood:any = {};
    var valueArr = this.foodList.map(function(item){ return item.name });
    var isDuplicate = valueArr.some(function(item, idx){ 
        return valueArr.indexOf(item) != idx 
    });
    
    if (this.name && this.calories && this.image && !isDuplicate) {
      addedFood.name = this.name;
      addedFood.calories = this.calories;
      addedFood.image = this.image;
      addedFood.quantity = this.quantity;
      addedFood.image = this.image;
      this.foodList.push(addedFood);
    }
  }

  addQuantity(name: any) {
    this.foodList.map((item: any) => {
      if(item.name === name) {
        item.quantity = Number(this.quantityAdded) + item.quantity;
      }
    })
  }

  searchFood() {
    let tempArray = this.foodList;
    let filterdeArray;
    this.foodList = tempArray;
    if(this.searchItem !== '') {
      filterdeArray = this.foodList.filter(item => item.name === this.searchItem);
      this.foodList = filterdeArray;
    }
  }
}
