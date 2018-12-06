import React from 'react';
import {Route} from 'react-router-dom';

import ButtonCatalog, { ButtonHero } from './ButtonCatalog';
import CardCatalog from './CardCatalog';
import CheckboxCatalog from './CheckboxCatalog';
import ChipsCatalog from './ChipsCatalog';
import DialogCatalog from './DialogCatalog';
import DrawerCatalog from './DrawerCatalog';
import ElevationCatalog from './ElevationCatalog';
import FabCatalog from './FabCatalog';
import IconButtonCatalog from './IconButtonCatalog';
import ImageListCatalog from './ImageListCatalog';
import LayoutGridCatalog from './LayoutGridCatalog';
import ListCatalog from './ListCatalog';
import LinearProgressIndicatorCatalog from './LinearProgressIndicatorCatalog';
import MenuCatalog from './MenuCatalog';
import RadioButtonCatalog from './RadioButtonCatalog';
import RippleCatalog from './RippleCatalog';
import SelectCatalog from './SelectCatalog';
import SliderCatalog from './SliderCatalog';
import SnackbarCatalog from './SnackbarCatalog';
import SwitchCatalog from './SwitchCatalog';
import TabsCatalog from './TabsCatalog';
import TextFieldCatalog from './TextFieldCatalog';
import ThemeCatalog from './ThemeCatalog';
import TopAppBarCatalog from './TopAppBarCatalog';
import TypographyCatalog from './TypographyCatalog';

const routesList = [{
  urlPath: 'iframe/button',
  Component: ButtonHero,
},];

const Routes = () => {
  return (
    routesList.map((route) => {
      const {Component, urlPath} = route;
      return (
        <div className='hero'>
          <Route
            key={urlPath}
            path={`/component/${urlPath}`}
            render={(props) => <Component {...props}/>} />
        </div>
      );
    })
  );
}

export default Routes;
