import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  // slide(); 
  }

}
// function slide() {
//   $(document).ready(function () {
//     $('.navbar-light .dmenu').hover(function () {
//             $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
//         }, function () {
//             $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
//         });
//     })
// }

