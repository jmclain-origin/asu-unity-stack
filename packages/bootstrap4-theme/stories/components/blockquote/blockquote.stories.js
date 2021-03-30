export default { title: 'Components/Blockquotes and Testimonials' };

export const blockquoteNoImage = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-8">

        <div class="uds-blockquote accent-maroon">
          <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
          </svg>
          <blockquote>
            <p>We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.</p>
            <div class="citation">
              <cite class="name">Thomas Jefferson</cite>
              <cite class="description">The Declaration of Independence</cite>
            </div>
          </blockquote>
        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->

    <div class="row pt-6">
      <div class="col-md-8">

        <div class="wrapper p-6 bg-gray-7">

          <div class="uds-blockquote accent-gold text-white">
            <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
            </svg>
            <blockquote>
              <p>Four score and seven years ago our fathers brought forth upon this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</p>
              <div class="citation">
                <cite class="name">Abraham Lincoln</cite>
                <cite class="description">Gettysburg Address</cite>
              </div>
            </blockquote>
          </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;

export const blockquoteWithImage = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-8">

        <div class="uds-blockquote accent-gold with-image">
          <img src="https://placeimg.com/400/400/any" alt="Pretend this is Michael M. Crow, President of ASU"/>
          <blockquote>
            <p>ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.</p>
            <div class="citation">
              <cite class="name">Michael M. Crow</cite>
              <cite class="description">ASU Charter</cite>
            </div>
          </blockquote>
        </div>

      </div>
    </div>

    <div class="row mt-6">
      <div class="col-md-10">

        <div class="wrapper p-6 bg-gray-2">

          <div class="uds-blockquote with-image reversed">
            <img src="https://placeimg.com/300/300/any" alt="Pretend this is Michael M. Crow, President of ASU"/>
            <blockquote>
              <p>Eight design aspirations guide the ongoing evolution of ASU as a New American University. These institutional objectives are integrated in innovative ways throughout the university to achieve excellence, access and impact.</p>
              <div class="citation">
                <cite class="name">Michael M. Crow</cite>
                <cite class="description">ASU Charter</cite>
              </div>
            </blockquote>
          </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;

export const blockquoteNoCitation = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-8">

        <div class="uds-blockquote no-cite with-image">
          <img src="https://placeimg.com/300/300/nature" alt="Image of Walt Disney"/>
          <blockquote>
            <h3><span class="highlight-black">Walt Disney</span></h3>
            <p>Laughter is timeless, imagination has no age, dreams are forever.</p>
          </blockquote>
        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->

    <div class="row pt-6">
      <div class="col-md-8">

        <div class="wrapper p-6 bg-gray-7">

        <div class="uds-blockquote no-cite with-image reversed">
          <img src="https://placeimg.com/300/300/tech" alt="Image of Walt Disney"/>
          <blockquote>
            <h3><span class="highlight-gold">Walt Disney</span></h3>
            <p class="text-white">We keep opening new doors and doing new things, because we’re curious and curiosity keeps leading us down new paths.</p>
          </blockquote>
        </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;

export const blockquoteAltCitation = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-8">

        <div class="uds-blockquote alt-citation accent-gold">
          <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
          </svg>
          <blockquote>
            <p>Some people want it to happen, some people wish it would happen and some people make it happen.</p>
            <div class="citation">
              <cite class="name">Michael Jordan</cite>
            </div>
          </blockquote>
          <svg title="Close quote" role="presentation" viewBox="0 0 191 150">
            <path d="M135.851,23.1h68.8V72.855q0,30.049-5.264,47.291T179.8,151.3q-14.323,13.916-36.115,21.8l-13.466-28.818q20.567-6.9,29.5-19.212T168.9,92.313H135.851Zm-115.567,0h68.8V72.855q0,30.049-5.142,47.291T64.478,151.3q-14.323,13.916-36.36,21.8L14.652,144.284q20.812-6.9,29.626-19.212t9.3-32.759h-33.3Z" transform="translate(-13.652 -23.102)"/>
          </svg>
        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->

    <div class="row pt-6">
      <div class="col-md-9">

        <div class="wrapper p-6 bg-gray-2">

          <div class="uds-blockquote alt-citation accent-maroon">
            <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
            </svg>
            <blockquote>
              <p>Talent wins games, but teamwork and intelligence wins championships.</p>
              <div class="citation">
                <cite class="name">Michael Jordan</cite>
              </div>
            </blockquote>
            <svg title="Close quote" role="presentation" viewBox="0 0 191 150">
              <path d="M135.851,23.1h68.8V72.855q0,30.049-5.264,47.291T179.8,151.3q-14.323,13.916-36.115,21.8l-13.466-28.818q20.567-6.9,29.5-19.212T168.9,92.313H135.851Zm-115.567,0h68.8V72.855q0,30.049-5.142,47.291T64.478,151.3q-14.323,13.916-36.36,21.8L14.652,144.284q20.812-6.9,29.626-19.212t9.3-32.759h-33.3Z" transform="translate(-13.652 -23.102)"/>
            </svg>
          </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;


export const testimonialsNoImage = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-6">

        <div class="uds-blockquote uds-testimonial alt-citation accent-gold">
          <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
          </svg>
          <blockquote>
            <p>Computers make excellent and efficient servants, but I have no wish to serve under them.</p>
            <div class="citation">
              <cite class="name">Spock</cite>
              <cite class="description">First officer, USS Enterprise</cite>
            </div>
          </blockquote>
        </div>

      </div>
    </div>

    <div class="row mt-6">
      <div class="col-md-8">

        <div class="wrapper p-6 bg-gray-1">

          <div class="uds-blockquote uds-testimonial alt-citation accent-maroon">
            <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
            </svg>
            <blockquote>
              <p>I could not deprive you of the revelation of all that you could accomplish together, of a friendship that will define you both in ways you cannot yet realize.</p>
              <div class="citation">
                <cite class="name">Spock</cite>
                <cite class="description">First officer, USS Enterprise</cite>
              </div>
            </blockquote>
          </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;

export const testimonialsWithImage = () => `
  <div class="container">
    <div class="row">
      <div class="col-md-6">

        <div class="uds-blockquote uds-testimonial with-image alt-citation accent-maroon">
          <img src="https://placeimg.com/400/400/arch" alt="Pretend this is Han Solo"/>
          <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
          </svg>
          <blockquote>
            <p>Hokey religions and ancient weapons are no match for a good blaster at your side, kid.</p>
            <div class="citation">
              <cite class="name">Han Solo</cite>
            </div>
          </blockquote>
        </div>

      </div>
    </div>

    <div class="row mt-6">
      <div class="col-md-8">

        <div class="wrapper p-6 bg-gray-7">

          <div class="uds-blockquote uds-testimonial with-image alt-citation accent-gold text-white">
            <img src="https://placeimg.com/400/400/tech" alt="Pretend this is Han Solo"/>
            <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
              <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
            </svg>
            <blockquote>
              <p>I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it. It’s all true.</p>
              <div class="citation">
                <cite class="name">Han Solo</cite>
              </div>
            </blockquote>
          </div>

        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;
