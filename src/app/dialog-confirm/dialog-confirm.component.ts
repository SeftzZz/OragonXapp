import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {
  msg : string = ""
  code : string = ""
  item_code : string = ""
  confirm : string = ""

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.msg = this.data.msg
  }

  buythis(){
    this.confirm = "OK"
  }

  cancel(){
    this.confirm = "Cancel"
  }

}
