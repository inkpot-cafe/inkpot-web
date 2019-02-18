import * as React from 'react';

import Ink from './Ink'

import * as ink1 from '../assets/resources/inks/Cervelli umidi e cervelli secchi.md'
import * as ink2 from '../assets/resources/inks/Da I. Kant a J. F. Herbart.md'
import * as ink3 from '../assets/resources/inks/Libera volontà e natura.md'
import * as ink4 from '../assets/resources/inks/Pregiudizi antropocentrici.md'
import * as ink5 from '../assets/resources/inks/René Girard e la menzogna romantica.md'
import * as ink6 from '../assets/resources/inks/The mess Inside.md'
import * as ink7 from "../assets/resources/inks/Verso una mente ecologicamente orientata: l'individualismo biocentrico di Paul Taylor.md"

class Pot extends React.Component {
  public render() {

    return (
      <div className="pot">
        <Ink key={1} title="Cervelli umidi e cervelli secchi" content={ink1} />
        <Ink key={2} title="Da I. Kant a J. F. Herbart" content={ink2} />
        <Ink key={3} title="Libera volontà e natura" content={ink3} />
        <Ink key={4} title="Pregiudizi antropocentrici" content={ink4} />
        <Ink key={5} title="René Girard e la menzogna romantica" content={ink5} />
        <Ink key={6} title="The mess Inside" content={ink6} />
        <Ink key={7} title="Verso una mente ecologicamente orientata: l'individualismo biocentrico di Paul Taylor" content={ink7} />
      </div>
    );
  }
}

export default Pot;