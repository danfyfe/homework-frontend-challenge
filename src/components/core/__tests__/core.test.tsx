import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import {
	P,
	H2,
	H3,
	CTA,
	Image,
	Link
} from "@/components/core";


describe('P', () => {
	const container = render(<P className='mb-2'>P Test content</P>);
	const element = container.getByText("P Test content");
  it('Renders a P element', () => {
		expect(element.tagName).toBe("P")
	});

	it('Renders the correct text', () => {
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		expect(element.classList).toContain("mb-2");
	});
});

describe('H2', () => {
	const container = render(<H2 className='mb-3'>H2 Test content</H2>);
	const element = container.getByText("H2 Test content");
  it('Renders an H2 element', () => {
		expect(element.tagName).toBe("H2")
	});

	it('Renders the correct text', () => {
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		expect(element.classList).toContain("mb-3");
	});
});

describe('H3', () => {
	const container = render(<H3 className='mb-4'>H3 Test content</H3>);
	const element = container.getByText("H3 Test content");
  it('Renders an H3 element', () => {
		expect(element.tagName).toBe("H3")
	});

	it('Renders the correct text', () => {
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		expect(element.classList).toContain("mb-4");
	});
});

describe('CTA', () => {
	const container = render(<CTA className='mb-6' href="/test-path" text="CTA Test content" />);
	const element = container.getByText("CTA Test content");
  it('Renders an anchor element', () => {
		expect(element.tagName).toBe("A")
	});

	it('Sets the correct href value', () => {
		expect(element.getAttribute('href')).toBe('/test-path');
	});

	it('Renders the correct text', () => {
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		expect(element.classList).toContain("mb-6");
	});
});

describe('Image', () => {
	const container = render(<Image className='mb-8' src="/test-source" alt="Image Test alt" width={25} height={25}/>);
	const element = container.getByAltText("Image Test alt");
  it('Renders an anchor element', () => {
		expect(element.tagName).toBe("IMG")
	});

	it('Renders the correct alt', () => {
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		expect(element.classList).toContain("mb-8");
	});
});

describe('Link', () => {
	const container = render(<Link className='mb-9' href="/test-href">Link Test content</Link>);
	const element = container.getByText("Link Test content");
  it('Renders an anchor element', () => {
		expect(element.tagName).toBe("A")
	});

	it('Renders the correct text', () => {
		expect(element).toBeDefined();
	});

	it('Passes in the className', () => {
		expect(element.classList).toContain("mb-9");
	});
});
