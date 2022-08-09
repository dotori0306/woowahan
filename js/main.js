$(function(){

  var swiper = new Swiper(".visual-slide.swiper", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  
  
  // card motion
  
  
  slideLoop = gsap.to('.card-wrap',10,{
    xPercent:-50,
    repeat:-1, //무한반복
    ease:'none',
    paused:true,
  })
  
  slideLoop.play()
  // slideLoop.pause()
  
  
  
  //타임라인
  
  slideChange = gsap.timeline({
    paused:true,
    defaults:{
      stagger:0.05 //순차적실행
    }
  })
  
  slideChange.addLabel('motion1')
  slideChange.to('.card-item:nth-child(even)',{yPercent:20,},'motion1')
  slideChange.to('.card-item:nth-child(odd)',{yPercent:-20,},'motion1')
  
  
  
  $('.card-slide').hover(function(){
    slideLoop.pause()
    slideChange.play()
  },function(){
    slideLoop.play()
    slideChange.reverse()
  })
  
  
  
  
  //btn.pause
  $('.btn.pause').click(function(){
    $('.video-area').addClass('play')
    $('.video')[0].pause()
  })
  $('.btn.play').click(function(){
    $('.video-area').removeClass('play')
    $('.video')[0].play()
  })
  
  
  
  
  
  
  
  
  //@@@ 1회용! 하나만을 위한 것! 여러개는 동시에 안된다!!
  // gsap.fromTo('.card-slide',{
  //   opacity:0,
  //   y:50
  // },{
  
  //   scrollTrigger:{
  //     trigger:".card-slide",
  //     start:"top 80%", // [내 거 타이틀의 위치, 윈도우 시작지점]
  //     // end:"bottom top", // [내 거 타이틀의 위치, 윈도우 시작지점]
  //     markers:true,
  //   },
  //   duration:2,
  //   opacity:1,
  //   y:0
  // })
  
  $('.fade-up').each(function(index,el){
    
      gsap.fromTo(el,{
        opacity:0,
        y:50
      },{
      
        scrollTrigger:{
          trigger:el,
          start:"top bottom", // [내 거 타이틀의 위치, 윈도우 시작지점]
          // end:"bottom top", // [내 거 타이틀의 위치, 윈도우 시작지점]
          // markers:true,
        },
        duration:1,
        opacity:1,
        y:0
      })
  
  })
  
  
  
  
  
  ////sc-font slide
  
  fontslideLoop = gsap.to('.font-area',10,{
    xPercent:-50,
    repeat:-1,
    ease:'none',
  })
  
  // slideLoop.pause()
  
  
  
  
  //지우면안돼
  })