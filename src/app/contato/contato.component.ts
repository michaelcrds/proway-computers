import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from '../flash-messages.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome:["",[
      Validators.required
    ]],
    assunto:["", [
      Validators.required
    ]],
    telefone:["", [
      Validators.required,
      Validators.minLength(11)
    ]],
    email:["", [
      Validators.required,
      Validators.email
    ]],
    mensagem:["", [
      Validators.required
    ]]
  })

  constructor(
    private fb : FormBuilder,
    private flashMessage : FlashMessagesService
  ){}

  sendForm(){
    this.flashMessage.notificar('Mensagem enviada!')
    this.formContato.reset()
  }
}
