$(document).ready(function(){
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
    });
  });
  
  $(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger, .menu__burger').toggleClass('active');
      $('body').toggleClass('lock')
      
    })
  })
  
  $(document).ready(function(){
    $('.header__list').click(function(event) {
      $('.header__burger, .menu__burger').removeClass('active');
      $('body').removeClass('lock');
    })
  })
  
  
  var buttons = document.getElementsByClassName('btn'),
      forEach = Array.prototype.forEach;
  
  forEach.call(buttons, function (b) {
      b.addEventListener('click', addElement);
  });
  
  function addElement(e) {
      var addDiv  = document.createElement('div'),
          mValue  = Math.max(this.clientWidth, this.clientHeight),
          rect    = this.getBoundingClientRect();
          sDiv    = addDiv.style,
          px      = 'px';
  
      sDiv.width  = sDiv.height = mValue + px;
      sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
      sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;
  
      addDiv.classList.add('pulse');
      this.appendChild(addDiv);
  }