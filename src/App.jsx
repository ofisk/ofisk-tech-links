import Header from './components/Header'
import Bio from './components/Bio'
import LinkSection from './components/LinkSection'
import './App.css'

function App() {
  const socialLinks = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/orenfisk'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ofisk'
    }
  ];

  const personalLinks = [
    {
      label: 'LoreSmith',
      url: 'https://loresmith-ai.oren-t-fisk.workers.dev/',
      summary: 'A full-stack web application built on Cloudflare Workers with React, leveraging GraphRAG for intelligent document processing and retrieval-augmented generation. The platform uses D1, R2, and Durable Objects for state management, enabling real-time campaign orchestration and processing of large rulebook documents (up to 500MB) with contextual AI assistance and character integration.'
    }
  ]

  const adobeLinks = [
    {
      label: 'Adobe - GenStudio for Performance Marketing',
      url: 'https://business.adobe.com/products/genstudio-for-performance-marketing.html?s_iid=7015Y000003t3H0QAI&s_cid=701Ke0000004qe8IAA&sdid=Z9X3FC66&mv=search&edtamo=true&s_kwcid=AL!3085!3!757296738213!e!!g!!genstudio%20for%20performance%20marketing!22662564427!180434505803&ef_id=CjwKCAiA8vXIBhAtEiwAf3B-gyavRAEujk1LVv5fR-eTytRArH_tBnAAB1q7-ybCn-QvIo1rt4KIaBoCWh8QAvD_BwE:G:s&gad_source=1&gad_campaignid=22662564427&gbraid=0AAAAADOODJQDBSplsEg7OmAc4-tLACKwz&gclid=CjwKCAiA8vXIBhAtEiwAf3B-gyavRAEujk1LVv5fR-eTytRArH_tBnAAB1q7-ybCn-QvIo1rt4KIaBoCWh8QAvD_BwE',
      summary: 'An AI-powered platform that enables marketing teams to generate, optimize, and scale performance marketing content at speed. GenStudio combines generative AI with Adobe\'s marketing expertise to help teams create high-performing ad creatives, copy, and campaigns that drive better ROI.'
    },
    {
      label: 'Adobe - Live Search',
      url: 'https://experienceleague.adobe.com/en/docs/commerce/live-search/overview',
      summary: 'A lightweight SaaS-based search solution that replaces standard search in Adobe Commerce with AI-powered capabilities. Live Search provides dynamic faceting, intelligent re-ranking based on shopper behavior, and real-time search-as-you-type results to help customers find products quickly and effortlessly.'
    },
    {
      label: 'Adobe - Product Recommendations',
      url: 'https://experienceleague.adobe.com/en/docs/commerce/product-recommendations/overview',
      summary: 'An AI-driven recommendation engine that uses machine learning to deliver personalized product suggestions across the shopping experience. The service analyzes shopper behavior, purchase history, and product relationships to surface relevant recommendations that increase engagement and conversion rates.'
    },
    {
      label: 'Bazaarvoice - Display Configuration',
      url: 'https://docs.bazaarvoice.com/articles/#!ratings-reviews/hosted_display_config/q/display%2520implementation/qid/213554/qp/1',
      summary: 'Documentation and configuration tools for implementing Bazaarvoice\'s hosted display widgets on e-commerce sites. This includes setup guides for displaying ratings, reviews, and other user-generated content seamlessly within the shopping experience.'
    },
    {
      label: 'Bazaarvoice - Review Collection',
      url: 'https://docs.bazaarvoice.com/articles/#!ratings-reviews/pie',
      summary: 'A comprehensive solution for collecting customer reviews through post-interaction email campaigns. The Review Collection system automates the review request process, helping merchants gather authentic customer feedback to build trust and improve conversion rates.'
    },
    {
      label: 'Bazaarvoice - Configuration Hub',
      url: 'https://docs.bazaarvoice.com/articles/#!ratings-reviews/config_hub_overview',
      summary: 'A centralized configuration management system for Bazaarvoice Ratings & Reviews that allows merchants to configure and manage their review display settings, moderation rules, and integration parameters from a single interface.'
    }
  ]

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Bio />
        <LinkSection title="Social" links={socialLinks} />
        <LinkSection title="Personal Projects" links={personalLinks} />
        <LinkSection title="Professional Projects" links={adobeLinks} />
      </div>
    </div>
  )
}

export default App

