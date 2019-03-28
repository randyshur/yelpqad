import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { YelpService } from '../yelp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() dataz: any[];
  searchForm: FormGroup;
  returnUrl: string;
  price: string;
  title: string;
  yelpdata: object;
  prices = ['', '$','$$','$$$','$$$$'];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private yelpService: YelpService,
){}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      price: [''],
      location: ['', Validators.required]
  });

}

  onSubmit() {
    this.price = this.searchForm.controls.price.value

   this.yelpService.getData(this.searchForm.controls.price.value, this.searchForm.controls.location.value)
   .subscribe(dataz => this.dataz = dataz);

   this.yelpdata = this.dataz;

  }

}
