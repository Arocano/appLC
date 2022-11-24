import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'lc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[] 
  columns:string[]=[]
@ContentChildren(MatColumnDef, { descendants: true }) columnDef!: QueryList<MatColumnDef>;
@ViewChild(MatTable, { static: true }) table!: MatTable<any>;	

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['metaDataColumns']){
      this.columns=this.metaDataColumns.map((x)=>x.field)
    }
  }
  ngOnAfterContentInit(){
    if(!this.columnDef){return}
    this.columnDef.forEach(columnDef => {
      this.columns.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    })
  }
}
