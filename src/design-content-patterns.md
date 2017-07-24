---
layout: manual.njk
title: Content patterns
breadcrumb_2_name: Content design patterns
---

## Contents
1. [What these content patterns are](#what-these-content-patterns-are)

2. [Where the content patterns came from](#where-the-content-patterns-came-from)

3. [How we write about things](#how-we-write-about-things)
   * [How we write intros](#how-we-write-intros)
   * [Writing about symptoms](#Writing-about-symptoms)
   * [Conditions with similar symptoms](#conditions-with-similar-symptoms)
   * [Writing about treatment in general](#writing-about-treatment-in-general)
   * [Writing about self-care](#writing-about-self-care)
   * [Writing about treatment from the pharmacy](#writing-about-treatment-from-the-pharmacy)
   * [Writing about the GP appointment and treatment from a GP](#writing-about-the-GP-appointment-and-treatment-from-a-GP)
   * [Writing about causes](#writing-about-causes)
   * [How common a cause is](#how-common-a-cause-is)
   * [Writing about prevention](#writing-about-prevention)
   * [Writing about pain](#writing-about-pain)


4. [Patterns for elements](#patterns-for-elements)
   * [Primary care box (GP, nurse, other services)](#primary-care-box-gp-nurse-other-services)
   * [Seeing someone urgently](#seeing-someone-urgently)
   * [Emergency box](#emergency-box)
   * [111 callout](#111-callout)
   * [General callout box](#general-callout-box)
   * [Images](#images)
   * [Comparing 2 things](#comparing-2-things)
   * [Medicines content](#medicines-content)
   * [Content for groups that aren’t ‘you’ (children, the elderly etc)](#Content-for-groups-that-arent-you-children-the-elderly-etc)
   * [Step-by-step lists](#step-by-step-lists)
   * [Links](#links)
   * [Linking out to other organisations](#linking-out-to-other-organisations)

## What these content patterns are

These patterns explain:

* how we write about things, for example treatment
* how and when we use design patterns, for example call outs
* the language and style we use, for example tone, bullet lists, tables

The patterns document what we’ve done in transformation so far. Hopefully others will find the guidance useful.
They’re not a template or a ‘How to guide’.

The patterns are in development. We are adding to them as we go through transformation. Some of them will change.

## Where the content patterns came from

The patterns have evolved from:

* extensive user research to understand what people want from our content
* user needs based on research
* analytics, search terms and user journey analysis on the live site
* content iteration based on feedback from user research (labs and pop-ups), content crits and peer reviews
  within the team

We didn’t just sit down and make the patterns up. They are the product of working together on NHS.UK as
a multidisciplinary team that includes content designers, researchers, designers and developers.

***

## How we write about things

### How we write intros

This is the white text in the blue header. Intros are also the metadata description that people will see on Google.

We include 1 or 2 important facts about the topic. The prioritised user needs can help with choosing what’s important.

Things we include are:

* reassurance, for example how common a condition is
* what you can do yourself
* when to see someone about the condition

It can help to write intros last once you know the topic.  

#### Examples:
<div class="example">
  <div class="local-header">
    <h1 class="local-header__title">Hand, foot and mouth disease</h1>
    <div class="local-header__intro">
      <p>
        Hand, foot and mouth disease is a common childhood illness that can affect adults. It usually
        clears up by itself in 7 to 10 days.
      </p>
    </div>
  </div>
</div>
<div class="example">
  <div class="local-header">
    <h1 class="local-header__title">Hernia</h1>
    <div class="local-header__intro">
      <p>A hernia looks like a lump under the skin. It can be different sizes.</p>
    </div>
  </div>
</div>

### Writing about symptoms

We keep the content practical and focused on signs people can check themselves. This is usually a bullet list of
symptoms that’s easy to scan. We avoid including any other information, for example about causes and treatments
in the symptoms section.

We include images where this helps people identify their symptoms.

Not every condition needs a section on symptoms. This depends on the user needs.

We have done the following:

* where it’s obvious or where we’re writing about a symptom, for example sore throat, we haven’t included
  a symptoms’ section
* where there is only one action (for example, see a GP) we have combined symptoms and [GP box](#example-1-see-a-gp)

<div class="callout callout--info">
  <p><strong>Heading pattern:</strong><br> Check if you have [condition]</p>
</div>

#### Example 1: bullet list easy to scan
<div class="example">
  <h2 id="check-if-you-have-flu">Check if you have flu</h2>
  <p>Flu symptoms come on very quickly and can include:</p>
  <ul>
    <li>a sudden fever - a temperature of 38C or above</li>
    <li>aching body</li>
    <li>feeling tired or exhausted</li>
    <li>dry, chesty cough</li>
    <li>sore throat</li>
    <li>headache</li>
    <li>difficulty sleeping</li>
    <li>loss of appetite</li>
    <li>diarrhoea or tummy pain</li>
    <li>nausea and being sick</li>
  </ul>
</div>

#### Example 2: combined See a GP box and symptoms list
<div class="example">
  <div class="local-header">
    <h1 class="local-header__title">Bacterial vaginosis</h1>
    <div class="local-header__intro">
      <p>
        Bacterial vaginosis is a common infection of the vagina. It’s harmless and easily treated with antibiotics.
        It’s not classed as a sexually transmitted infection (STI).
      </p>
    </div>
  </div>
  <section class="callout callout--attention">
    <h2 id="see-a-gp-or-sexual-health-clinic-if-your-discharge">
      See a GP or sexual health clinic if your discharge:
    </h2>
    <ul>
      <li>has a strong fishy smell, particularly after sex</li>
      <li>is white or grey</li>
      <li>is thin and watery</li>
    </ul>
  </section>
</div>


#### Example 3: identifying symptoms using images
<div class="example">
  <h2 id="check-if-you-have-shingles">Check if you have shingles</h2>
  <p>The first sign of shingles can be:</p>
  <ul>
    <li>a tingling or painful feeling in an area of skin</li>
    <li>a headache or feeling generally unwell</li>
  </ul>
  <p>A rash will appear a few days later.</p>
  <p>Usually you get shingles on your chest and tummy, but it can appear on your face, eyes and genitals.</p>
  <div class="media__container">
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/shingles/shingles-rash-300.2ca3eb5cec9f5571a64dcbbc230e0a9d.jpg 300w,https://beta.nhs.uk/assets/images/shingles/shingles-rash-600.534eb33cc90eea9412eca0d5c3efd3d6.jpg 600w" alt="A shingles rash on the shoulder" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>
          The shingles rash appears as red blotches on your skin, on one side of your body only. A rash on both
          the left and right of your body is unlikely to be shingles.
        </p>
      </figcaption>
    </figure>
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/shingles/itchy-blisters-300.1d7720bbf8efa466ad28c9e50714e7a5.jpg 300w,https://beta.nhs.uk/assets/images/shingles/itchy-blisters-600.edc4df3e62b8dc13d94006d73ebc666e.jpg 600w" alt="Blisters oozing fluid" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>The blotches become itchy blisters which ooze fluid. A few days later the blisters dry out and scab.</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/shingles/rash-band-300.0bc5899c9cf625901ab8268cb9b3f302.jpg 300w,https://beta.nhs.uk/assets/images/shingles/rash-band-600.d0e0a96187ba45f96e493f1acea1d450.jpg 600w" alt="A rash band" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>
          The rash can form a band that only appears on one side of your body.
          The skin remains painful until after the rash has gone.
        </p>
      </figcaption>
    </figure>
  </div>
</div>

### Conditions with similar symptoms

We include these conditions under a reveal link. If there are a few of them we put these in a table with
their main symptoms.

The aim is to always make it easy for people to pick the condition they think applies to them.

<div class="callout callout--info">
  <p><strong>Heading pattern:</strong><br> If you’re not sure it’s [condition]</p>
</div>

#### Example 1: running text
<div class="example">
  <details class="" role="group" open="open">
    <summary data-analytics="summary" role="button" aria-controls="details-content-0" aria-expanded="true">
      <span class="details__summary">If you’re not sure it’s cellulitis</span>
    </summary>
    <div id="details-content-0" aria-hidden="false">
      <p>Other conditions can make your skin red, flaky and blistered.</p>
      <p>It’s unlikely to be cellulitis unless part of your skin is hot, red and swollen.</p>
    </div>
  </details>
</div>

#### Example 2: symptom and possible cause table
<div class="example">
  <details class="" role="group" open="open">
    <summary data-analytics="summary" role="button" aria-controls="details-content-0" aria-expanded="true">
      <span class="details__summary">If you’re not sure it’s impetigo</span>
    </summary>
    <div id="details-content-0" aria-hidden="false">
      <p>Impetigo can look similar to other skin conditions.</p>
      <table>
        <thead>
          <tr>
            <th>Skin symptoms</th>
            <th>Possible cause</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blisters on lips or around the mouth</td>
            <td><a href="http://www.nhs.uk/conditions/cold-sore/Pages/Introduction.aspx">cold sores</a></td>
          </tr>
          <tr>
            <td>Itchy, dry, cracked, sore</td>
            <td><a href="http://www.nhs.uk/conditions/eczema-(atopic)/Pages/Introduction.aspx">eczema</a></td>
          </tr>
          <tr>
            <td>Itchy blisters</td>
            <td>
              <a href="https://beta.nhs.uk/conditions/shingles">shingles</a>,
              <a href="http://www.nhs.uk/conditions/Chickenpox/Pages/Introduction.aspx">chickenpox</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>

### Writing about treatment in general

Whenever possible we include how long it will usually take to get better.

### Writing about self-care

We focus on things users can do easily themselves and don’t need any help from a clinician.

We often use Do/Don’t lists to give people clear actions.

<div class="callout callout--info">
  <p><strong>Heading pattern:</strong><br> How you can treat [condition] yourself</p>
</div>

#### Example 1: running text

<div class="example">
  <h2>How you can treat earwax build-up yourself</h2>
  <section class="callout callout--warning">
    <p>
      Don’t use your fingers or any objects like cotton buds to remove the earwax. This will push it further
      in and make it worse.
    </p>
  </section>
  <p>
    Usually earwax falls out on its own. If it doesn’t and blocks your ear, put 2 to 3 drops of olive or almond oil in
    your ear twice a day for a few days. Over a week or 2 weeks large lumps of earwax can fall out of your ear,
    especially at night when you’re lying down.
  </p>
  <p>There is no proof that ear candles or ear vacuums get rid of earwax.</p>
</div>

#### Example 2: Do/Don’t list

<div class="example">
  <p>You can help to prevent styes with some simple hygiene measures.</p>
  <div class="panel">
    <div class="panel__content panel__content--half">
      <h3 id="do">Do</h3>
      <ul class="list--check">
        <li>wash your face and remove eye makeup before bed</li>
        <li>replace your eye makeup every 6 months</li>
        <li>
          <a href="http://www.nhs.uk/Conditions/Blepharitis/Pages/Treatment.aspx">
            keep your eyelids and eyelashes clean
          </a> - especially if you have blepharitis
        </li>
      </ul>
    </div>
    <div class="panel__content panel__content--half">
      <h3 id="dont">Don’t</h3>
      <ul class="list--cross">
        <li>share towels or flannels with someone who has a stye</li>
        <li>rub your eyes if you haven’t recently washed your hands</li>
        <li>put contact lenses in before washing your hands</li>
      </ul>
    </div>
  </div>
</div>

### Writing about treatment from the pharmacy

We use this section for:

* help people can get from a pharmacist
* products they should ask for if there are specific ones (for example for acne)
* information about how long it takes before the medication works (if we know)
* practical information about talking to the pharmacist about a condition (for example if it’s something people
  might find embarrassing)

We don’t include detailed information about the medicines. Instead we link to Choices and will be linking to the
medicines beta once this has gone live.

We say you can buy medicines from your pharmacy.  We don’t use ‘without prescription’ or ‘over-the-counter’.

We always include a link to the pharmacy finder.

<div class="callout callout--info">
  <p><strong>Heading pattern:</strong><br> Your pharmacist can help with [condition]</p>
  <p><strong>Pharmacy link text pattern:</strong><br> [Find a pharmacy](https://beta.nhs.uk/finders/find-help)</p>
</div>

#### Example 1: practical information and timings
<div class="example">
  <h2>Your pharmacist can help with earwax build-up</h2>
  <p>To dissolve the earwax you can buy chemical drops from a pharmacy.</p>
  <p>The earwax should fall out on its own or dissolve after about a week.</p>
  <p>Don’t use drops if you have a hole in your eardrum. Ask your pharmacist what you can do instead.</p>
  <section class="callout callout--info callout--compact">
    <div class="reading-width">
      <p><a href="/finders/find-help">Find a pharmacy</a></p>
    </div>
  </section>
</div>

#### Example 2: asking for specific products
<div class="example">
  <h2>Your pharmacist can help with heat rash</h2>
  <p>To help soothe sore and itchy skin you can:</p>
  <ul>
    <li>use calamine lotion</li>
    <li>use hydrocortisone cream (but not on the face)</li>
    <li>take antihistamine tablets (but speak to a pharmacist first as they’re not always appropriate)</li>
  </ul>
  <p>
    You can buy these from a pharmacy. The pharmacist can advise you on the best medicines to use,
    for example if you’re pregnant or a child has the rash.
  </p>
  <section class="callout callout--info callout--compact">
    <p><a href="/finders/find-help">Find a pharmacy</a></p>
  </section>
</div>

#### Example 3: information about talking to a pharmacist
<div class="example">
  <p>
    Pharmacists can give you advice about which product is best for you. Ask your pharmacist if you can speak to them
    in a private area if you’re embarrassed.
  </p>
</div>

### Writing about the GP appointment and treatment from a GP

We add information about what happens at the appointment when:

* people need to prepare for the appointment in any way
* the GP might do tests that could be intrusive in any way, for example UTIs, STIs


We add information about treatment from the GP when:

* there is a user need to know the specific type of treatment
* there is a common treatment for the condition


There is more information about GP treatment in the [GP box](#example-1-see-a-gp) section.

#### Example 1: GP appointments
<div class="example">
  <h2>What happens at your appointment</h2>
  <p>You’ll be asked about your symptoms and may need to give a urine sample to confirm you have a UTI.</p>
  <p>A urine test helps to rule out other conditions that might be causing your symptoms.</p>
  <p>
    Men are sometimes offered a painless swab test to check for other conditions.
    This is where a cotton bud is wiped on the tip of the penis and sent for testing.
  </p>
  <p>This won’t hurt, but may feel uncomfortable.</p>
</div>

#### Example 2: GP treatment
<div class="example">
  <h2>Treatment from your GP</h2>
  <p>Broadly, treatment works in 3 main steps:</p>
  <ol>
    <li>
      <strong>Pain relief</strong> - avoid movements that cause you pain. Only move your shoulder gently.
      Use paracetamol or ibuprofen to ease the pain.
    </li>
    <li>
      <strong>Stronger pain and swelling relief</strong> - prescribed painkillers.
      Maybe steroid injections in your shoulder to bring down the swelling.
    </li>
    <li>
      <strong>Getting movement back</strong> - shoulder exercises once it’s less painful.
      This can be at home or with a physiotherapist.
    </li>
  </ol>
</div>

### Writing about causes

We only include a causes section if there is a specific user need. For example, people want to know why they
have insomnia.

In user research the most common reasons given for wanting to know about causes were:

* reassurance - people want to put a name to the thing they have
* validation - people want to confirm what they suspect they have
* it normalises the condition
* treatment options - when you know what it might be you can focus on what to do about it and whether
  you need to worry or not

We always try and give causes within a context. We include:

* the most common causes and their symptoms
* reveal links for other (less common) causes where appropriate
* links to conditions that can be a cause

We avoid long link lists of causes as they’re not helpful and encourage self-diagnosis.

<div class="callout callout--info">
  <p><strong>Heading pattern:</strong><br> What causes [condition]</p>
</div>

#### Example 1: symptoms information puts causes into context
<div class="example">
  <h2>Common causes of foot pain</h2>
  <p>You might have other symptoms apart from pain and swelling. How you treat them depends on the cause.</p>
  <table>
    <thead>
      <tr>
        <th>Main symptoms</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Can't use foot properly, numbness, tingling, feels hot</td>
        <td><a href="http://www.nhs.uk/Conditions/heel-pain/Pages/Introduction.aspx">heel pain</a></td>
      </tr>
      <tr>
        <td>Swollen, bruising, feels tender, difficult to move</td>
        <td><a href="https://beta.nhs.uk/conditions/sprains-and-strains">sprains and strains</a></td>
      </tr>
      <tr>
        <td>Swollen, red, bruised, difficult to move</td>
        <td><a href="http://www.nhs.uk/conditions/broken-toe/Pages/Introduction.aspx">broken toe</a></td>
      </tr>
      <tr>
        <td>Swelling, stiffness, foot is weak, grating or crackling feeling, a lump</td>
        <td><a href="http://www.nhs.uk/conditions/Tendonitis/Pages/Introduction.aspx">tendon injury</a>
      </tr>
      <tr>
        <td>Burning feeling, tingling, feels numb</td>
        <td><a href="http://www.nhs.uk/conditions/metatarsalgia/Pages/Introduction.aspx">metatarsalgia</a>
      </tr>
    </tbody>
  </table>
</div>

#### Example 2: most common causes with additional reveal to more information
<div class="example">
  <h2>What causes insomnia</h2>
  <p>The most common causes are:</p>
  <ul>
    <li>stress, anxiety, depression</li>
    <li>noise</li>
    <li>a room that’s too hot or cold</li>
    <li>uncomfortable beds</li>
    <li>alcohol, caffeine, nicotine</li>
    <li>recreational drugs like cocaine or Ecstasy</li>
    <li>jet lag, shift work</li>
  </ul>
  <details class="" role="group">
    <summary data-analytics="summary" role="button" aria-controls="details-content-0" aria-expanded="false">
      <span class="details__summary">Illnesses and other things that can cause insomnia</span>
    </summary>
    <div id="details-content-0" aria-hidden="true">  
      <h3>Illnesses and medications that can cause insomnia:</h3>
      <ul>
        <li>mental health conditions like schizophrenia, bipolar disorder</li>
        <li>Alzheimer’s, Parkinson’s</li>
        <li>restless leg syndrome</li>
        <li>overactive thyroid</li>
      </ul>
      <p>Many medications for these illnesses can also cause insomnia.</p>
      <h3>Things that keep you from getting a good night’s sleep:</h3>
      <ul>
        <li>long-term pain</li>
        <li>sleepwalking</li>
        <li>snoring, or interrupted normal breathing while sleeping (sleep apnoea)</li>
        <li>suddenly falling asleep anywhere (narcolepsy)</li>
        <li>nightmares, night terrors - children can suffer from these</li>
      </ul>
    </div>
  </details>
</div>

#### Example 3: causes information that’s linked to prevention
<div class="example">
  <h2>Causes of UTIs</h2>
  <p>
    UTIs are usually caused by bacteria from poo entering the urinary tract.
    The bacteria enters through the tube that carries pee out of the body (urethra).
  </p>
  <p>
    Women have a shorter urethra than men. This means bacteria is more likely to reach the bladder
    or kidneys and cause an infection.
  </p>
  <p>Causes of UTIs include:</p>
  <ul>
    <li>pregnancy</li>
    <li>
      conditions that block the urinary tract - such as
      <a href="http://www.nhs.uk/Conditions/kidney-stones/Pages/Introduction.aspx">kidney stones</a>
    </li>
    <li>
      conditions that make it difficult to fully empty the bladder - such as an
      <a href="http://www.nhs.uk/conditions/Prostate-enlargement/Pages/Introduction.aspx">enlarged prostate gland</a>
      in men and <a href="https://beta.nhs.uk/conditions/constipation">constipation</a> in children
    </li>
    <li>
      <a href="http://www.nhs.uk/conditions/urinary-catheterization/Pages/Introduction.aspx">urinary catheters</a>
      (a tube in your bladder used to drain urine)
    </li>
    <li>
      having a weakened immune system – for example, from
      <a href="/conditions/type-2-diabetes/check-if-you-have-it">type 2 diabetes</a>, chemotherapy or HIV
    </li>
  </ul>
  <h2>You can’t always prevent UTIs</h2>
  <p>There are some things you can do to try and prevent a UTI.</p>
  <div class="panel">
    <div class="panel__content panel__content--half">
      <h3 id="do">Do</h3>
      <ul class="list--check">
        <li>wipe from front to back when you go to the toilet</li>
        <li>try to fully empty your bladder when you go for a pee</li>
        <li>drink plenty of fluids</li>
        <li>take showers instead of baths</li>
        <li>wear loose, cotton underwear</li>
        <li>pee as soon as possible after sex</li>
        <li>change your baby or toddler’s nappies regularly</li>
      </ul>
    </div>
    <div class="panel__content panel__content--half">
      <h3 id="dont">Don’t</h3>
      <ul class="list--cross">
        <li>use perfumed bubble bath, soap or talcum powder</li>
        <li>hold your pee in if you feel the urge to go</li>
        <li>wear tight, synthetic underwear, such as nylon</li>
        <li>wear tight jeans or trousers</li>
        <li>
          use <a href="http://www.nhs.uk/Conditions/contraception-guide/Pages/male-condoms.aspx">condoms</a> or
          <a href="http://www.nhs.uk/Conditions/contraception-guide/Pages/contraceptive-diaphragm.aspx">diaphragms</a>
          with spermicidal lube on them - try non-spermicidal lube or a different type of
          <a href="http://www.nhs.uk/conditions/contraception-guide/pages/contraception.aspx">contraception</a>
        </li>
      </ul>
    </div>
  </div>
</div>

#### Example 4: causes grouped by symptoms
<div class="example">
  <h2>What causes earache and pain</h2>
  <p>
    Earache and pain can be caused by many things, but sometimes the cause isn’t known.
    Here are some of the most common causes:
  </p>
  <dl>
    <dt>Ear pain with toothache</dt>
    <dd>
      <a href="http://www.nhs.uk/Conditions/pregnancy-and-baby/Pages/teething-and-tooth-care.aspx">Children teething</a>
    </dd>
    <dd><a href="http://www.nhs.uk/Conditions/Dental-abscess/Pages/Introduction.aspx">Dental abscess</a></dd>
    <dt>Ear pain with change in hearing</dt>
    <dd><a href="http://www.nhs.uk/Conditions/Glue-ear/Pages/Introduction.aspx">Glue ear</a></dd>
    <dd><a href="/conditions/earwax">Earwax build-up</a></dd>
    <dd>An object stuck in the ear – do not try to remove it yourself, see your GP</dd>
    <dd>
      <a href="http://www.nhs.uk/Conditions/Perforated-eardrum/Pages/Introduction.aspx">Perforated eardrum</a>
      – particularly after a loud noise or accident
    </dd>
    <dt>Ear pain with pain when swallowing</dt>
    <dd><a href="/conditions/sore-throat">Sore throat</a></dd>
    <dd><a href="/conditions/tonsillitis">Tonsillitis</a></dd>
    <dd><a href="http://www.nhs.uk/Conditions/quinsy/pages/introduction.aspx">Quinsy</a></dd>
    <dt>Ear pain with a fever</dt>
    <dd><a href="/conditions/ear-infection">Ear infection</a></dd>
    <dd><a href="/conditions/flu">Flu</a></dd>
    <dd><a href="/conditions/cold">Cold</a></dd>
  </dl>
</div>

### How common a cause is

We are still working on this pattern and haven’t yet published the example below. Our clinician thinks that in its
current format it’s too definitive and would give a wrong impression.

However, we know from research that users want to know things like ‘do I have cancer’ and how likely that is.
Likeliness can be a very helpful indicator to put causes into context.

#### Example 5: how common a cause is
<div class="example">
  <h2>What causes coughs</h2>
  <p>Most coughs are caused by cold or flu.</p>
  <p>Other causes include:</p>
  <ul>
    <li>smoking</li>
    <li>allergies, for example hay fever</li>
    <li>infections like bronchitis</li>
    <li>mucus dripping down the throat from the back of the nose</li>
  </ul>
  <p>A cough is very rarely a sign of something serious like lung cancer.</p>
</div>

### Writing about prevention

We only include this information where there is a user need. We give users practical self-care information.

Where there is a specific need to prevent something from spreading we spell this out.

In user research people’s attention was drawn to Do/Don’t lists. They found them easy to scan and act on.

<div class="callout callout--info">
  <p><strong>Heading patterns:</strong><br> Preventing [condition]<br> You can’t always prevent [condition]</p>
</div>

#### Example 1: stop a condition from spreading
<div class="example">
  <h2>Stop infectious conjunctivitis from spreading</h2>
  <div class="panel">
    <div class="panel__content panel__content--half">
      <h3 id="do">Do</h3>
      <ul class="list--check">
        <li>wash hands regularly with warm soapy water</li>
        <li>wash pillows and face cloths in hot water and detergent</li>
      </ul>
    </div>
    <div class="panel__content panel__content--half">
      <h3 id="dont">Don’t</h3>
      <ul class="list--cross">
        <li>wear contact lenses until your eyes are better</li>
        <li>share towels and pillows</li>
        <li>rub your eyes</li>
      </ul>
    </div>
  </div>
</div>

#### Example 2: stop a condition from recurring
<div class="example">
  <div class="panel">
    <div class="panel__content panel__content--half">
      <h3 id="do">Do</h3>
      <ul class="list--check">
        <li>wash your face and remove eye makeup before bed</li>
        <li>replace your eye makeup every 6 months</li>
        <li>
          <a href="http://www.nhs.uk/Conditions/Blepharitis/Pages/Treatment.aspx">
            keep your eyelids and eyelashes clean
          </a> - especially if you have blepharitis
        </li>
      </ul>
    </div>
      <div class="panel__content panel__content--half">
        <h3 id="dont">Don’t</h3>
        <ul class="list--cross">
          <li>share towels or flannels with someone who has a stye</li>
          <li>rub your eyes if you haven’t recently washed your hands</li>
          <li>put contact lenses in before washing your hands</li>
        </ul>
      </div>
  </div>
</div>

### Writing about pain

Pain is often a benchmark of when to go and see a GP. When we started the project we used descriptions like ‘severe’
but found in user research that people struggle to understand what that means.

We now use plainer descriptions like:

* very painful
* you’re in a lot of pain
* extremely painful

We need to do more user research around this pattern. We are looking for better ways to help people describe how
bad their pain is. One idea could be a digital version of the 1 to 10 pain scale that doctors use.

#### Example 1: very painful
<div class="example">
  <section class="callout callout--attention">
    <h2>See a GP if your stye:</h2>
    <ul>
      <li>is very painful or swollen</li>
      <li>doesn’t get better within a few weeks</li>
      <li>affects your vision</li>
    </ul>
  </section>
</div>

#### Example 2: in a lot of pain
<div class="example">
  <section class="callout callout--attention">
    <h2>Go to a minor injuries unit or your GP if:</h2>
    <ul>
      <li>the injury isn’t feeling any better within a few days</li>
      <li>you’re still in a lot of pain and can’t put weight on the injured joint</li>
      <li>you can’t move the joint or muscle</li>
      <li>the injury is numb, discoloured or cold to touch</li>
    </ul>
  </section>
</div>

#### Example 3: extremely painful

<div class="example">
  <section class="callout callout--severe">
    <div class="reading-width">
      <h2>Call 999 or go to <abbr title="Accident and Emergency">A&amp;E</abbr> if you:</h2>
      <p>You hurt your head badly, for example from a fall or accident.</p>
      <p>It feels like the worst pain you’ve ever had and came on suddenly.</p>
    </div>
  </section>
</div>

***

## Patterns for elements

### Primary care box (GP, nurse, other services)

We use this for the symptoms that need treatment from a clinician. The easiest way to do this is a bullet list.

Where there is just one symptom or instance that needs treatment from a clinician, we make the whole sentence an H2.

We include other treatment options in the heading. For example:

* seeing a nurse
* using another service

We found that some services, like sexual health clinics, need more context because many users have
preconceptions about them.

Where there is a need we tell users why they should have something checked out. We keep this information to
a minimum so it doesn’t distract users from the main content in the box.

We have a separate section for [treatment from a GP](#example-2-gp-treatment).

<div class="callout callout--info">
  <p>
    <strong>Heading patterns:</strong><br>
    See a [person] if:<br> See a [person] if you: <br>See [person] or go to [service] if:
  </p>
  <p><strong>Link text pattern:</strong><br> Find a [place]</p>
</div>

We are still experimenting with how we direct users to out of hours service.
So far we haven’t seen any specific needs around this.

#### Example 1: see a GP
<div class="example">
  <section class="callout callout--attention">
    <h2>See your GP if:</h2>
    <ul>
      <li>your symptoms don’t improve after 7 days</li>
      <li>you’re worried about your child’s symptoms</li>
      <li>you’re 65 or over</li>
      <li>you’re pregnant</li>
      <li>you have a long-term medical condition – for example, diabetes or a heart, lung, kidney or neurological disease</li>
      <li>you have a weakened immune system – for example, because of chemotherapy or HIV</li>
    </ul>
  </section>
</div>

#### Example 2: see a nurse
<div class="example">
  <section class="callout callout--attention">
    <h2>See a nurse in your GP practice if:</h2>
    <ul>
      <li>your ear hasn’t cleared after 5 days</li>
      <li>your ear is badly blocked and you can’t hear anything (you can get an infection if it isn’t cleared)</li>
    </ul>
  </section>
</div>

#### Example 3: directing users to different services
<div class="example">
  <section class="callout callout--attention">
    <h2>See a GP or go to a sexual health clinic if:</h2>
    <ul>
      <li>you have the symptoms of thrush for the first time</li>
      <li>you’re under 16 or over 60</li>
      <li>your thrush keeps coming back (more than twice in 6 months)</li>
      <li>treatment hasn’t worked</li>
      <li>you’re pregnant or breastfeeding</li>
      <li>you have thrush and a weakened immune system - for example because of diabetes, HIV or chemotherapy</li>
    </ul>
  </section>
  <section class="callout callout--info">
    <h3>Sexual health clinics can help with thrush</h3>
    <p>Sexual health clinics treat problems with the genitals and urine system.</p>
    <p>
      Many sexual health clinics offer a walk-in service, where you don’t need an appointment.
      They’ll often get test results quicker than GP practices.
    </p>
    <p>
      <a href="http://www.nhs.uk/service-search/Sexual-health-information-and-support/LocationSearch/734">
        Find a sexual health clinic
      </a>
    </p>
  </section>
</div>

#### Example 4: directing users to out of hours service
<div class="example">
  <section class="callout callout--attention">
    <h2 id="see-a-gp-if-you-have">See a GP if you have:</h2>
    <ul>
      <li>a high temperature</li>
      <li>swelling around the ear</li>
      <li>fluid coming from the ear</li>
      <li>something stuck in the ear</li>
      <li>an earache for more than 3 days</li>
      <li>hearing loss or a change in hearing</li>
      <li>other symptoms, like vomiting or a severe sore throat</li>
    </ul>
    <p>
      If you can’t get an appointment, contact 111 or go to a
      <a href="http://www.nhs.uk/Service-Search/Walk-in%20centre/LocationSearch/663">walk-in centre</a>.
    </p>
  </section>
</div>

### Seeing someone urgently

This is for symptoms that need urgent medical care but not a 999 call.

We use bullet lists that can be easily scanned for keywords.

Where it’s not evident we give a reason why people should act quickly.

We tailor the heading around the specific condition but it needs to clearly say that it’s urgent.

<div class="callout callout--info">
  <p><strong>Heading patterns:</strong><br> See someone urgently if:<br> See a GP now or go to A&E if</p>
</div>

#### Example 1: GP or A&E
<div class="example">
  <section class="callout callout--alert">
    <h2>See a GP now or go to <abbr title="Accident and Emergency">A&amp;E</abbr> if:</h2>
    <ul>
      <li>your nosebleed lasts longer than 20 minutes</li>
      <li>the bleeding seems excessive</li>
      <li>you’re swallowing a large amount of blood that makes you vomit</li>
      <li>the bleeding started after a blow to your head</li>
      <li>you’re feeling weak or dizzy</li>
      <li>you’re having difficulty breathing</li>
    </ul>
  </section>
</div>

#### Example 2: urgent GP appointment (no A&E)
<div class="example">
  <section class="callout callout--alert">
    <h2>Ask for an urgent GP appointment if you have:</h2>
    <ul>
      <li>pain in your sides or lower back</li>
      <li>a high temperature (fever) of 38C or above</li>
      <li>shivering and chills</li>
      <li>felt sick or been sick</li>
      <li><a href="https://beta.nhs.uk/conditions/diarrhoea">diarrhoea</a></li>
    </ul>
    <p>These symptoms suggest a kidney infection, which can be serious if it isn’t treated.</p>
  </section>
</div>

#### Example 3: heading refers to children
<div class="example">
  <section class="callout callout--alert">
    <h2>Take your baby or toddler to the GP urgently if they:</h2>
    <ul>
      <li>have a high temperature and you can’t bring it down - over 38C (under 3 months), over 39C (3 to 6 months)</li>
      <li>have blood or mucus in their poo</li>
      <li>have severe tummy pain</li>
      <li>are getting worse quickly</li>
    </ul>
    <p>If you can’t get hold of your GP, go to <abbr title="Accident and Emergency">A&amp;E</abbr>.</p>
  </section>
</div>

### Emergency box

This is for symptoms that need immediate medical care. We use bullet lists.

We tailor the heading around the specific condition but always clearly state ‘Call 999 or go to A&E if:’.

<div class="callout callout--info">
  <p><strong>Heading patterns:</strong><br> Call 999 or go to A&E if:<br> Call 999 or go to A&E if you have X and:</p>
</div>

#### Example 1: general emergency box
<div class="example">
  <section class="callout callout--severe">
    <h2>Call 999 or go to <abbr title="Accident and Emergency">A&amp;E</abbr> if you:</h2>
    <ul>
      <li>have sudden, severe stomach pain</li>
      <li>have pain when you touch your stomach</li>
      <li>are vomiting blood or a ground coffee like substance</li>
      <li>have bloody or black, sticky poo</li>
      <li>have collapsed</li>
      <li>can’t breathe</li>
      <li>are unable to pee</li>
      <li>are diabetic and vomiting</li>
    </ul>
  </section>
</div>

#### Example 2: emergency box with reason why it’s urgent at the bottom
<div class="example">
  <section class="callout callout--severe">
    <h2>Call 999 or go to <abbr title="Accident and Emergency">A&amp;E</abbr> if:</h2>
    <ul>
      <li>you have difficulty swallowing or breathing</li>
      <li>you’re drooling</li>
      <li>your voice changes pitch or becomes wheezy</li>
      <li>your symptoms are severe and getting worse quickly</li>
    </ul>
    <p>These symptoms can make breathing more difficult.</p>
  </section>
</div>

### 111 callout

We currently use the following format and text:

#### Example:
<div class="example">
  <section class="callout callout--muted">
    <h2>Call 111</h2>
    <p>If you can’t speak to your GP or don’t know what to do next.</p>
  </section>
</div>

We have to do more work on this pattern. In user research many people didn’t know what 111 was. We also have
to think about the potential cost of sending everyone to this service before an online version is available.

### General callout box

We use this sparingly for:

* warnings, for example high risk groups for a specific condition
* things that users should act on
* general things to watch out for or do/don’t do

#### Example 1: high risks groups
<div class="example">
  <section class="callout callout--warning">
    <p>Babies, children and the elderly are more at risk of dehydration.</p>
  </section>
</div>

#### Example 2: things to look out for
<div class="example">
  <section class="callout callout--warning">
    <p>General rule: avoid anything that irritates your skin, for example, rubbing it when washing or picking spots.</p>
  </section>
</div>

#### Example 3: avoid callouts right under headings like this one
<div class="example">
  <h3>How much sleep you need</h3>
  <section class="callout callout--warning">
    <p>If you’re constantly tired during the day you don’t get enough sleep.</p>
  </section>
</div>

### Images

We sometimes use images to help users identify symptoms or causes.  

Images should clearly show the symptom. Where possible we also show variations or progression of a condition.

We add a 1 to 2 line caption to each image.

We don’t just put images to ‘enhance’ the page.

#### Example 1: variation of symptoms
<div class="example">
  <div class="media__container">
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/hand-foot-mouth-disease/mouth-ulcer-300.9230b1794e338016a2f36d86e8eb31fb.jpg 300w,https://beta.nhs.uk/assets/images/hand-foot-mouth-disease/mouth-ulcer-600.fb0536739cecd210ac5a05e0a4ff44c8.jpg 600w" alt="Mouth ulcer on a tongue" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>Ulcers appear in the mouth and on the tongue. These can be painful and make it difficult to eat or drink.</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/hand-foot-mouth-disease/rash-300.890366ed8a759c528ca0596ea67da6c5.jpg 300w,https://beta.nhs.uk/assets/images/hand-foot-mouth-disease/rash-600.3e65effb3b2688303e6c2f30d54ba855.jpg 600w" alt="Rash on a hand" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>Red spots usually appear on the hands and feet that will develop into blisters.</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/hand-foot-mouth-disease/blisters-300.095ddd62f42e9b7afad4760d49f27bb3.jpg 300w,https://beta.nhs.uk/assets/images/hand-foot-mouth-disease/blisters-600.adfa45016f0aff1405418f14c574c86a.jpg 600w" alt="Blister on small toe" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>The blisters are grey in the centre and can be painful.</p>
      </figcaption>
    </figure>
  </div>
</div>

#### Example 2: progression of symptoms
<div class="example">
  <div class="media__container">
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/fungal-nail-infection/stage-1-300.87c9e002024bfa0fd9427f34f69e8d41.jpg 300w,https://beta.nhs.uk/assets/images/fungal-nail-infection/stage-1-600.a932f21d0d0ddeb49424018e5a29953f.jpg 600w" alt="Fungal infection at the edge of the nail" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>Fungal nail infections usually start at the edge of the nail.</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/fungal-nail-infection/stage-2-300.cfbdf78f82c116f9887886bc3142b2b0.jpg 300w,https://beta.nhs.uk/assets/images/fungal-nail-infection/stage-2-600.60c2229326d8c79e182118b62e1d8f9e.jpg 600w" alt="Infection spread to the middle of the toe" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>They often then spread to the middle. The nail becomes discoloured and lifts off.</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img srcset="https://beta.nhs.uk/assets/images/fungal-nail-infection/stage-3-300.1006ef215cb499af569001ce532118ed.jpg 300w,https://beta.nhs.uk/assets/images/fungal-nail-infection/stage-3-600.24b36494887fd756b6ac0a9068d8edff.jpg 600w" alt="Brittle nail with pieces missing" data-analytics="image" data-analytics-type="figure">
      <figcaption class="media__caption">
        <p>The nail becomes brittle and pieces can break off. It can cause pain and swelling in the skin around the nail.</p>
      </figcaption>
    </figure>
  </div>
</div>

#### Example 3: identifying a cause
<div class="example">
  <h3>Your foot or toe looks different</h3>
  <div class="media__container">
    <figure class="media">
      <img src="../assets/symptoms/oedema-IrUb.jpeg" alt="Oedema">
      <figcaption class="media__caption">
        <p><a href="http://www.nhs.uk/Conditions/Oedema/Pages/Introduction.aspx">Oedema</a> symptoms: swelling, puffy skin, discoloured, feels hot and stiff</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img src="../assets/symptoms/gout-tp0U.jpeg" alt="Gout">
      <figcaption class="media__caption">
        <p><a href="http://www.nhs.uk/Conditions/Gout/Pages/Symptoms.aspx">Gout</a> symptoms: joint is so swollen, hot and tender that anything touching it hurts</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img src="../assets/symptoms/hammer-toe-rk6f.jpeg" alt="Hammer toe">
      <figcaption class="media__caption">
        <p>Hammer toe: symptoms: burning, aching, tingling, numbness</p>
      </figcaption>
    </figure>
    <figure class="media">
      <img src="../assets/symptoms/bunion-lB59.jpeg" alt="Bunion">
      <figcaption class="media__caption">
        <p><a href="http://www.nhs.uk/conditions/Bunion/Pages/Introduction.aspx">Bunion</a> symptoms: swelling, hard, callused and sore skin</p>
      </figcaption>
    </figure>
  </div>
</div>

### Comparing 2 things

We use comparison tables where 2 conditions have similar symptoms or where it helps people to compare symptoms.

<div class="callout callout--info">
  <p><strong>Heading pattern:</strong><br> Telling the difference between [condition] and [condition]</p>
</div>

#### Example:
<div class="example">
  <details class="" role="group" open="open">
    <summary data-analytics="summary" role="button" aria-controls="details-content-0" aria-expanded="false">
      <span class="details__summary">Telling the difference between cold and flu</span>
    </summary>
    <div id="details-content-0" aria-hidden="true">
      <p><a href="/conditions/cold#check-if-you-have-a-cold">Cold</a> and flu symptoms are similar but flu tends to be more severe.</p>
      <table>
        <thead>
          <tr>
            <th>Flu</th>
            <th>Cold</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Appears quickly within a few hours</td>
              <td>Appears gradually</td>
            </tr>
            <tr>
              <td>Affects more than just your nose and throat</td>
              <td>Affects mainly your nose and throat</td>
            </tr>
            <tr>
              <td>Makes you feel exhausted and too unwell to carry on as normal</td>
              <td>Makes you feel unwell but you’re okay to carry on as normal – for example, go to work</td>
            </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>

### Medicines content

We only include very basic medicines information in the condition content:

* what to take, for example painkillers
* how long to take it for
* when you should see a change, for example when the pain should go away

For more detailed information we link to Choices and will be linking to the medicines beta once it’s live.
If no content is available on either these sites we don’t include a link.

### Content for groups that aren’t ‘you’ (children, the elderly etc)

Generally, we address everyone as ‘you’. This includes the general user, carers, older people,
young adults and any other groups.

We only refer to other groups if there are specific actions for them.

We do these things:
* add anchor links to specific sections
* have separate sections for certain groups
* add callout boxes for specific groups

We avoid having separate pages for different groups, for example diarrhoea, diarrhoea in children. So far,
this has worked well. It makes the user journey simpler and future content maintenance more efficient.

#### Example 1: anchor links to direct people to the right bit (the adult and children pages on Choices were merged into one page)
<div class="example">
  <div class="local-header">
    <h1 class="local-header__title">Diarrhoea</h1>
    <div class="local-header__intro">
      <p>Diarrhoea usually goes away on it’s own within a few days. Make sure you or your child drink plenty of fluids.</p>
      <ul class="link-list">
        <li><a href="#how-you-can-treat-diarrhoea-yourself" data-analytics="anchor">Adults with diarrhoea</a></li>
        <li><a href="#babies-and-toddlers-treating-diarrhoea" data-analytics="anchor">Babies and toddlers with diarrhoea</a></li>
        <li><a href="#how-long-diarrhoea-lasts" data-analytics="anchor">How long diarrhoea lasts</a></li>
        <li><a href="#what-causes-diarrhoea" data-analytics="anchor">What causes diarrhoea</a></li>
        <li><a href="#you-cant-always-prevent-diarrhoea" data-analytics="anchor">Preventing diarrhoea</a></li>
      </ul>
    </div>
  </div>
</div>

#### Example 2: treatment for a separate group
<div class="example">
  <h2 id="babies-and-toddlers-treating-diarrhoea">Babies and toddlers: treating diarrhoea</h2>
  <p>
    You can often safely look after your baby or toddler at home. However it’s very important to watch out
    for signs of dehydration.
  </p>
  <p>
    Babies and toddlers can become dehydrated more quickly than older children when they have diarrhoea and
    vomiting. If dehydration becomes severe it can be dangerous, particularly in young babies.
  </p>
  <div class="panel">
    <div class="panel__content panel__content--half">
    <h3 id="do">Do</h3>
    <ul class="list--check">
      <li>
        give them enough to drink in small sips - they
        <a href="/conditions/dehydration#check-if-youre-dehydrated">dehydrate very quickly</a>
      </li>
      <li>continue breastfeeding or formula as normal</li>
      <li>to ease the pain you can give liquid paracetamol for children</li>
      <li>if your child is eating solid foods, offer them their usual food if they want it</li>
    </ul>
    </div>
    <div class="panel__content panel__content--half">
      <h3 id="dont">Don’t</h3>
      <ul class="list--cross">
        <li>give them medicines to stop the diarrhoea</li>
        <li>give them fruit juice and fizzy drinks (they can make the diarrhoea worse)</li>
      </ul>
    </div>
  </div>
</div>

#### Example 3: when to see a GP or get urgent care
<div class="example">
  <section class="callout callout--alert">
    <h2>Take your baby or toddler to the GP urgently if they:</h2>
    <ul>
      <li>have a high temperature and you can’t bring it down - over 38C (under 3 months), over 39C (3 to 6 months)</li>
      <li>have blood or mucus in their poo</li>
      <li>have severe tummy pain</li>
      <li>are getting worse quickly</li>
    </ul>
    <p>If you can’t get hold of your GP, go to <abbr title="Accident and Emergency">A&amp;E</abbr>.</p>
  </section>
</div>

### Step-by-step lists

Where users should follow a number of actions in a certain order, we use step-by-step lists.

They’re often ‘How to do X’ lists.

We don’t use them just for the sake of it. There should be a definite order behind the steps.

#### Example 1: how to do list
<div class="example">
  <details class="" role="group" open="open">
    <summary data-analytics="summary" role="button" aria-controls="details-content-0" aria-expanded="true">
      <span class="details__summary">How to gargle with salt water</span>
    </summary>
    <div id="details-content-0" aria-hidden="false">
      <ol>
        <li>Dissolve half a teaspoon of salt in a glass of warm water - warm water helps salt dissolve.</li>
        <li>Gargle with the solution then spit it out - don’t swallow it.</li>
        <li>Repeat as often as you like.</li>
      </ol>
    </div>
  </details>
</div>

#### Example 2: treatment list
<div class="example">
  <h2 id="treatment-from-your-gp">Treatment from your GP</h2>
  <p>Broadly, treatment works in 3 main steps:</p>
  <ol>
    <li>
      <strong>Pain relief</strong> - avoid movements that cause you pain. Only move your shoulder gently.
      Use paracetamol or ibuprofen to ease the pain.
    </li>
    <li>
      <strong>Stronger pain and swelling relief</strong> - prescribed painkillers.
      Maybe steroid injections in your shoulder to bring down the swelling.
    </li>
    <li>
      <strong>Getting movement back</strong> - shoulder exercises once it’s less painful.
      This can be at home or with a physiotherapist.
    </li>
  </ol>
</div>

### Links

#### Wording and punctuation

Links should have a clear action. Full stops go outside the link text.

#### Example:

<div class="example">
  <p>
    If you can’t get an appointment, contact 111 or
    <a href="http://www.nhs.uk/Service-Search/Walk-in%20centre/LocationSearch/663">go to a walk-in centre</a>.
  </p>
</div>

#### Number of links on a page

We don’t overload pages with links. For example we avoid long link lists to causes.

Instead we meet user needs on the page and give context where we link out, for example by adding the most
common symptoms.

#### Example:
<div class="example">
  <table>
    <thead>
      <tr>
        <th>Discharge</th>
        <th>Possible cause</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>smells fishy</td>
        <td><a href="/conditions/bacterial-vaginosis">bacterial vaginosis</a></td>
      </tr>
      <tr>
        <td>thick and white (like cottage cheese)</td>
        <td><a href="/conditions/thrush">thrush</a></td>
      </tr>
      <tr>
        <td>green, yellow or frothy</td>
        <td><a href="http://www.nhs.uk/Conditions/Trichomonas_vaginalis/Pages/Introduction.aspx">trichomoniasis</a></td>
      </tr>
      <tr>
        <td>with pelvic pain [or bleeding]</td>
        <td>
          <a href="http://www.nhs.uk/Conditions/chlamydia/Pages/Introduction.aspx">chlamydia</a> or
          <a href="http://www.nhs.uk/Conditions/Gonorrhoea/Pages/Introduction.aspx">gonorrhoea</a>
        </td>
      </tr>
      <tr>
        <td>with blisters or sores</td>
        <td><a href="http://www.nhs.uk/Conditions/genital-herpes/Pages/Introduction.aspx">genital herpes</a></td>
      </tr>
    </tbody>
  </table>
</div>

### Linking out to other organisations

Where other reputable organisations cover bits of content we link out to them instead of duplicating what they do.

For example we link to dietary information on Diabetes UK from our type 2 diabetes guide.
