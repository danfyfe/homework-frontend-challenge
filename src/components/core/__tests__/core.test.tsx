import { describe, expect, it } from '@jest/globals';
import { render, cleanup } from '@testing-library/react';
import {
	P,
	H2,
	H3,
	CTA,
	Image,
	Link,
	ComponentError,
	Loading,
	Modal
} from "@/components/core";


describe('P', () => {
	beforeEach(cleanup);
  it('Renders a P element', () => {
		const container = render(<P className='mb-2'>P Test content</P>);
		const element = container.getByText("P Test content");
		expect(element.tagName).toBe("P");
	});

	it('Renders the correct text', () => {
		const container = render(<P className='mb-2'>P Test content</P>);
		const element = container.getByText("P Test content");
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		const container = render(<P className='mb-2'>P Test content</P>);
		const element = container.getByText("P Test content");
		expect(element.classList).toContain("mb-2");
	});
});

describe('H2', () => {
	beforeEach(cleanup);
  it('Renders an H2 element', () => {
		const container = render(<H2 className='mb-3'>H2 Test content</H2>);
		const element = container.getByText("H2 Test content");
		expect(element.tagName).toBe("H2");
	});

	it('Renders the correct text', () => {
		const container = render(<H2 className='mb-3'>H2 Test content</H2>);
		const element = container.getByText("H2 Test content");
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		const container = render(<H2 className='mb-3'>H2 Test content</H2>);
		const element = container.getByText("H2 Test content");
		expect(element.classList).toContain("mb-3");
	});
});

describe('H3', () => {
	beforeEach(cleanup);
  it('Renders an H3 element', () => {
		const container = render(<H3 className='mb-4'>H3 Test content</H3>);
		const element = container.getByText("H3 Test content");
		expect(element.tagName).toBe("H3");
	});

	it('Renders the correct text', () => {
		const container = render(<H3 className='mb-4'>H3 Test content</H3>);
		const element = container.getByText("H3 Test content");
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		const container = render(<H3 className='mb-4'>H3 Test content</H3>);
		const element = container.getByText("H3 Test content");
		expect(element.classList).toContain("mb-4");
	});
});

describe('CTA', () => {
	beforeEach(cleanup);
  it('Renders an anchor element', () => {
		const container = render(<CTA className='mb-6' href="/test-path" text="CTA Test content" />);
		const element = container.getByText("CTA Test content");
		expect(element.tagName).toBe("A");
	});

	it('Sets the correct href value', () => {
		const container = render(<CTA className='mb-6' href="/test-path" text="CTA Test content" />);
		const element = container.getByText("CTA Test content");
		expect(element.getAttribute('href')).toBe('/test-path');
	});

	it('Renders the correct text', () => {
		const container = render(<CTA className='mb-6' href="/test-path" text="CTA Test content" />);
		const element = container.getByText("CTA Test content");
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		const container = render(<CTA className='mb-6' href="/test-path" text="CTA Test content" />);
		const element = container.getByText("CTA Test content");
		expect(element.classList).toContain("mb-6");
	});
});

describe('Image', () => {
	beforeEach(cleanup);
  it('Renders an anchor element', () => {
		const container = render(<Image className='mb-8' src="/test-source" alt="Image Test alt" width={25} height={25}/>);
		const element = container.getByAltText("Image Test alt");
		expect(element.tagName).toBe("IMG");
	});

	it('Renders the correct alt', () => {
		const container = render(<Image className='mb-8' src="/test-source" alt="Image Test alt" width={25} height={25}/>);
		const element = container.getByAltText("Image Test alt");
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		const container = render(<Image className='mb-8' src="/test-source" alt="Image Test alt" width={25} height={25}/>);
		const element = container.getByAltText("Image Test alt");
		expect(element.classList).toContain("mb-8");
	});
});

describe('Link', () => {
	beforeEach(cleanup);
  it('Renders an anchor element', () => {
		const container = render(<Link className='mb-9' href="/test-href">Link Test content</Link>);
		const element = container.getByText("Link Test content");
		expect(element.tagName).toBe("A");
	});

	it('Renders the correct text', () => {
		const container = render(<Link className='mb-9' href="/test-href">Link Test content</Link>);
		const element = container.getByText("Link Test content");
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		const container = render(<Link className='mb-9' href="/test-href">Link Test content</Link>);
		const element = container.getByText("Link Test content");
		expect(element.classList).toContain("mb-9");
	});
});

describe('ComponentError', () => {
	beforeEach(cleanup);
	it('Renders the correct text', () => {
		const container = render(<ComponentError />);
		const element = container.getByText("An error has occurred");
		expect(element).toBeDefined();
		expect(element.tagName).toBe('P');
	});
	
	it('Renders a link to the homepage', () => {
		const container = render(<ComponentError />);
		const element = container.getByText("Return Home");
		expect(element).toBeDefined();
		expect(element.tagName).toBe('A');
	})
});

describe('Loading', () => {
	beforeEach(cleanup);
	it('Renders the correct text', () => {
		const container = render(<Loading />);
		const element = container.getByText("Loading...");
		expect(element).toBeDefined();
		expect(element.tagName).toBe('P');
	});
});

describe('Modal', () => {
	beforeEach(cleanup);
	it('Renders the correct children', () => {
		const container = render(<Modal><P>Modal content</P></Modal>);
		const element = container.getByText("Modal content");
		expect(element).toBeDefined();
		expect(element.tagName).toBe('P');
	});
});
