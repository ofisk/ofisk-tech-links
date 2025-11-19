import { useState } from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import LinkSection from './components/LinkSection'
import './App.css'

function App() {
  const personalLinks = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/orenfisk'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ofisk'
    },
    {
      label: 'LoreSmith',
      url: 'https://loresmith-ai.oren-t-fisk.workers.dev/'
    }
  ]

  const adobeLinks = [
    {
      label: 'Adobe - GenStudio for Performance Marketing',
      url: 'https://business.adobe.com/products/genstudio-for-performance-marketing.html?s_iid=7015Y000003t3H0QAI&s_cid=701Ke0000004qe8IAA&sdid=Z9X3FC66&mv=search&edtamo=true&s_kwcid=AL!3085!3!757296738213!e!!g!!genstudio%20for%20performance%20marketing!22662564427!180434505803&ef_id=CjwKCAiA8vXIBhAtEiwAf3B-gyavRAEujk1LVv5fR-eTytRArH_tBnAAB1q7-ybCn-QvIo1rt4KIaBoCWh8QAvD_BwE:G:s&gad_source=1&gad_campaignid=22662564427&gbraid=0AAAAADOODJQDBSplsEg7OmAc4-tLACKwz&gclid=CjwKCAiA8vXIBhAtEiwAf3B-gyavRAEujk1LVv5fR-eTytRArH_tBnAAB1q7-ybCn-QvIo1rt4KIaBoCWh8QAvD_BwE'
    },
    {
      label: 'Adobe - Live Search',
      url: 'https://experienceleague.adobe.com/en/docs/commerce/live-search/overview'
    },
    {
      label: 'Adobe - Product Recommendations',
      url: 'https://experienceleague.adobe.com/en/docs/commerce/product-recommendations/overview'
    }
  ]

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Bio />
        <LinkSection title="Personal" links={personalLinks} />
        <LinkSection title="Professional Projects" links={adobeLinks} />
      </div>
    </div>
  )
}

export default App

