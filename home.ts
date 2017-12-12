import { Component } from '@angular/core';
import { NavController, AlertController,} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	number;
	carno;
	millin;
	millout;
  t;
  paid=false;
  cost=40;
  number2;
  c;
  ct;
  tm;
  mt;
  n=40;
  public press: number = 0; 
  constructor(public navCtrl: NavController, private alertCtrl: AlertController ) {
  }
 logForm(form)
 {
   console.log(form.value);
 }
  test(number)
  { 
    this.press++;
   if(this.press==1)
    {
    this.number=number;
    console.log(this.number);
    this.millin=new Date().getTime()
  	let alert = this.alertCtrl.create({
  	    title: 'Success!',
  	    subTitle: 'Car has been successfully permitted for parking.!',
  	    buttons: ['Ok']
  	  });
  	  alert.present();
     }
  }
  
  doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      
      setTimeout(() => {
        console.log('Async operation has ended');
        this.paid=true;
        refresher.complete();
      }, 2000);
    }
  
    test2(number2)
    {
   if(this.number2==this.number)
    {
      this.carno=number2;
     console.log(this.carno);
    this.millout=new Date().getTime()
    this.t=(this.millout-this.millin);
    this.t= Math.floor(this.t/60000);
    this.mt=Math.floor(this.t/30);
    this.tm=this.t%30;
    if(this.tm>0)
      this.c=((this.mt*20)+20);
    else
      this.c=this.mt*20;
    }
    
}
}

