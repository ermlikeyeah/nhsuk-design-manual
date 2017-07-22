---
layout: manual.njk
title: Elements
---

This is the first draft of our design elements. They give you the components you can use and information
about how to use them.

Our elements are broken down into 3 levels:

1. **[Units](#units)** - the building blocks of a service
2. **[Components](#components)** - a combination of units built to address user needs
3. **[Assemblies](#assemblies)** - a combination of units and components to address user needs

***

## Units

These are the basic building blocks of the service. They provide granular control of layout, type and basic interaction.


### Grid

The NHS grid is a flexible 16 column grid, that has percentage-based columns and gutters. It expands to a maximum width
of 960px. At sizes above 960px the grid is centrally aligned.

#### 16 column grid
<div class="example">
  <img src="../assets/units/grids.png" alt="16 column grid">
</div>
  
#### Spacing and layout

The grid uses fixed margins and gutters to help control the proportion and balance of the page. The margins and gutters
are set to 16px for small screens and 32px for larger screens.


### Layouts

Any number of columns can be used to suit the content and create layouts at different widths. At this stage,
we predominantly use the two-thirds/one-third layout.

For layouts intended for use on smaller screens, we recommend using a maximum of 4 columns.

#### Layout grid
<div class="example">
  <img src="../assets/units/layouts.png" alt="Layout grid">
</div>

#### Breakpoints

Breakpoints are the point at which the content responds to different screen features, for example, screen sizes.
For simplicity, we are using 2 width breakpoints, resulting in three layouts. 

##### Small, medium and large breakpoints
<div class="example">
  <img src="../assets/units/breakpoints.png" alt="Small, medium and large breakpoints">
</div>

#### Baseline grid

A baseline grid of 8px is used to create regular vertical spacing between objects down a page. This baseline allows us
to space our text, images or any other page elements consistently.


### Typography

NHS.UK uses Frutiger. The fallback from Frutiger is Arial.

Our typographic scale for headings and body type creates clear structure and consistency for users. We have a
recommended scale for larger and smaller devices.

#### The measure

‘The measure’ is the number of characters in a single line of a column of text. In body text you should aim for
between 45 and 75 characters per line. This makes reading easier because the eye doesn’t have to work as hard to move
from the end of one line to the start of the next line.

The measure is usually handled by the grid. With our baseline font size of 20pt, for larger viewports, type set to
two-thirds of the screen width should be within 45 and 75 characters. Always check.

#### Headers

There are currently 2 type scales for large viewports (such as desktop browser windows) and small viewports
(like mobile browser windows). 

##### Heading scale in large viewports
<div class="example">
  <img src="../assets/units/headings-lg.png" alt="Heading scale in larger viewports">
</div> 

##### Heading scale in small viewports
<div class="example">
  <img src="../assets/units/headings-sm.png" alt="Heading scale in small viewports">
</div> 

#### Body

Baseline font size is 20px with a line-height of 32px. Paragraphs are spaced an additional 16px apart.

### Colours

At this stage, NHS.UK uses a reduced colour palette, taken from [NHS brand guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/).
There have been 2 modifications to this palette:

**Greens**<br> We use a shade of the existing secondary green. This colour is used on some navigational elements,
such as buttons. A darker green meets accessibility requirements when white button text is used.

**Greys**<br> Greys have been extended to produce a 5-step scale. This gives a wider range and more flexibility.
Lighter greys are used as backgrounds for some callout panels that also comply with AA and AAA WCAG contrast guidelines.

#### Online colour palette
<div class="example">
  <img src="../assets/units/swatches.png" alt="NHS online colour palette">
</div> 

#### Text contrast

These are combinations of text and colour which comply with AA and AAA WCAG contrast guidelines. 

##### Online colour contrast guide
<div class="example">
  <img src="../assets/units/contrast.png" alt="NHS online text contrast">
</div> 

### Logo

The NHS logo sits top left. For spacing guidelines and logo download, see the NHS.UK brand site.

[NHS.UK identity guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/organisational-logos/#heading1)

The current logo size is 73px x 32px on all viewports.

### Links and buttons

Links are used in isolation and in-line. A hover state is implemented. See [NHS.UK content patterns](patterns.html) for more detail
on how we write links. 

#### Link
<div class="example">
  <img src="../assets/units/link.png" alt="Link text">
</div> 

#### Reversed link
<div class="example">
  <img src="../assets/units/link-reverse.png" alt="Link reverse out on dark background">
</div> 

Links can be reversed on dark backgrounds. Check contrast ratio for WCAG compliance. At 20px we should aim for AAA.

#### Inline link
<div class="example">
  <img src="../assets/units/link-inline.png" alt="Link inline with text">
</div>
  
#### Buttons

Currently, buttons are used rarely. They typically indicate a major interaction. This is an evolving interface element.

Buttons require enough padding around the button label. 16px above and below. 24px either side.

##### Example
<div class="example">
  <img src="../assets/units/button.png" alt="Button">
</div> 

### Images

We use images to help people validate their symptoms. All our images are cropped at a ratio of 3:2.

#### Example
<div class="example">
  <img src="../assets/units/image.png" alt="Image cropped at 3 by 2 ratio">
</div>  

#### Image with caption

We use captions to describe the symptom to give more context where needed. 

#### Example
<div class="example">
  <img src="../assets/units/figcaption.png" alt="Image with caption text">
</div> 

***

## Components

These are combinations of units that address a user need. 

### Priority link

These are links that have higher visual priority than standard text links. They’re typically used to access
external services.

#### Example
<div class="example">
  <img src="../assets/components/priority-compact-lg.png" alt="Priority link">
</div> 

They can be extended to include extra context. A small amount of text can help define a confusing service,
clarify its worth or show its value.

#### Example
<div class="example">
  <img src="../assets/components/priority-lg.png" alt="Priority link with additional content">
</div> 

### Reveal

We only ever use reveals for progressive disclosure - and only for content that addresses lower priority needs.
We give reveals descriptive titles that clearly explain their contents. We never use reveals to hide content that meets
most users’ needs, just to make a page shorter for instance. 

#### Example
<div class="example">
  <div class="grid-row">
    <img src="../assets/components/progressive-reveal-open-lg.png" alt="Progressive reveal open">
  </div>
</div> 

### Local header

The local header appears at the top of the page. It usually contains a combination of the page title,
description and page navigation.

#### Local header with description
<div class="example">
  <img src="../assets/components/local-header/default-lg.png" alt="Local header with description">
</div> 

#### Local header with on page navigation
<div class="example">
  <img src="../assets/components/local-header/page-navgiation-lg.png" alt="Local header with on page navigation">
</div> 

#### Local header for guide
<div class="example">
  <img src="../assets/components/local-header/guide-navgiation-lg.png " alt="Local header for guide">
</div> 

### Callouts

We use callouts to draw attention to important areas of content. 

#### Primary care

We use a callout with a blue border to indicate when people should seek help from a medical professional for
their condition. For example, when to see a GP or practice nurse.

##### Example
<div class="example">
  <img src="../assets/components/callout/primary-care.png" alt="Primary care callout">
</div>  

#### Emergency care

We use a callout with a red background to indicate when people are in danger and should take immediate action.
For example, when to call 999. 

##### Example
<div class="example">
  <img src="../assets/components/callout/emergency.png" alt="Emergency callout">
</div> 

#### Urgent care
We use a callout with a pale pink background and red border to indicate when fast action should be taken to avoid
an emergency. For example, when to go to A&E or get an urgent doctor’s appointment.

##### Example
<div class="example">
  <img src="../assets/components/callout/urgent.png" alt="Urgent callout">
</div> 

#### Important

We use a callout with a pale yellow background and darker yellow borders to highlight information about risks or
give one-off instructions.

##### Example
<div class="example">
  <img src="../assets/components/callout/important.png" alt="Important callout">
</div> 

#### Information

We use a callout with a grey background and dark grey border to provide contextual information where needed.
This callout is often combined with a link to make a priority action.

##### Example
<div class="example">
  <img src="../assets/components/callout/info.png" alt="Info callout">
</div> 

### Binary lists

We use binary lists to display 2 related lists of content. These are displayed in a 2 column layout on
large viewports. We stack one on top of the other on smaller viewports.

#### Example in a large viewport
<div class="example">
  <img src="../assets/components/binary-list-lg.png" alt="Binary list in large viewport">
</div> 

#### Example in a small viewport
<div class="example">
  <img src="../assets/components/binary-list-sm.png " alt="Binary list in small viewport">
</div> 

### Tabular data

We use tabular data to display 2 or more lists of content where each list item is directly comparable.
This is an early stage pattern and needs more work. At the moment, it really only works for 2 columns of short content.
The table columns don’t stack on top of each other on mobile.

#### Example
<div class="example">
  <img src="../assets/units/table.png " alt="Info callout">
</div>  

### Media

Media components are self-contained items of content displayed in a grid layout. We use them mainly to display a
sequence of images with captions. This is an early stage pattern and needs more work.

Media components are arranged in a grid on large viewports.

#### Example
<div class="example">
  <img src="../assets/components/cards/image-cards-lg.png " alt="Media items in large viewport">
</div>  

Media components are stacked on top of each other on small viewports.

##### Example
<div class="example">
  <img src="../assets/components/cards/image-cards-sm.png " alt="Media items in small viewport">
</div>  
 
***
 
## Assemblies

These are a combination of units and components to address a user need.

<div class="grid-row">
  <div class="column--two-thirds">
    <h3>Example in a large viewport</h3>
    <div class="example">
      <img src="../assets/assemblies/viewport-large.png" alt="Assembly in large viewport">
    </div> 
  </div>
  <div class="column--one-third">
    <h3>Example in a small viewport</h3>
    <div class="example">
      <img src="../assets/assemblies/viewport-small.png" alt="Assembly list in small viewport">
    </div> 
  </div>
</div>
