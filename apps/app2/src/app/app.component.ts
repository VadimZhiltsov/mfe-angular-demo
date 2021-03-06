import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';

interface IAppState {
  value: number
}

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  yoshiUrl = assetUrl("yoshi.png");

  @select((state : IAppState )=> { 
    return state.value
  }) value$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) {}
  
  onClick() {
    this.ngRedux.dispatch({ type: 'INC' });
  }
}
