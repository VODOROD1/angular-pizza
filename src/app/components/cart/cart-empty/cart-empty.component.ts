import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import cartEmptyImg from '../../../../assets/img/empty-cart.png';

@Component({
  selector: 'app-cart-empty',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart-empty.component.html',
  styleUrl: './cart-empty.component.scss'
})
export class CartEmptyComponent {

}
