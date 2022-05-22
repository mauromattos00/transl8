import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as appActions from './store/actions';
import { AppState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(appActions.loadLanguages());
    this.store.dispatch(appActions.TranslateText({ query: 'Hello World!', target: 'pt' }));
    this.store.dispatch(appActions.AddToHistory({ term: 'Hello World' }));
    this.store.dispatch(appActions.ClearHistory());
  }
}
