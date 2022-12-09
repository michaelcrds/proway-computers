import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class FlashMessagesService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notificar(message: string) {
    this.snackBar.open(message, 'OK',{
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    })
  }
}
