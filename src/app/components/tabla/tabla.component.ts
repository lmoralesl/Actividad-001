import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  PrecioMaximo:any
  PrecioMinimo:any
  categoria:any
  inputId:any
  realId:any

  videojuegos = [
    {
      id: "j01",
      nombre: 'The Legend of Zelda: Breath of the Wild',
      precio: 80,
      categoria:"aventura",
      url: "../../../assets/images/zelda.png"
    },
    {
      id: "j02",
      nombre: 'Red Dead Redemption 2',
      precio: 70,
      categoria:"accion",
      url: "../../../assets/images/redead.png"

    },
    {
      id: "j03",
      nombre: 'Super Mario Odyssey',
      precio: 45,
      categoria:"aventura",
      url: "../../../assets/images/mario-odissey.png"
    },
    {
      id: "j04",
      nombre: 'God of War',
      precio: 45,
      categoria:"accion",
      url: "../../../assets/images/gow.png"
    },
    {
      id: "j05",
      nombre: 'Animal Crossing: New Horizons ',
      precio: 68,
      categoria:"simulacion",
      url: "../../../assets/images/animal.png"
    },
    {
      id: "j06",
      nombre: 'The Witcher 3: Wild Hunt ',
      precio: 40,
      categoria:"RPG",
      url: "../../../assets/images/witcher.png"
    },
    {
      id: "j07",
      nombre: 'Super Smash Bros. Ultimate',
      precio: 76,
      categoria:"lucha",
      url: "../../../assets/images/smash.png"
    },
    {
      id: "j08",
      nombre: 'Grand Theft Auto V',
      precio: 34,
      categoria:"lucha",
      url: "../../../assets/images/grandthef.png"
    },
    {
      id: "j09",
      nombre: "Spider-Man",
      precio: 38,
      categoria:"aventura",
      url: "../../../assets/images/spider-man.png"
    },
    {
      id: "j10",
      nombre: 'Life is Strange',
      precio: 42,
      categoria:"drama",
      url: "../../../assets/images/lifeisstrange.png"
    },
  ]

  filtro = 'seleccione'


  ///////////////////////
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  ////////////////////

  //////////// Buscar //////////////

  buscarId(){
    this.realId=this.inputId
  }

}
