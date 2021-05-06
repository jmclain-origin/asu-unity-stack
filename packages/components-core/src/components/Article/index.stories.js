/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { Article } from ".";

export default {
  title: "UDS/Article",
  component: Article,
  parameters: {
    docs: {
      description: {
        component: `The Article component can be used to generate UDS-compliant news and event articles.

## Usage

By default, the Article component will output the news layout.  When "event" is passed to the "type" prop, Article will generate the event layout.

The following props are only rendered for the event layout:
        • calendarUrl
        • eventTime
        • eventLocation
        • registrationUrl
        • zoomUrl

The following prop is only rendered for the news layout:
        • headerImageUrl

View component examples and source code below.
        `,
      },
    },
  },
  argTypes: {
    type: {
      type: "inline-radio",
      options: ["event", "news"],
    },
  },
};

const Template = args => <Article {...args} />;

export const News = Template.bind({});
News.args = {
  type: "news",
  articleUrl: "https://example.com",
  headerImageUrl: "https://source.unsplash.com/random/1920x512",
  title:
    "Clarisse Machanguana takes her skill set to the next level at ASU Thunderbird",
  publicationDate: "March 18, 2021",
  authorName: "Jimena Garrison",
  authorTitle: "Media Relations and Strategic Communications",
  authorEmail: "jgarris6@asu.edu",
  authorPhone: "480-727-4058",
  body:
    "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p><div class='caption caption-center panopoly-image-full'><div class='caption-width-container' style='width: auto;'><div class='caption-inner'><img alt='The Clarisse Machanguana Foundation is empowering Mozambican youth through health, education and sports programs.' title='The Clarisse Machanguana Foundation is empowering Mozambican youth through health, education and sports programs.' class='media-element file-responsive-image panopoly-image-full' data-delta='1' typeof='foaf:Image' src='https://live-asu-news.ws.asu.edu/sites/default/files/styles/panopoly_image_full/public/sev_gaza_school_event-42.jpg?itok=_frL8QiI'><p class='caption-text'>The Clarisse Machanguana Foundation is empowering Mozambican youth through health, education and sports programs. Photo courtesy Clarisse Machanguana Foundation</p></div></div></div><p><strong>Q: Do you ever pick up a ball now?</strong></p><p><strong>A: </strong>No (laughter). When I was done, I was done.</p><p><strong>Q: What made you focus on youth?</strong></p><p><strong>A: </strong>Two reasons mainly. First, it’s where we can make the biggest impact. Mozambique is so affected by HIV, and yet it is considered by many “cool” to have more than one woman, as a status symbol. There are small cultures where they allow girls as young as 10 or 11 to get married, which raises the rates of HIV. It is so difficult to change the behavior of an adult who has been set in their ways for a long time. It is easier to work with a young girl or boy who hasn’t been influenced past the point of changing behavior.</p><p>Second, most African countries live in poverty due to corruption and a lack of education. If you can instill values in younger people, it will take a long time, but you are creating a future populace with these skills and values. You can change a nation this way, one child at a time.</p><p><strong>Q: Why Thunderbird at ASU?</strong></p><p><strong>A: </strong>Thunderbird at ASU speaks to me as I have cultivated relationships with people from other cultures throughout my life through sports and travel, and I have found that it is one of the best gifts you can have, to be able to relate to people of other cultures. And that pushed Thunderbird over the edge. It is academically strong and technologically strong, and the fact that it is a hub for international students and Americans, this worldwide unity is an example of what life is about. You will not leave alone. You will encounter people of different backgrounds, and the earlier you learn to interact, excel and encourage others to do this, that is the best situation you can be in. </p><p><strong>Q: What is something you have learned from your peers at Thunderbird?</strong></p><p><strong>A: </strong>The mentality of the cohort, that we are in this together; they are willing to help. In the athletic world, it is all about you. It’s about competing with others, and here, you have to be good at what you do, but that doesn’t mean leaving others behind. It’s a matter of working together. By facilitating another person’s life, you are also going forward. It’s almost a family environment in the cohort. We are different but one. </p><p><strong>Q: What classes or faculty stood out to you or helped shape how you lead your nonprofit?</strong></p><p><span><strong>A:</strong> </span><a href='https://thunderbird.asu.edu/allen-j-morrison'>Dr. Allen Morrison</a>, who teaches leadership, shared that the leader of an organization often has the most difficulty explaining what their organization does. When you are a leader, you are often delegating and you fail to know everything. A leader should be able to communicate with the people below and also with the outside. </p><p>A course on cross-cultural communication with <a href='https://thunderbird.asu.edu/mansour-javidan'>Dr. Mansour Javidan</a> brought to light that sometimes we think that if we are both speaking English we should be able to communicate fine, but the language is only a small piece of communication. I’ve been using what I learn in this class every day as the leader of a nonprofit organization that works across borders.</p><p><strong>Q: What is a moment you have felt successful?</strong></p><p><strong>A:</strong> I wouldn’t say I feel successful, but I felt deeply grateful when we did an HIV campaign that brought awareness to the stigma surrounding HIV. We used social influencers in Mozambique to talk about HIV. We featured a mother and daughter who were HIV-positive but were healthy because they were taking the right treatment. Some people think about people with HIV as very sick, but it was successful because people were able to see healthy faces of HIV and realize that if they do the treatment they can live a normal life. It felt like we broke a barrier and that people were speaking about it in a different light. </p><p>We noticed that some of the people who were stigmatizing were the people who could be a voice of change, like professors and medical professionals who were in a position to create positive change through destigmatization.</p><p><strong>Q: If you weren’t running a nonprofit, what would you be doing?</strong></p><p><span><strong>A:</strong> </span>I would be a life coach. I enjoy the opportunity to inspire and break barriers people may have. It’s interesting to me because, in Africa, people who are less educated rely on their beliefs in witchcraft. They might think they will fail if they don’t have the right witchcraft if their life doesn’t go accordingly. So if I could give young boys and girls the right tools to face a challenge, that’s so important. I believe in the power of words.</p><div class='caption caption-center panopoly-image-full'><div class='caption-width-container' style='width: auto;'><div class='caption-inner'><img alt='Clarisse has held events around the world to advocate for young people.' title='Clarisse has held events around the world to advocate for young people.' class='media-element file-responsive-image panopoly-image-full' data-delta='2' typeof='foaf:Image' src='https://live-asu-news.ws.asu.edu/sites/default/files/styles/panopoly_image_full/public/sev_chiure_school_fb_photos_june_15_full_album-2.jpg?itok=l1jJnEn1'><p class='caption-text'>Clarisse Machanguana has held events around the world to advocate for young people. Photo courtesy Clarisse Machanguana Foundation</p></div></div></div><p><strong>Q: Do you have advice for incoming Thunderbirds on how to make the most of your Thunderbird experience?</strong></p><p><strong>A:</strong> Focus on studying, but set time apart to understand the tools the school has to enhance your experience. I like to maximize my grades, but sometimes that focus can detract from the other things the school has to offer. You can learn from interacting with others, you can learn from networking, you can learn from Thunderbird’s Career Management Center — there are so many resources the school offers that can facilitate your growth. Participate in events, stay informed on the events going on and about what is happening related to your field. </p><p>I also recommend that international students identify international organizations and companies operating in their country, find them in the U.S., and try to network and work with them, so you have a bridge for when you go back to your own country, to have a potential job. </p><p><strong>Q: March is Women’s History Month in the U.S. — what is your advice specifically to women?</strong></p><p><strong>A: </strong>Find a way to represent your beliefs, starting in school, so that it becomes a practice. There are opportunities at Thunderbird like \"Women in Business\" that are great for understanding this scope even if your main passion isn’t business. Find out what interests you, find how to position your voice to be heard, make yourself visible. Sometimes we shy away or don’t strongly believe we will be validated for what we are good at. The world needs far more women leaders. When women are bold, everyone wins. </p><p><em>Written by graduate student writer Christina Furst.</em></p><p><em>Top photo: Clarisse Machanguana speaks to a group of school children at a foundation event. Photo courtesy Clarisse Machanguana Foundation</em></p></p>",
};

