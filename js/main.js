// $(function() {
//   $(".top__slider").slick();
// });
$(".top__slider").slick({
  arrows: false,
  dots: true,
  //adaptive design
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false
      }
    }
  ]
});

$(".reviews__slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 810,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

const btn = document.querySelector(".menu__btn");
let toogleMenu = true;
const menuList = document.querySelector(".menu__list");
btn.addEventListener("click", () => {
  toogleMenu
    ? (menuList.style.transform = "translateY(0px)")
    : (menuList.style.transform = "translateY(-500px)");
  toogleMenu = !toogleMenu;
});
