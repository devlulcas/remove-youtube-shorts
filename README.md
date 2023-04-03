
![CHROME](https://img.shields.io/static/v1?label=CHROME&labelColor=%23ffffff&message=EXTENSION&color=%23db0606&style=flat-square&logo=GOOGLECHROME&logoColor=%23fc1313)
![JS](https://img.shields.io/static/v1?label=BASIC&labelColor=%23ffffff&message=JAVASCRIPT&color=%23db0606&style=flat-square&logo=JAVASCRIPT&logoColor=%23fc1313)
![CSS](https://img.shields.io/static/v1?label=COOL&labelColor=%23ffffff&message=CSS&color=%23db0606&style=flat-square&logo=CSS3&logoColor=%23fc1313)


# REMOVE YOUTUBE SHORTS

An extension to remove YouTube Shorts from YouTube.

![selected](https://raw.githubusercontent.com/devlulcas/remove-youtube-shorts/main/.github/images/preview.png)

### Why?

YouTube Shorts can be annoying, especially if you don't like them. This extension removes them from YouTube.

## Installation

1. Clone this repository

2. Go to [chrome://extensions](chrome://extensions)

3. Enable the developer mode

4. Click on the "Load unpacked" button

5. Select the folder where you cloned the repository

6. Click on the extension icon to enable/disable the extension.

## Screenshots

![off](https://raw.githubusercontent.com/devlulcas/remove-youtube-shorts/main/.github/images/off.png)


![on](https://raw.githubusercontent.com/devlulcas/remove-youtube-shorts/main/.github/images/on.png)

## How it works

I just check if you are in an YouTube page and inject a CSS stylesheet to hide the shorts using the `:has` selector to find the shorts.