import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  R : CustomerResquest;
  objTown: Town[];
  objTown2: Town;
  townID : any;
  
  @ViewChild('customerForm') f: NgForm | any
  constructor(

  ) {
  this.R=new CustomerResquest()
  this.objTown=[];
  this.objTown2=new Town();
  }
  
  
  ngOnInit() {
  this.R=history.state;
  console.log(this.R )
  this.GetTown();
  }
  
  onSubmitForm()
  {
  console.log(this.f)
  this.R=this.f.value
  this.SetCustomer(this.R);
  }
  
  
  SetCustomer(R:CustomerResquest)
  {
  //R.town_id=this.objTown2.town_id;
  console.log( R.town_id)
  if(R.customer_id>0)
  {
  R.action='update'
  }
  else{
  R.action='insert'
  }
   // service call here

  console.warn(R)
  }
  
  GetTown()
  {
 
  
  }


  resetForm(customerForm:NgForm)
  {
  customerForm.resetForm();
  }
  
  
  
  }





  export class CustomerResquest {
    customer_id!: number;
    customer_name!: string
    father_name!: string
    home_owner!: string
    cinic!: string
    is_active! :boolean
    phone1!: string
    phone2!: string
    address!: string
    emailid!: string
    created_by!: string
    connection_date!: string
    action!: string
    joindate!:string        
    town_id!: string
    town_name!:string
    region_id!:string
    region_name!:string
    urdu_name! :string  
    monthly_fee!:number 
    connection_fee!:number 
    billing_address! :string


    constructor()
    {
    this.town_id='All'
    this.region_id='All'
    this.is_active=true
    }
   
    
}

export class Town {
  town_id!: string
  town_name!: string
  region_id!: number
  region_name!:string

}