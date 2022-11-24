import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metadatacolumn.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lc-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] =[
    {_id:1,name:'Vodka',price:'10.00 $'},
    {_id:2,name:'Vodka',price:'10.00 $'},
    {_id:3,name:'Vodka',price:'10.00 $'},
    {_id:4,name:'Vodka',price:'10.00 $'},
    {_id:5,name:'Vodka',price:'10.00 $'},
    {_id:6,name:'Vodka',price:'10.00 $'},
    {_id:7,name:'Vodka',price:'10.00 $'},
    {_id:8,name:'Vodka',price:'10.00 $'},
    {_id:9,name:'Vodka',price:'10.00 $'},
    {_id:10,name:'Vodka',price:'10.00 $'},
    {_id:11,name:'Vodka',price:'10.00 $'},
    {_id:12,name:'Vodka',price:'10.00 $'},
    {_id:13,name:'Vodka',price:'10.00 $'}, 
  ]
  metaDataColumns:MetaDataColumn[]=[
    {field:"_id",title:"ID"},
    {field:"name",title:"Producto"},
    {field:"price",title:"Precio"},
  ]
  data:any[]=[]
  totalRecords=this.data.length
  
  constructor() { 
    this.loadProducts()
  }
  ngOnInit(): void {
    
  }
  loadProducts(){
    this.data=this.records
    this.totalRecords=this.records.length
    this.changePage(0)
  }
  changePage(page:number){
    const pageSize=environment.PAGE_SIZE;
    const skip=pageSize*page;
    this.data=this.records.slice(skip,skip+pageSize);
  }
  openForm(){

  }
  delete(id:any){

  }

}
