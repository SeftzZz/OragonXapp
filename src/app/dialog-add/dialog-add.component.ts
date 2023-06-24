import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {
  type : string = ""
  kind : string = ""
  confirm : string = ""

  obj = {
    "type":""
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogAddComponent>) { }

  ngOnInit(): void {
    this.kind = this.data.kind
  }

  closed(){
    this.confirm = 'OK'
    this.obj = {
      "type":this.type
    }
    this.dialogRef.close(this.obj);
  }

}
