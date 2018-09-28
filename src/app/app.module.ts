import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HealthPage } from '../pages/health/health';
import { FittnessPage } from '../pages/fittness/fittness';
import { HelpPage } from '../pages/help/help';

import { TabsPage } from '../pages/tabs/tabs';
import { ChestPage } from '../pages/chest/chest';
import { AbsPage } from '../pages/abs/abs';
import { ArmPage } from '../pages/arm/arm';
import { ShoulderPage } from '../pages/shoulder/shoulder';
import { LegPage } from '../pages/leg/leg';
import { VitaminsPage } from '../pages/vitamins/vitamins';
import { VitaminaPage } from '../pages/vitamina/vitamina';
import { VitaminbPage } from '../pages/vitaminb/vitaminb';
import { VitamincPage } from '../pages/vitaminc/vitaminc';
import { VitamindPage } from '../pages/vitamind/vitamind';
import { VitaminePage } from '../pages/vitamine/vitamine';
import { VitaminkPage } from '../pages/vitamink/vitamink';
import { FirstaidPage } from '../pages/firstaid/firstaid';
import { HealthtipsPage } from '../pages/healthtips/healthtips';
import { HomeremediesPage } from '../pages/homeremedies/homeremedies';
import { AcidityPage } from '../pages/acidity/acidity';
import { CcPage } from '../pages/cc/cc';
import { HeadachePage } from '../pages/headache/headache';
import { BackpainPage } from '../pages/backpain/backpain';
import { PimplesPage } from '../pages/pimples/pimples';
import { WeightPage } from '../pages/weight/weight';
import { DandruffPage } from '../pages/dandruff/dandruff';
import { HairPage } from '../pages/hair/hair';
import { AsthamaPage } from '../pages/asthama/asthama';
import { ArPage } from '../pages/ar/ar';
import { CprPage } from '../pages/cpr/cpr';
import { ShockPage } from '../pages/shock/shock';
import { HattackPage } from '../pages/hattack/hattack';
import { SuffPage } from '../pages/suff/suff';
import { HangPage } from '../pages/hang/hang';
import { DiabeticPage } from '../pages/diabetic/diabetic';
import { ComaPage } from '../pages/coma/coma';
import { StrokePage } from '../pages/stroke/stroke';
import { BurnsPage } from '../pages/burns/burns';
import { HeatPage } from '../pages/heat/heat';
import { FeverPage } from '../pages/fever/fever';
import { FoodPage } from '../pages/food/food';
import { BleedPage } from '../pages/bleed/bleed';
import { NosePage } from '../pages/nose/nose';
import { SnakePage } from '../pages/snake/snake';
import { ScorpianPage } from '../pages/scorpian/scorpian';
import { AnimalPage } from '../pages/animal/animal';
import { BrokenPage } from '../pages/broken/broken';
import { WoundsPage } from '../pages/wounds/wounds';
import { AbdominalPage } from '../pages/abdominal/abdominal';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DrugsPage } from '../pages/drugs/drugs';
import { HosPage } from '../pages/hos/hos';
import { ChatPage } from '../pages/chat/chat';






import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,
    HealthPage,
    FittnessPage,
    HelpPage,
    TabsPage,
    ChestPage,
    SlidesPage,
    AbsPage,
    ArmPage,
    ShoulderPage,
    LegPage,
    VitaminsPage,
    VitaminaPage,
    VitaminbPage,
    VitamincPage,
    VitamindPage,
    VitaminePage,
    VitaminkPage,
    FirstaidPage,
    HealthtipsPage,
    HomeremediesPage,
    AcidityPage,
    CcPage,
    HeadachePage,
    BackpainPage,
    PimplesPage,
    WeightPage,
    DandruffPage,
    HairPage,
    AsthamaPage,
    ArPage,
    CprPage,
    ShockPage,
    
    HattackPage,
    SuffPage,
    HangPage,
    DiabeticPage,
    ComaPage,
    StrokePage,
    BurnsPage,
    HeatPage,
    FeverPage,
    FoodPage,
    BleedPage,
    NosePage,
    SnakePage,
    
    ScorpianPage,
    AnimalPage,
    BrokenPage,
    WoundsPage,
    AbdominalPage,
    LoginPage,
    RegisterPage,
    DrugsPage,
    HosPage,
    ChatPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HealthPage,
    FittnessPage,
    HelpPage,
   
    TabsPage,
    ChestPage,
    SlidesPage,
    AbsPage,
    ArmPage,
    ShoulderPage,
    LegPage,
    VitaminsPage,
    VitaminaPage,
    VitaminbPage,
    VitamincPage,
    VitamindPage,
    VitaminePage,
    VitaminkPage,
    FirstaidPage,
    HealthtipsPage,
    HomeremediesPage,
    AcidityPage,
    CcPage,
    HeadachePage,
    BackpainPage,
    PimplesPage,
    WeightPage,
    DandruffPage,
    HairPage,
    AsthamaPage,
    ArPage,
    CprPage,
    ShockPage,
    HattackPage,
    SuffPage,
    HangPage,
    DiabeticPage,
    ComaPage,
    StrokePage,
    BurnsPage,
    HeatPage,
    FeverPage,
    FoodPage,
    BleedPage,
    NosePage,
    SnakePage,
    ScorpianPage,
    AnimalPage,
    BrokenPage,
    WoundsPage,
    AbdominalPage,
    LoginPage,
    RegisterPage,
    DrugsPage,
    HosPage,
    ChatPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
