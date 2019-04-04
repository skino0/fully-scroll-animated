/*
This project is licensed under the MIT License - see the LICENSE.md file for details
https://github.com/skino0/fully-scroll-animated/blob/master/license.md
*/
document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
      toggle: {
        visible: 'visible',
        hidden: 'invisible'
      },
      offset: {
        x: 0,
        y: 20
      },
      addHeight: true,
      once: false
    }, document.body, window);
  });
  