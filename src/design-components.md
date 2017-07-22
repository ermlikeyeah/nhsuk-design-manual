---
layout: manual.njk
title: Design components
description: Combined design styles that have built components.
breadcrumb_2_name: Design components

---

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

---

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

---

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

---

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

---

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

---

### Tabular data

We use tabular data to display 2 or more lists of content where each list item is directly comparable.
This is an early stage pattern and needs more work. At the moment, it really only works for 2 columns of short content.
The table columns don’t stack on top of each other on mobile.

#### Example
<div class="example">
  <img src="../assets/units/table.png " alt="Info callout">
</div>  

---

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
