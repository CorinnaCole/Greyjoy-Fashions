import React, { useState, useEffect } from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProductName from '../client/src/components/View/ProductName.jsx';


import App from '../client/src/components/App.jsx';

const dummyProductInfo = {
  'id': 37311,
  'campus': 'hr-rfe',
  'name': 'Camo Onesie',
  'slogan': 'Blend in to your crowd',
  'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  'category': 'Jackets',
  'default_price': '140.00',
  'created_at': '2021-08-13T14:37:33.145Z',
  'updated_at': '2021-08-13T14:37:33.145Z',
  'features': [
    {
      'feature': 'Fabric',
      'value': 'Canvas'
    },
    {
      'feature': 'Buttons',
      'value': 'Brass'
    }
  ]
};

const dummyCurrentDisplayedStyle = {
  'style_id': 221002,
  'name': 'NyanCat',
  'original_price': '140.00',
  'sale_price': '100.00',
  'default?': false,
  'photos': [
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    }
  ],
  'skus': {
    '1281056': {
      'quantity': 8,
      'size': 'XS'
    },
    '1281057': {
      'quantity': 16,
      'size': 'S'
    },
    '1281058': {
      'quantity': 17,
      'size': 'M'
    },
    '1281059': {
      'quantity': 10,
      'size': 'L'
    },
    '1281060': {
      'quantity': 15,
      'size': 'XL'
    },
    '1281061': {
      'quantity': 6,
      'size': 'XXL'
    }
  }
};

const dummyMetaData = {
  'product_id': '37311',
  'ratings': {
    '1': '49',
    '2': '26',
    '3': '78',
    '4': '113',
    '5': '278'
  },
  'recommended': {
    'false': '89',
    'true': '455'
  },
  'characteristics': {
    'Fit': {
      'id': 125031,
      'value': '3.0562130177514793'
    },
    'Length': {
      'id': 125032,
      'value': '3.1424501424501425'
    },
    'Comfort': {
      'id': 125033,
      'value': '3.2345679012345679'
    },
    'Quality': {
      'id': 125034,
      'value': '3.2666666666666667'
    }
  }
};


describe('should render Product Name component with multiple different properties', () => {

  it('should render Product Name', () => {
    render(
      <ProductName
        productInfo={dummyProductInfo}
        currentDisplayedStyle={dummyCurrentDisplayedStyle}
        metaData={dummyMetaData}
      />
    );
    expect(screen.getByTestId('product_name')).toHaveTextContent('Camo Onesie');
  });
  it('should display the proper category', () => {
    render(
      <ProductName
        productInfo={dummyProductInfo}
        currentDisplayedStyle={dummyCurrentDisplayedStyle}
        metaData={dummyMetaData}
      />
    );
    expect(screen.getByTestId('category_test')).toHaveTextContent('Jackets');
  });
  it('should show the sales price', () => {
    render(
      <ProductName
        productInfo={dummyProductInfo}
        currentDisplayedStyle={dummyCurrentDisplayedStyle}
        metaData={dummyMetaData}
      />
    );
    expect(screen.getByTestId('sales_price')).toHaveTextContent('100.00');
    expect(screen.getByTestId('sales_price')).toHaveStyle('color: red');

  });
  it('should show the original price', ()=> {
    render(
      <ProductName
        productInfo={dummyProductInfo}
        currentDisplayedStyle={dummyCurrentDisplayedStyle}
        metaData={dummyMetaData}
      />
    );
    expect(screen.getByTestId('original_price')).toHaveTextContent('140.00');
    expect(screen.getByTestId('original_price')).toHaveStyle('text-decoration: line-through');
  });

});



// https://testing-library.com/docs/ecosystem-jest-dom/

