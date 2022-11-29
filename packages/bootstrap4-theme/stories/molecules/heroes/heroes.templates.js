import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics.js';

const extraOptions = {
  size: {
    name: 'Size',
    options: ['uds-hero-sm', 'uds-hero-md', 'uds-hero-lg'],
    defaultValue: 'uds-hero-sm',
    control: {
      type: 'radio',
      labels: {
        'uds-hero-sm': 'Small',
        'uds-hero-md': 'Medium',
        'uds-hero-lg': 'Large',
      },
    },
  },
};

export default createComponent(
  'Heroes',
  'Molecules',
  'Templates',
  extraOptions
);

export const HeroSmallOneButton = createStory(
  (args) => {
    return (
      <div class={`${args.size} has-btn-row`}>
        <div className="hero-overlay"></div>
        <img
          class="hero"
          src="https://i.picsum.photos/id/862/1920/512.jpg?hmac=PR_SqkJ9Ls8J-KZPWNPTm6tJCwP8VocQyD8RvLDxjrM"
          alt="Sample placeholder image."
        />
        <h1>
          <span class="highlight-white">
            Lorem ipsum dolor sit amet, consectetur adip
          </span>
        </h1>
        <div class="btn-row">
          <a
            href="#"
            class="btn btn-maroon btn-responsive"
            data-ga="Call to action"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-secion="the new american university"
          >
            First Call to Action
          </a>
        </div>
      </div>
    );
  },
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroSmallOneButton.args = {
  template: 0,
};

export const HeroSmallTwoButtons = createStory(
  (args) => {
    return (
      <div class={`${args.size} has-btn-row`}>
        <div className="hero-overlay"></div>
        <img
          class="hero"
          src="https://i.picsum.photos/id/862/1920/512.jpg?hmac=PR_SqkJ9Ls8J-KZPWNPTm6tJCwP8VocQyD8RvLDxjrM"
          alt="Sample placeholder image."
        />
        <h1>
          <span class="highlight-gold">Gettysburg Address</span>
        </h1>
        <div class="content">
          <p class="text-white">
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal.
          </p>
        </div>
        <div class="btn-row">
          <a
            href="#"
            class="btn btn-default btn-maroon btn-responsive"
            data-ga="Read more"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-section="gettysburg address"
          >
            Read more
          </a>
          <a
            href="#"
            class="btn btn-default btn-gold btn-responsive"
            data-ga="More quotes"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-section="gettysburg address"
          >
            More quotes
          </a>
        </div>
      </div>
    );
  },
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroSmallTwoButtons.args = {
  template: 0,
};

export const StoryHero = createStory(
  <section class="uds-story-hero">
    <img
      class="hero"
      src="https://i.picsum.photos/id/862/1920/512.jpg?hmac=PR_SqkJ9Ls8J-KZPWNPTm6tJCwP8VocQyD8RvLDxjrM"
      alt="Be sure to include alt text in your image tag."
    />
    <div class="content">
      <nav aria-label="breadcrumbs">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Second Nav Item</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <a href="#">Current Page</a>
          </li>
        </ol>
      </nav>
      <h1 class="article">
        ASU is measured not by whom we exclude, but rather by whom we include
        and how they succeed.
      </h1>
    </div>
  </section>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
StoryHero.args = {
  template: 0,
};
