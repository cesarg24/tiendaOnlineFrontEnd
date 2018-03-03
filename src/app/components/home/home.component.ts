import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: any[] = [
    {
      "titulo":"Titulo del producto 1",
      "descripcion":"Descripcion del producto xxxx",
      "precio": 100.10,
      "cantidad": 10,
      "descuento": 5,
      "url":"https://ih1.redbubble.net/image.105503772.4267/ra%2Cvneck%2Cx925%2Cheather_grey%2Cfront-c%2C217%2C175%2C210%2C230-bg%2Cf8f8f8.lite-2u13.jpg"
    
    },
    {
      "titulo":"Titulo del producto 2",
      "descripcion":"Descripcion del producto xxxx",
      "precio": 100.10,
      "cantidad": 10,
      "descuento": 5,
      "url":"https://ih1.redbubble.net/image.105503772.4267/ra%2Cvneck%2Cx925%2Cheather_grey%2Cfront-c%2C217%2C175%2C210%2C230-bg%2Cf8f8f8.lite-2u13.jpg"
    
    },
    {
      "titulo":"Titulo del producto 3",
      "descripcion":"Descripcion del producto xxxx",
      "precio": 100.10,
      "cantidad": 10,
      "descuento": 5,
      "url":"https://ih1.redbubble.net/image.105503772.4267/ra%2Cvneck%2Cx925%2Cheather_grey%2Cfront-c%2C217%2C175%2C210%2C230-bg%2Cf8f8f8.lite-2u13.jpg"
    
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
