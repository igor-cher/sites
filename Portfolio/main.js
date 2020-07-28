// (function(){
//     window.addEventListener("load", function(){
//         $('.preloader').fadeOut(3000); // set duration in brackets 
//     })
// })();


//header nav

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
    document.querySelector('.nav').classList.toggle('navActive')
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    document.querySelector('.nav').classList.remove('navActive')
})



$(window).scroll(function() {
    var $header = $('.header');
    if ($(this).scrollTop() > 100) {
      if (!$header.hasClass('sticky')) $header.addClass("sticky");
    } else {
      if ($header.hasClass('sticky')) {
          $header.removeClass("sticky");
      }
    }
});

function validate(evt) {
    var theEvent = evt || window.event;
    
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }



let modalBlock = document.querySelector('.myModal');

// portfolio blocks

  document.querySelectorAll('.popup').forEach((p,i) =>{
    p.addEventListener("click", ()=>{
      modalBlock.classList.add('showModal');
      getValues(dataOfPortfolio,i);
    })
  })

  document.addEventListener('click',(event)=>{
    (event.target.id === 'close') ? modalBlock.classList.remove('showModal') : null;
  })
            

// services

document.querySelectorAll('.service').forEach((s,i) =>{
    s.addEventListener('click', ()=>{
        modalBlock.classList.add('showModal');
        getValues(data,i);
    })  
})



// data for modal blocks services

let data = [
  {key: 0, value: `<div>
  <h1>Title</h1>
  <p>some text</p>
  <a href="#" >Link</a>
</div>`},
{key: 1, value: `<div>
<h1>Title1</h1>
<p>some text1</p>
<a href="#" >Link</a>
</div>`},
{key: 2, value: `<div>
  <h1>Title2</h1>
  <p>some text2</p>
  <a href="#" >Link</a>
</div>`},
{key: 3, value: `<div>
  <h1>Title3</h1>
  <p>some text3</p>
  <a href="#" >Link</a>
</div>`}
]


// data for portfolio blocks

let dataOfPortfolio = [
  {key: 0, value: `<div>
  <h1>Title</h1>
  <p>some text</p>
  <a href="#" >Link</a>
</div>`},
{key: 1, value: `<div>
<h1>Title1</h1>
<p>some text1</p>
<a href="#" >Link</a>
</div>`},
{key: 2, value: `<div>
  <h1>Title2</h1>
  <p>some text2</p>
  <a href="#" >Link</a>
</div>`},
{key: 3, value: `<div>
  <h1>Title3</h1>
  <p>some text3</p>
  <a href="#" >Link</a>
</div>`},
{key: 4, value: `<div>
  <h1>Title4</h1>
  <p>some text4</p>
  <a href="#" >Link</a>
</div>`},
{key: 5, value: `<div>
  <h1>Title5</h1>
  <p>some text5</p>
  <a href="#" >Link</a>
</div>`},
{key: 6, value: `<div>
  <h1>Title6</h1>
  <p>some text6</p>
  <a href="#" >Link</a>
</div>`}
]



function getValues(array, search) {
  return array.reduce(function(values, item){
      (item.key === search) && values.push(item.value);
      document.getElementById('root').innerHTML = values;
      return values;
  }, []);
}
