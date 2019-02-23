import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit
{
  constructor(private dialog: MatDialog) { }

  ngOnInit() 
  {
  }

  onSendEmailClick()
  {
    this.dialog.open(ForgotPasswordDialogComponent);
  }
}
