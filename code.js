
var Container = document.getElementById('cards');
  document.getElementById('scroll-l').addEventListener('click', function(){
    var scrollAmount = Container.offsetWidth / 2;;
    Container.scrollLeft -= 150;
  })
  document.getElementById('scroll-r').addEventListener('click', function(){
    Container.scrollLeft += 150;
  })
