'use strict';

// Get default accent colors
{{ $defaultdarkColor   := .Site.Params.Style.darkColor  | default .Site.Data.default.style.darkColor }}
{{ $defaultlightColor  := .Site.Params.Style.lightColor | default .Site.Data.default.style.lightColor }}

// Get CSS transition
{{ $changeTransition := .Site.Params.Style.changeTransition | default .Site.Data.default.style.changeTransition }}

const rootElement = document.documentElement;

// Set the dark mode
function setDark() {
  rootElement.setAttribute('data-mode', 'dark');
}

// Set the light mode
function setLight() {
  rootElement.setAttribute('data-mode', 'light');
}

/*
 * Initialization triggers dark/light mode based on 3 things
 * The priority follows:
 *
 * 1. Local preference (localStorage)
 * 2. System settings (prefers-color-scheme)
 * 3. HTML data-* attribute (data-mode)
 */

const localMode = localStorage.getItem('mode');

{{ if not .Site.Params.Style.ignoreSystemSettings }}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
{{ end }}

if (localMode === 'dark') {
  setDark();
} else if (localMode === 'light') {
  setLight();

  {{ if not .Site.Params.Style.ignoreSystemSettings }}
    } else if (prefersDark.matches) {
      setDark();
    } else if (prefersLight.matches) {
      setLight();
  {{ end }}
}

function getAccent() {
  const currentMode = rootElement.getAttribute('data-mode');
  // const localdarkColor = localStorage.getItem('darkColor');
  // const locallightColor = localStorage.getItem('lightColor');
  let currentAccent;
  if (currentMode === 'dark') {
      currentAccent = '{{ $defaultdarkColor }}';
  }
  return currentAccent;
}

const activeAccent = getAccent();

// Set the active accent color for these right after setting dark/light mode
// Should mitigate any flashing/flickering
const rootStyle = rootElement.style;

rootStyle.setProperty('--accent', activeAccent);


// Also meta-theme cuz, why not
const metaThemeColor = document.querySelector('meta[name=theme-color]');

metaThemeColor.setAttribute('content', activeAccent);


document.addEventListener('DOMContentLoaded', function() {

  const colorPicker = document.querySelector('footer input');

  function updateAccent() {
    const activeAccent = getAccent();

    rootStyle.setProperty('--accent', activeAccent);
    colorPicker.value = activeAccent;
    metaThemeColor.setAttribute('content', activeAccent);
  }

  colorPicker.onchange = function() {

    const selectedAccent = colorPicker.value;

    rootStyle.setProperty('--accent', selectedAccent);

    if (rootElement.getAttribute('data-mode') === 'dark') {
      localStorage.setItem('darkColor', selectedAccent);
    } else {
      localStorage.setItem('lightColor', selectedAccent);
    }

    updateAccent();
  }

  // Update the color picker with the active accent color
  colorPicker.value = activeAccent;

  // Smooth transition, only when changing modes (and not loading pages)
  function smoothTransition() {
    document.body.style.transition =
    document.querySelector('header').style.transition =
    document.querySelector('footer').style.transition =
    '{{ printf "background-color %[1]s, color %[1]s" $changeTransition }}';
  }

  // Change mode via localStorage
  function localModeChange() {

    smoothTransition();

    if (rootElement.getAttribute('data-mode') === 'light') {
      setDark();
      localStorage.setItem('mode', 'dark');
    } else {
      setLight();
      localStorage.setItem('mode', 'light');
    }

    updateAccent();
  }

  {{ if not .Site.Params.Style.ignoreSystemSettings }}

    // Change mode via system settings
    function systemModeChange() {

      smoothTransition();

      if (prefersDark.matches) {
        setDark();
      } else {
        setLight();
      }

      updateAccent();

      // System settings do not require localStorage
      if (localMode !== null) {
        localStorage.removeItem('mode');
      }

    }

    // System settings listener
    prefersDark.addEventListener('change', systemModeChange);

  {{ end }}

  // Mode change button listener
  document.querySelector('footer button')
    .addEventListener('click', localModeChange);


  // ----------------- back to top -----------------
  var mybutton = document.getElementById("back_to_top");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  document.querySelector('#back_to_top')
    .addEventListener('click', topFunction);
  // ----------------- back to top -----------------

});
