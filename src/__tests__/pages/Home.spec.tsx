import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../pages/Home';

describe('Testing alt image', () => {
  it('Should be show Logo aircnc in the alt', () => {
    render(<Home />);
    const displayImage = document.querySelector('img') as HTMLImageElement;
    expect(displayImage.alt).toContain('Logo aircnc');
  });
});

describe('Testing image name', () => {
  it('Should be show logo.svg in the alt', () => {
    render(<Home />);
    const displayImage = document.querySelector('img') as HTMLImageElement;
    expect(displayImage.src).toContain('logo.svg');
  });
});
