import { Component } from '@angular/core';

import { HealthPage } from '../health/health';
import { FittnessPage } from '../fittness/fittness';
import { HelpPage } from '../help/help';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HealthPage;
  tab2Root = FittnessPage;
  tab3Root = HelpPage;
  
  constructor() {

  }
}
