import lauermanDevImg from 'assets/lauerman-dev.png';
import paletteImg from 'assets/palette.png';
import clicheLocatorImg from 'assets/cliche-locator.png';

/**
 * Data representing a single project.
 * @typedef {Object} Project
 * @property {string} image A preview image of the project
 * @property {string} title The title of the project
 * @property {string} date The date of the project's development
 * @property {string} description A brief description of the project
 * @property {string} link A link to more information about the project
 * @property {string} linkTitle The title for the button to follow `link`
 */

/**
 * @type {Project[]}
 */
const projects = [
  {
    image: lauermanDevImg,
    title: "lauerman.dev",
    date: "2016 - Present",
    description: "Lauerman.dev is this website! I've been working on it since 2016 in different forms. This most recent iteration was built in React. I wrote the whole thing in Javascript and deployed it through GitHub Pages.",
    link: "https://github.com/tempixtl/tempixtl.github.io/",
    linkTitle: "View on GitHub",
  },
  {
    image: paletteImg,
    title: "palette: colorful puzzles",
    date: "June 2017 - August 2018",
    description: "Palette is a free, 2D, touch-based puzzle game I made in my spare time with Swift and SpriteKit for use on iOS devices. I released it to the App Store in the summer of 2017 and it has since amassed over 5k downloads.",
    link: "https://apps.apple.com/us/app/id1403062573",
    linkTitle: "View on App Store",
  },
  {
    image: clicheLocatorImg,
    title: "Cliché Locator",
    date: "October 2017",
    description: "Cliché Locator is a tool for writers to find Clichés in their writing to make it more unique. It was inspired by a class I took my freshman year at Trinity University called 'Creative Genius.'",
    link: "http://cs.trinity.edu/~tlauerma/cliche-locator",
    linkTitle: "View Webpage",
  },
];

export default projects;
