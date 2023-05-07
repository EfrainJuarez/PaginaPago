import { Component, OnInit } from '@angular/core';
import { parse } from 'date-fns';

@Component({
  selector: 'app-credit-car',
  templateUrl: './credit-car.component.html',
  styleUrls: ['./credit-car.component.css'],
})
export class CreditCarComponent implements OnInit {
  name: string = 'Pancho Juarez';
  card: string = '0123 4567 8910 1112';
  securityCode = '';
  expiration: string = '01/23';
  fechaExpiracion: string = '';

  //Metodo para mandar los datos a la tarjeta
  onInputChange(event: Event, input: string) {
    const inputElement = event.target as HTMLInputElement;
    switch (input) {
      case 'inputName':
        this.name = inputElement.value;
        if (inputElement.value == '') {
          this.name = 'Pancho Juarez';
        }

        break;
      case 'inputCardNum':
        this.card = inputElement.value.replace(/(.{4})/g, '$1 ');
        this.validarCadena(this.card);
        if (inputElement.value == '') {
          this.card = '0123 4567 8910 1112';
        }
        break;

      case 'inputExpiration':
        this.expiration = inputElement.value;
        if (inputElement.value == '') {
          this.expiration = '01/23';
        }

        break;
      case 'inputSecurity':
        this.securityCode = inputElement.value;
        break;
    }
  }
  //validar el tamaño de la cadena ingresada
  tamanioEntrada(event: any, digitos: number) {
    const inputElement = event.target as HTMLInputElement;
    const valueWithoutSpaces = inputElement.value.replace(/\s/g, '');
    console.log(valueWithoutSpaces);
    console.log(valueWithoutSpaces.length);

    if (valueWithoutSpaces.length > digitos) {
      event.preventDefault();
    }
  }

  //validamos la longitud y que no contenga letras el numero de tarjeta
  validarCadena(cadena: string): boolean {
    // Eliminar los espacios en blanco de la cadena
    const cadenaSinEspacios = cadena.replace(/\s+/g, '');
    if (!/^[0-9 ]+$/.test(cadenaSinEspacios)) {
      console.log('tengo letras');

      return false;
    }
    console.log('toy bien');
    return true;
  }
  //validamos que solo se puedan ingresar numeros

  validarNumeros(event: KeyboardEvent): void {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  //Validamos que solo se pueda ingresar texto
  validarLetras(event: KeyboardEvent) {
    const pattern = /[a-zA-Z ]/;
    const inputChar = String.fromCharCode(event.keyCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  //agregar el slash automatico en la fecha
  agregarSlash(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const charCode = event.which || event.keyCode;
    const currentValue = target.value;

    // Only allow digits and the slash character
    if (charCode !== 8 && charCode !== 46 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return;
    }

    // Automatically add the slash after the second digit
    if (currentValue.length === 2 && charCode !== 8 && charCode !== 46) {
      target.value = `${currentValue}/`;
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
