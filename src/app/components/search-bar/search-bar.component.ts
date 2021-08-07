import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.route.navigate(['search', form.value.search]);
  }

}
