
<p align="center"><h1 align="center">ChamelTone 💙</h1></p>


<br/>
<br/>

<p align="center">
    <img src="https://github.com/garvae/ChamelTone/blob/main/public/github/gh_banner_en.png" alt="Logo_banner" style="max-width:100%" width="828" height="316">
</p>  


<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://www.github.com/garvae/chameltone" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/garvae" target="_blank">
    <img alt="Twitter: garvae" src="https://img.shields.io/twitter/follow/garvae.svg?style=social" />
  </a>
</p>

<br/>
<br/>  

<p align="center" style="text-align: center">
   A browser extension that allows you to apply automatic &#34;dark mode&#34; and manually change the color styles of any pages. The extension analyzes the current domain and applies the saved user settings for the current domain, if any. The user can use CSS filters, 6 ways to change the color of text and background elements, and the extension allows you to enter CSS code.
</p>



<br/>
<br/>
<p align="center">
    <a align="center" href="https://garvae.com/portfolio/extensions/chameltone#playground" rel="nofollow">
        <h2 align="center">🌐 Demo</h2>
    </a>
</p>
<br/>
<br/>


## A few words about the project

This is my first project and I am happy to share it with people. I hope this extension helps you understand how to develop browser extensions. 
Browser extensions differ slightly in their logic from the behavior of websites or mobile applications.

Although the essence is similar, because we have:
- interface that the user can interact with (similar to UI / frontend)
- request-processing background page (like backend)
- result of user interaction and background processing (resulting application state)

<br/>

The interaction scheme is approximately as follows:

<br/>

<p align="center">
    <img src="https://github.com/garvae/ChamelTone/blob/main/public/github/app_process_scheme.jpg" alt="app_process_scheme" style="max-width:100%" width="950" height="407">
</p>
<br/>
<br/>  

## Description

ChamelTone is an browser extension built for ***Mozilla Firefox*** and ***Google Chrome***, built with **React**, **Redux** and **SASS**.
- This extension allows you to apply automatic **“Smart Dark Mode”** and manually change the color styles of any web-pages.
- It analyzes the current domain and **applies the saved user settings automatically** for the current domain, if any settings exists.
- You can use **6 ways to change the color** of text and background elements of web page.
- Also you can use filters to modify page colors.
- In addition, the extension allows you to use **CSS code** to modify web page.

<br/>
<br/>  

## Install

> The extension is currently **under consideration** in the Chrome Web Store and in Firefox Browser Add-ons. Therefore, you can’t install this extension directly from the stores yet. But **you can test it in the “playground”** section of site via link above. You can also build it via command above and **install manually**.

<br/>

### For Firefox

1. Build the extension

```sh
build_firefox
```

2. Open debugging page: <about:debugging#/runtime/this-firefox>
3. Click **"Load Temporary Add-on"** and select file **"manifes.json"** from **"build"** directory


> Short tutorial from YouTube: <https://www.youtube.com/watch?v=J7el77F1ckg>

> In Firefox temporary extension works until the end of the current session. 

<br/>

### For Chrome

1. Build the extension

```sh
build_chrome
```

2. Open extensions page: <chrome://extensions/>
3. Ensure that the **"Developer mode"** checkbox in the top right-hand corner is checked. 
3. Click **"Load Unpacked"** and select **"build"** directory

> Short tutorial from YouTube: <https://www.youtube.com/watch?v=oswjtLwCUqg>

> In Chrome the temporary extension remains even after closing the browser

<br/>
<br/>  

## Structure

> Here's a general structure for understanding the key points of the project

- config (webpack config)
- manifest (separate file **"manifest.json"** for each of the browsers)
- public
- src
    - app_background_page (scripts for **"background page"**)
        - scripts
            - darkMode_presets (note # 1 below)
    - app_content_page
        - app_popup (main "UI" scripts)
        - assets
            - img
            - locales (note # 2 below)
        - store (redux configuration)
        - styles

<br/>


> Note #1: **"darkMode_presets"** contains special "manually configured" presets for some websites with a very complex structure. For such sites, the ChamelTone built-in logic of "Smart Dark Mode" puts too much load on the processor. Therefore, for some sites (we can expand the base of such sites), pre-generated presets are automatically applied. This optimizes performance.


> Note #2: **"locales"** contains the language pack files. In my case, I decided to use JavaScript configuration instead of JSON. We can expand the base of language packs in this folder. New language packs will automatically appear in the list of available application languages.

<br/>
<br/>  

## P.S

<br/>  

<p align="center">  
    <img src="https://github.com/garvae/ChamelTone/blob/main/public/github/gh_logo_with_heart_text.png" alt="Logo_banner" style="max-width:100%" width="413" height="369">  
</p>  


This extension **built with love**, but I am aware of the **need to refactor** this application. But I started to do it 8 months ago with minimal programming skills and at the start of my "programming way" had no idea how to do this better 😅.
I am planning further refactorings and optimizations.
I would like to refactor:
- redux logic. it turned out to be too heavy and contains errors
- in sass styles it is necessary to replace most of the "@import" rules with "@use" to avoid unwanted double use
- the logic of the background page. There is extra code that can be shortened and logic enhanced
- the application has a very heavy ["csstree-validator"](https://github.com/csstree/validator) library. It doubles the weight of the entire application. This library uses MDN libraries to validate user-submitted CSS code. The library is too old and needs to be replaced

***I would love to hear your suggestions for improvements. Contact me on social networks.***

<br/>
<br/>  

## Special thanks

- [@omgovich]( https://github.com/omgovich ) - ["react-colorful"](https://github.com/omgovich/react-colorful) - this library is absolutely awesome. Super lightweight and powerful.

<br/>
<br/>  

## Author

🙋‍♂️ **Vova_Garvae**

- Website: <https://www.garvae.com>
- Facebook: [@garvae](https://www.facebook.com/garvae)
- LinkedIn: [@garvae](https://linkedin.com/in/garvae)
- Twitter: [@garvae](https://twitter.com/garvae)
- Github: [@garvae](https://github.com/garvae)

<br/>
<br/>  

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://www.github.com/garvae/chameltone/issues). You can also take a look at the [contributing guide](https://wwwhub.com/garvae/chameltone/blob/master/CONTRIBUTING.md).

<br/>
<br/>  

## Show your support
<br/>
<br/>

Give a  ⭐ and your ❤️ if this project helped you!

<br/>
<br/>

<a href="https://www.patreon.com/garvae">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

<br/>

❤️️ <https://ko-fi.com/garvae>

<br/>

❤️️ <https://pay.cloudtips.ru/p/859caa2a>

<br/>
<br/>
