window.MathJax = {
  CommonHTML: { linebreaks: { automatic: true } },
  tex2jax: { inlineMath: [ ['$', '$'], ['\\(','\\)'] ], displayMath: [ ['$$','$$'], ['\\[', '\\]'] ], processEscapes: false },
  TeX: { noUndefined: { attributes: { mathcolor: 'red', mathbackground: '#FFEEEE', mathsize: '90%' } } },
  messageStyle: 'none'
};


(function() {
  var i, text, code, codes = document.getElementsByTagName('code');
  for (i = 0; i < codes.length;) {
    code = codes[i];
    if (code.parentNode.tagName !== 'PRE' &&
        code.childElementCount === 0) {
      text = code.textContent;
      if (/^\$[^$]/.test(text) && /[^$]\$$/.test(text)) {
        text = text.replace(/^\$/, '\\(').replace(/\$$/, '\\)');
        code.textContent = text;
      }
      if (/^\\\((.|\s)+\\\)$/.test(text) ||
          /^\\\[(.|\s)+\\\]$/.test(text) ||
          /^\$(.|\s)+\$$/.test(text) ||
          /^\\begin\{([^}]+)\}(.|\s)+\\end\{[^}]+\}$/.test(text)) {
        code.outerHTML = code.innerHTML;  // remove <code></code>
        continue;
      }
    }
    i++;
  }
})();