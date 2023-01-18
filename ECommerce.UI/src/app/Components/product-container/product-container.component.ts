import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  view:'grid' | 'list' = 'grid';
  sortby : 'default' | 'htl' | 'lth' ='default';
  constructor() { }

  ngOnInit(): void {
  }

}
