function changeImage() {
            var image = document.getElementById('myImage');
            if (image.src.match("idk what goes here")) {
                image.src = "or here";
            }
            else {
                image.src = "https://pixel.nymag.com/imgs/fashion/daily/2018/10/05/05-fat-bear-week.w700.h700.jpg";
            }
        }
        /* http://techfunda.com/howto/444/changing-of-images */

        (function() {
            var blinks = document.getElementsByTagName('blink');
            var visibility = 'hidden';
            window.setInterval(function() {
              for (var i = blinks.length - 1; i >= 0; i--) {
                blinks[i].style.visibility = visibility;
              }
              visibility = (visibility === 'visible') ? 'hidden' : 'visible';
            }, 250);
          })();
