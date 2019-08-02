import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EXPLORE, FIND, TAG_PH, UNSELECTED_PH, USERNAME_PH } from '@app/core/variables/constants';
import { SearchForm } from '@dt/interfaces/instagram';
import { InstagramService } from '@app/core/services/instagram.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchFormGroup: FormGroup;
  searchPlaceholder: string = UNSELECTED_PH;
  buttonName = EXPLORE;
  isUserSearch = false;


  constructor(
    private instaService: InstagramService
  ) {
  }

  ngOnInit(): void {
    this.searchFormGroup = new FormGroup({
      'search': new FormControl(null, [Validators.required, this.invalidSearch])
    });
  }

  onSearchInputChange(): void {
    const value = `${this.searchFormGroup.get('search').value}`.trim();
    if (value === '') {
      this.searchPlaceholder = UNSELECTED_PH;
      this.buttonName = EXPLORE;
      this.isUserSearch = false;
    } else if (value.startsWith('#')) {
      this.searchPlaceholder = TAG_PH;
      this.buttonName = EXPLORE;
      this.isUserSearch = false;

    } else {
      this.searchPlaceholder = USERNAME_PH;
      this.buttonName = FIND;
      this.isUserSearch = true;
    }
  }

  submit(): void {
    const searchValue = `${this.searchFormGroup.get('search').value}`;
    const searchForm: SearchForm = {} as SearchForm;
    searchForm.target = searchValue.trim().replace(/#/g, '');
    searchForm.isUserSearch = this.isUserSearch;
    this.instaService.searchSubmitted.next(searchForm);
    this.searchFormGroup.reset();
    this.searchPlaceholder = UNSELECTED_PH;
  }

  invalidSearch(control: FormControl): { [s: string]: boolean } {
    const value = `${control.value}`.trim();
    if (value === '') {
      return {'Field is empty': true};
    } else if (value.includes(' ')) {
      return {'Invalid value': true};
    } else {
      return null;
    }
  }
}
