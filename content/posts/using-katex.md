---
title           : "Using KaTeX"
description     : "Brief explanation of KaTeX, mhchem, copy-tex, etc."
date            : 2022-03-08
katex           : true
katexExtensions : [ mhchem, copy-tex ]
tags            : [ chemistry, katex, markdown, math ]
draft           : true
---

[KaTeX](https://katex.org/) is a fast, easy-to-use JavaScript library for TeX math rendering on the web.

It can be enabled by adding `katex: true` or `math: true` in the front matter (assuming you're using YAML format). It's also possible to enable it globally.


## Configuring delimiters

If you want to configure the delimiters, just copy the `assets/js/katex-auto-render-options.js` from the theme folder to your site folder (keeping the same path structure) and edit as you wish.

Here's the default configuration:

```js
renderMathInElement(document.body, {
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: false }
  ]
});
```

Which means you can render expressions as **inline** elements by using `$...$` or `\\(...\\)` as delimiters, like this: $ \sqrt{\smash[b]{y}} $.

While **block** elements can be rendered by using `$$...$$` or `\\[...\\]`, like this:

$$ \displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) $$

For more details about how to configure the delimiters, see: [Auto-render Extension](https://katex.org/docs/autorender.html).


## Extensions

The extensions `mhchem` and `copy-tex` are also included (along the necessary `auto-render`).

The `mhchem` extension allows chemistry notation, like $ \ce{H2O} $ or:

$$
  \ce{x Na(NH4)HPO4 ->[\Delta] (NaPO3)_x + x NH3 ^ + x H2O}
$$

While `copy-tex` allows users to copy the processed KaTeX and paste it in its native format. (Try to copy the formula above and paste anywhere else.)

It's also worth noting that `copy-tex` has some [known issues](https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex#known-issues).

About how to load the extensions, here's a quick example:

```yaml
---
title           : "Using KaTeX"
katex           : true
katexExtensions : [ mhchem, copy-tex ]
---
```

## Fences

Another tweak here is that KaTeX blocks are accessible via keyboard and long expressions can be scrolled:

$$ \text{Damage} = \text{Skill Level} * \lfloor A * (1 - B) * (1 - C) * (1 - D) * (1 - E) * F * G \lfloor \frac{H * 0.7 * \text{INT} * \text{INT} * \text{VIT}}{(\text{INT} + \text{VIT})} \rfloor \rfloor $$

Pretty much like code blocks:

```tex
$$
  \text{Damage} = \text{Skill Level} * \lfloor A * (1 - B) * (1 - C) * (1 - D) * (1 - E) * F * G \lfloor \frac{H * 0.7 * \text{INT} * \text{INT} * \text{VIT}}{(\text{INT} + \text{VIT})} \rfloor \rfloor
$$
```
