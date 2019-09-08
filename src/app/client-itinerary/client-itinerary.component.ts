import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { StringifyOptions } from 'querystring';
import {AmazingTimePickerService} from 'amazing-time-picker';

export interface eventValue {
  event: string;
  eventStartTimeDate: string;
  eventEndTimeDate: string;
  
}

const ELEMENT_DATA: eventValue[] = [
   {event: 'Meal Unit-I Cafeteria', eventStartTimeDate: '2019-09-21', eventEndTimeDate:'2019-09-28'},
   {event: 'Meal Unit-II Cafeteria', eventStartTimeDate: '2019-09-07', eventEndTimeDate:'2019-09-08'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];




export interface Account {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-client-itinerary',
  templateUrl: './client-itinerary.component.html',
  styleUrls: ['./client-itinerary.component.css']
})
export class ClientItineraryComponent implements OnInit {

  displayedColumns: string[] = ['event', 'eventStartTimeDate', 'eventEndTimeDate'];
  dataSource = ELEMENT_DATA;


  
  
value='';
value1='';
starttd : Date;
endtd : Date;
 eventValue: any[]=[
  { "event":"",
    "eventStartTimeDate" :"",
    "eventEndTimeDate" :"",
  }
];
Accounts: Account[] = [
  {value: 'steak-0', viewValue: 'CITI'},
  {value: 'pizza-1', viewValue: 'HDFC'},
  {value: 'tacos-2', viewValue: 'Royal Bank'},
  {value: 'tacos-2', viewValue: 'Bank of Canada'},
  {value: 'tacos-2', viewValue: 'others'}
];
isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,private timepicker: AmazingTimePickerService,) {}
  public openDialog(){
    const ref= this.timepicker.open({
       time:'20:00',
       theme:'material-blue'
     });
     ref.afterClose().subscribe((data)=>{
       //alert(data);
     });
 }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      
      'clientName' : [],

      'projectName':[],
      
      'arrivalDate' :[],
      
      'departureDate':[],
      'agenda':[],
       'account':[],
      
      'event':[],
       'eventStartTimeDate':[],
      'eventEndTimeDate':[],
       'viewEvents':[],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  

  getValues(event)
{
 this.starttd=event.target.value;
 console.log(this.starttd);
// alert(event.target.value);
}
getValues1(event)
{
 this.endtd=event.target.value;
 console.log(this.endtd);
// alert(event.target.value);
}




  combined : string;
  result:string;
  onClick(event,result)
  {
    
   event.stopPropagation();
    event.preventDefault();
    //alert(event.target.innerHTML);
    this.value1=result+" "+event.target.innerHTML;
    console.log("Value in child"+this.value1);
    //this.combined = this.value + " " +this.value1;
    //console.log(this.combined);
    
     
            
    
    // let value=event.target.innerHTML;
    // console.log(value);
  }
  click(event)
  {
     alert(event.target.innerHTML);
    
  }
  buttonEvent(){
   
    alert("in button");
    console.log(this.starttd);
    this.eventValue.push({ "event" : this.value1, "eventStartTimeDate" : this.starttd,  "eventEndTimeDate":this.endtd});
  }
  OnInsertClient(){
    alert("submit clicked");
    console.log("Hello");
  }
 
}
