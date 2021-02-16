import React from 'react'

import { HomeComponent } from 'company-custom-components'
import 'company-custom-components/dist/index.css'

const App = () => {

  function gotolink(link: any) {
    console.log("from Parent " + link);
  }

  return <HomeComponent gotolink={gotolink} />
}

export default App;