export const Event = Template.bind({});
Event.args = {
  type: "event",
  articleUrl: "https://example.com",
  title:
    "ASU Book Group: 'There's No Crying in Newsrooms' by Kristin Grady Gilger and Julia Wallace",
  publicationDate: "March 18, 2021",
  authorName: "Jackie Young",
  authorTitle: "ASU Library",
  authorEmail: "jacqueline.young@asu.edu",
  authorPhone: "480-727-4058",
  eventTime: "November 33, 2030,<br />12:00 p.m. - 1:30 p.m.",
  eventLocation:
    "Vault Gallery, Downtown Phoenix campus Library<br />411 N Central Ave, Phoenix AZ 85004",
  registrationUrl: "https://www.aventri.com/",
  zoomUrl: "https://zoom.com",
  calendarUrl: "#",
  body:
    "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p><div class='caption caption-center panopoly-image-full'><div class='caption-width-container' style='width: auto;'><div class='caption-inner'><img alt='The Clarisse Machanguana Foundation is empowering Mozambican youth through health, education and sports programs.' title='The Clarisse Machanguana Foundation is empowering Mozambican youth through health, education and sports programs.' class='media-element file-responsive-image panopoly-image-full' data-delta='1' typeof='foaf:Image' src='https://live-asu-news.ws.asu.edu/sites/default/files/styles/panopoly_image_full/public/sev_gaza_school_event-42.jpg?itok=_frL8QiI'><p class='caption-text'>The Clarisse Machanguana Foundation is empowering Mozambican youth through health, education and sports programs. Photo courtesy Clarisse Machanguana Foundation</p></div></div></div><p><strong>Q: Do you ever pick up a ball now?</strong></p><p><strong>A: </strong>No (laughter). When I was done, I was done.</p><p><strong>Q: What made you focus on youth?</strong></p><p><strong>A: </strong>Two reasons mainly. First, it’s where we can make the biggest impact. Mozambique is so affected by HIV, and yet it is considered by many “cool” to have more than one woman, as a status symbol. There are small cultures where they allow girls as young as 10 or 11 to get married, which raises the rates of HIV. It is so difficult to change the behavior of an adult who has been set in their ways for a long time. It is easier to work with a young girl or boy who hasn’t been influenced past the point of changing behavior.</p><p>Second, most African countries live in poverty due to corruption and a lack of education. If you can instill values in younger people, it will take a long time, but you are creating a future populace with these skills and values. You can change a nation this way, one child at a time.</p><p><strong>Q: Why Thunderbird at ASU?</strong></p><p><strong>A: </strong>Thunderbird at ASU speaks to me as I have cultivated relationships with people from other cultures throughout my life through sports and travel, and I have found that it is one of the best gifts you can have, to be able to relate to people of other cultures. And that pushed Thunderbird over the edge. It is academically strong and technologically strong, and the fact that it is a hub for international students and Americans, this worldwide unity is an example of what life is about. You will not leave alone. You will encounter people of different backgrounds, and the earlier you learn to interact, excel and encourage others to do this, that is the best situation you can be in. </p><p><strong>Q: What is something you have learned from your peers at Thunderbird?</strong></p><p><strong>A: </strong>The mentality of the cohort, that we are in this together; they are willing to help. In the athletic world, it is all about you. It’s about competing with others, and here, you have to be good at what you do, but that doesn’t mean leaving others behind. It’s a matter of working together. By facilitating another person’s life, you are also going forward. It’s almost a family environment in the cohort. We are different but one. </p><p><strong>Q: What classes or faculty stood out to you or helped shape how you lead your nonprofit?</strong></p><p><span><strong>A:</strong> </span><a href='https://thunderbird.asu.edu/allen-j-morrison'>Dr. Allen Morrison</a>, who teaches leadership, shared that the leader of an organization often has the most difficulty explaining what their organization does. When you are a leader, you are often delegating and you fail to know everything. A leader should be able to communicate with the people below and also with the outside. </p><p>A course on cross-cultural communication with <a href='https://thunderbird.asu.edu/mansour-javidan'>Dr. Mansour Javidan</a> brought to light that sometimes we think that if we are both speaking English we should be able to communicate fine, but the language is only a small piece of communication. I’ve been using what I learn in this class every day as the leader of a nonprofit organization that works across borders.</p><p><strong>Q: What is a moment you have felt successful?</strong></p><p><strong>A:</strong> I wouldn’t say I feel successful, but I felt deeply grateful when we did an HIV campaign that brought awareness to the stigma surrounding HIV. We used social influencers in Mozambique to talk about HIV. We featured a mother and daughter who were HIV-positive but were healthy because they were taking the right treatment. Some people think about people with HIV as very sick, but it was successful because people were able to see healthy faces of HIV and realize that if they do the treatment they can live a normal life. It felt like we broke a barrier and that people were speaking about it in a different light. </p><p>We noticed that some of the people who were stigmatizing were the people who could be a voice of change, like professors and medical professionals who were in a position to create positive change through destigmatization.</p><p><strong>Q: If you weren’t running a nonprofit, what would you be doing?</strong></p><p><span><strong>A:</strong> </span>I would be a life coach. I enjoy the opportunity to inspire and break barriers people may have. It’s interesting to me because, in Africa, people who are less educated rely on their beliefs in witchcraft. They might think they will fail if they don’t have the right witchcraft if their life doesn’t go accordingly. So if I could give young boys and girls the right tools to face a challenge, that’s so important. I believe in the power of words.</p><div class='caption caption-center panopoly-image-full'><div class='caption-width-container' style='width: auto;'><div class='caption-inner'><img alt='Clarisse has held events around the world to advocate for young people.' title='Clarisse has held events around the world to advocate for young people.' class='media-element file-responsive-image panopoly-image-full' data-delta='2' typeof='foaf:Image' src='https://live-asu-news.ws.asu.edu/sites/default/files/styles/panopoly_image_full/public/sev_chiure_school_fb_photos_june_15_full_album-2.jpg?itok=l1jJnEn1'><p class='caption-text'>Clarisse Machanguana has held events around the world to advocate for young people. Photo courtesy Clarisse Machanguana Foundation</p></div></div></div><p><strong>Q: Do you have advice for incoming Thunderbirds on how to make the most of your Thunderbird experience?</strong></p><p><strong>A:</strong> Focus on studying, but set time apart to understand the tools the school has to enhance your experience. I like to maximize my grades, but sometimes that focus can detract from the other things the school has to offer. You can learn from interacting with others, you can learn from networking, you can learn from Thunderbird’s Career Management Center — there are so many resources the school offers that can facilitate your growth. Participate in events, stay informed on the events going on and about what is happening related to your field. </p><p>I also recommend that international students identify international organizations and companies operating in their country, find them in the U.S., and try to network and work with them, so you have a bridge for when you go back to your own country, to have a potential job. </p><p><strong>Q: March is Women’s History Month in the U.S. — what is your advice specifically to women?</strong></p><p><strong>A: </strong>Find a way to represent your beliefs, starting in school, so that it becomes a practice. There are opportunities at Thunderbird like \"Women in Business\" that are great for understanding this scope even if your main passion isn’t business. Find out what interests you, find how to position your voice to be heard, make yourself visible. Sometimes we shy away or don’t strongly believe we will be validated for what we are good at. The world needs far more women leaders. When women are bold, everyone wins. </p><p><em>Written by graduate student writer Christina Furst.</em></p><p><em>Top photo: Clarisse Machanguana speaks to a group of school children at a foundation event. Photo courtesy Clarisse Machanguana Foundation</em></p></p>",
};
Event.parameters = {
  docs: {
    description: {
      story: `

    <Article
      articleUrl="https://example.com"
      authorEmail="jacqueline.young@asu.edu"
      authorName="Jackie Young"
      authorPhone="480-727-4058"
      authorTitle="ASU Library"
      body="<p>Body content</p>"
      calendarUrl="#"
      eventLocation="Vault Gallery, Downtown Phoenix campus Library<br />411 N Central Ave, Phoenix AZ 85004"
      eventTime="November 33, 2030,<br />12:00 p.m. - 1:30 p.m."
      publicationDate="March 18, 2021"
      registrationUrl="https://www.aventri.com/"
      title="ASU Book Group: 'There's No Crying in Newsrooms' by Kristin Grady Gilger and Julia Wallace"
      type="event"
      zoomUrl="https://zoom.com"
    />`,
    },
  },
};
