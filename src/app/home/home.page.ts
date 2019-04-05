import { Component,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
      @ViewChild(IonSlides) slides: IonSlides;
    constructor(){
   let  array = [{ name: "Hardik", city: null, job: null },
  { name: "John", city: "Ahmedabad", job: "IT" },
  { name: "Margie", city: "Mumbai", job: "CA" },
  { name: "Creature", city: "Banglore", job: null },
  { name: "Smooth", city: null, job: null }];
  
 let filter = array.filter(i =>
      i["job"] != null ? i.job.toLowerCase().indexOf('ca') != -1 : false ||
      i["city"] != null ? i.city.toLowerCase().indexOf('ahmedabad') != -1 : false
    )
    
    
    console.log(filter);
    console.trace();
    }

     ira(a){
console.log('%c'+a, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
}

next(slide, index) {
    slide.slideTo(index)
}

next2(index) {
 console.log( this.slides);
     this.slides.slideTo(index)
}

}
