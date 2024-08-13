// $(".menu-btn").on("click", function () {
//   $(this).toggleClass("active");
//   $("body").toggleClass("open overflow-hidden");
// });

// var wobbleElements = document.querySelectorAll(".wobble");

// wobbleElements.forEach(function (el) {
//   el.addEventListener("mouseover", function () {
//     if (
//       !el.classList.contains("animating") &&
//       !el.classList.contains("mouseover")
//     ) {
//       el.classList.add("animating", "mouseover");

//       var letters = el.innerText.split("");

//       setTimeout(function () {
//         el.classList.remove("animating");
//       }, (letters.length + 1) * 50);

//       var animationName = el.dataset.animation;

//       if (!animationName) {
//         animationName = "jump";
//       }

//       el.innerText = "";

//       letters.forEach(function (letter) {
//         if (letter == " ") {
//           letter = "&nbsp;";
//         }

//         el.innerHTML += '<span className="letter">' + letter + "</span>";
//       });

//       var letterElements = el.querySelectorAll(".letter");

//       letterElements.forEach(function (letter, i) {
//         setTimeout(function () {
//           letter.classList.add(animationName);
//         }, 50 * i);
//       });
//     }
//   });

//   el.addEventListener("mouseout", function () {
//     el.classList.remove("mouseover");
//   });
// });

// //navbar
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 50) {
//     $("header").addClass("fixed");
//   } else {
//     $("header").removeClass("fixed");
//   }
// });

// //home
// $(document).ready(function () {
//   const cursorOffSet = function (e) {
//     const rect = this.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     this.style.setProperty("--cursor-x", x + "px");
//     this.style.setProperty("--cursor-y", y + "px");
//   };
//   document
//     .querySelector(".hero__bnr")
//     .addEventListener("mousemove", cursorOffSet);
//   document
//     .querySelector(".hero__bnr-img-wrap")
//     .addEventListener("mousemove", cursorOffSet);
//   document.querySelectorAll().forEach((grid) => {
//     grid.addEventListener("mousemove", function (e) {
//       this.querySelectorAll().forEach((card) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         card.style.setProperty("--cursor-x", x + "px");
//         card.style.setProperty("--cursor-y", y + "px");
//       });
//     });
//   });
// });

// //homeindex
// $(document).ready(function () {
//   var h2Tag = $(".about__section h2");
//   var hasClass = false;

//   $(window).scroll(function () {
//     var aboutSection = $(".about__section h2");
//     var offset = aboutSection.offset();

//     if (offset) {
//       var windowHeight = $(window).height();
//       var scrollPos = $(window).scrollTop();

//       if (scrollPos + windowHeight > offset.top) {
//         if (!hasClass) {
//           h2Tag.addClass("color-change");
//           hasClass = true;
//         }
//       } else {
//         if (hasClass) {
//           h2Tag.removeClass("color-change");
//           hasClass = false;
//         }
//       }
//     }
//   });
// });

// //servics card index
// $(document).ready(function () {
//   // Add active class on click
//   $(".services__card").on("click", function () {
//     // Remove active class from all cards
//     $(".services__card").removeClass("active");
//     // Add active class to the clicked card
//     $(this).addClass("active");
//   });

//   //Remove active class on hover out
//   // $(".services__card").hover(
//   //   function () {
//   //     $(this).addClass("active");
//   //   },
//   //   function () {
//   //     // On hover out, remove active class
//   //     $(this).removeClass("active");
//   //   }
//   // );
// });

// //index
// $(document).on("scroll", function () {
//   var $video = $("#testimonialsVideo");

//   if ($video.length) {
//     var rect = $video[0].getBoundingClientRect();
//     var isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

//     if (isVisible) {
//       $video[0].play();
//     } else {
//       $video[0].pause();
//     }
//   }
// });

// index
$(document).ready(function () {
  var owl = $(".testimonials__slide").owlCarousel({
    autoplay: true,
    margin: 20,
    loop: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    items: 1,
    nav: false,
    dots: false,
    onInitialized: updateCounter,
    onTranslated: updateCounter,
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  function updateCounter(event) {
    var totalItems = event.item.count;
    var currentIndex = event.item.index - event.relatedTarget._clones.length / 2 + 1;
    if (currentIndex > totalItems) {
      currentIndex -= totalItems;
    }
    $(".current-slide").text(currentIndex);
    $(".total-slides").text(totalItems);
  }
});

// $(document).ready(function () {
//   function fitElementToParent(el, padding) {
//     var timeout = null;
//     function resize() {
//       if (timeout) clearTimeout(timeout);
//       anime.set(el, { scale: 1 });
//       var pad = padding || 0;
//       var parentEl = el.parentNode;
//       var elOffsetWidth = el.offsetWidth - pad;
//       var parentOffsetWidth = parentEl.offsetWidth;
//       var ratio = parentOffsetWidth / elOffsetWidth;
//       timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
//     }
//     resize();
//     window.addEventListener("resize", resize);
//   }

//   var sphereAnimation = (function () {
//     var sphereEl = document.querySelector(".sphere-animation");
//     var spherePathEls = sphereEl.querySelectorAll(".sphere path");
//     var pathLength = spherePathEls.length;
//     var hasStarted = false;
//     var aimations = [];

//     fitElementToParent(sphereEl);

//     var breathAnimation = anime({
//       begin: function () {
//         for (var i = 0; i < pathLength; i++) {
//           aimations.push(
//             anime({
//               targets: spherePathEls[i],
//               stroke: {
//                 value: ["rgba(253,185,19,1)", "rgba(80,80,80,.35)"],
//                 duration: 500,
//               },
//               translateX: [2, -4],
//               translateY: [2, -4],
//               easing: "easeOutQuad",
//               autoplay: false,
//             })
//           );
//         }
//       },
//       update: function (ins) {
//         aimations.forEach(function (animation, i) {
//           var percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
//           animation.seek(animation.duration * percent);
//         });
//       },
//       duration: Infinity,
//       autoplay: false,
//     });

//     var introAnimation = anime
//       .timeline({
//         autoplay: false,
//       })
//       .add(
//         {
//           targets: spherePathEls,
//           strokeDashoffset: {
//             value: [anime.setDashoffset, 0],
//             duration: 3900,
//             easing: "easeInOutCirc",
//             delay: anime.stagger(190, { direction: "reverse" }),
//           },
//           duration: 2000,
//           delay: anime.stagger(60, { direction: "reverse" }),
//           easing: "linear",
//         },
//         0
//       );

//     var shadowAnimation = anime(
//       {
//         targets: "#sphereGradient",
//         x1: "25%",
//         x2: "25%",
//         y1: "0%",
//         y2: "75%",
//         duration: 30000,
//         easing: "easeOutQuint",
//         autoplay: false,
//       },
//       0
//     );

//     function init() {
//       introAnimation.play();
//       breathAnimation.play();
//       shadowAnimation.play();
//     }

//     init();
//   })();
// });

//services
// $(document).ready(function () {
//   var cubes = jQuery(".cubes"),
//     stage = jQuery(".stage");

//   var duration = 20;

//   // Set Container

//   TweenMax.set(stage, { css: { perspective: 800, transformStyle: "preserve-3d" } });

//   // Master Timeline

//   var MasterTimeline = new TimelineMax();
//   MasterTimeline.add(CubeSpin());

//   // Tweens

//   function CubeSpin() {
//     cubes.each(function (index, element) {
//       TweenMax.set(element, { rotationX: -index * 2 - 90, scale: 0.8, transformOrigin: "50% 50% -140%" });

//       var tl = new TimelineMax();

//       tl.to(element, duration, { rotationY: "-=360", repeat: 10000, ease: Linear.easeNone });
//       tl.to(element, duration * 0.5, { opacity: 0, repeat: 10000, repeatDelay: duration * 0.5, ease: SlowMo.ease.config(0.3, 0.7, true) }, duration * 0.25);
//       tl.to(element, duration * 0.5, { opacity: 0, repeat: 10000, repeatDelay: duration * 0.5, ease: SlowMo.ease.config(0.3, 0.7, true) }, duration * 0.25);

//       tl.progress(index / 180);

//       return tl;
//     });
//   }
// });

//aboutjs
// $(document).ready(function () {
//   // Add 'active' class to the first .stroke-circle initially
//   $(".border-section").first().find(".stroke-circle").addClass("active");
//   $(".border-section").first().siblings(".col-lg-3").find(".card__bx").addClass("active");

//   // Handle border section height adjustment and class addition
//   $(window).on("scroll", function () {
//     $(".border-section").each(function () {
//       var $this = $(this);
//       var $row = $this.closest(".row"); // Find the closest parent row to find the corresponding .card__bx
//       var $cardBx = $row.find(".card__bx"); // Find .card__bx within the same row

//       if ($this.length) {
//         // Ensure the element exists
//         var sectionTop = $this.offset().top;
//         var sectionHeight = $this.height();
//         var scrollPosition = $(window).scrollTop();
//         var windowHeight = $(window).height();

//         // Calculate start and end points for the section
//         var startOffset = sectionTop - windowHeight * 0.4; // Adjust as needed
//         var endOffset = sectionTop + sectionHeight - windowHeight * 0.4; // Adjust as needed

//         var scrollPercentage = 0;

//         if (scrollPosition >= startOffset && scrollPosition <= endOffset) {
//           scrollPercentage = (scrollPosition - startOffset) / (endOffset - startOffset);
//           // Add class to .stroke-circle and .card__bx
//           $this.find(".stroke-circle").addClass("active");
//           $cardBx.addClass("active");
//         } else if (scrollPosition > endOffset) {
//           scrollPercentage = 1;
//           // Add class to .stroke-circle and .card__bx
//           $this.find(".stroke-circle").addClass("active");
//           $cardBx.addClass("active");
//         } else {
//           // Remove class when not in range
//           $this.find(".stroke-circle").removeClass("active");
//           $cardBx.removeClass("active");
//         }

//         // Ensure scrollPercentage is between 0 and 1
//         scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

//         // Apply the height based on scrollPercentage
//         $this.find(".stroke-border").css("height", scrollPercentage * 100 + "%");
//       }
//     });
//   });

//   // Trigger the scroll event initially to set the initial state
//   $(window).trigger("scroll");
// });

// $(document).ready(function () {
//   const scrollWrapper = $(".horizontal-scroll-wrapper");
//   const containers = $(".horizontal-scroll-container");
//   const containerWidth = containers.first().outerWidth(); // Width of one container
//   const totalWidth = containerWidth * containers.length; // Total width of all containers

//   let isHorizontalScrollComplete = false; // Flag to track if horizontal scroll is complete

//   // Function to handle scrolling effect
//   function handleScroll() {
//     const scrollPosition = $(window).scrollTop();

//     // Ensure the horizontal scroll only occurs within the .design__process section
//     const homeWalkthrough = $(".design__process");
//     const homeWalkthroughTop = homeWalkthrough.offset().top;
//     const homeWalkthroughBottom = homeWalkthroughTop + homeWalkthrough.outerHeight();

//     if (scrollPosition >= homeWalkthroughTop && scrollPosition < homeWalkthroughBottom) {
//       // Calculate the percentage of the section scrolled
//       const scrollProgress = (scrollPosition - homeWalkthroughTop) / (homeWalkthroughBottom - homeWalkthroughTop);
//       const percentageScrolled = Math.min(100, scrollProgress * 100);

//       // Ensure horizontal scroll reaches 80%
//       const maxHorizontalScrollPercentage = 80;
//       const horizontalScrollPercentage = Math.min(maxHorizontalScrollPercentage, percentageScrolled);
//       scrollWrapper.css("transform", `translate3d(-${horizontalScrollPercentage}%, 0, 0)`);

//       containers.each(function (index) {
//         const strokeArrow = $(this).find(".horizontal-stroke-arrow");
//         const stroke = $(this).find(".horizontal-stroke");
//         const contentBox = $(this).find(".content__box");

//         if (strokeArrow.length) {
//           const containerStart = (index / containers.length) * maxHorizontalScrollPercentage;
//           const containerEnd = ((index + 1) / containers.length) * maxHorizontalScrollPercentage;

//           if (percentageScrolled >= containerStart && percentageScrolled < containerEnd) {
//             const containerScroll = ((percentageScrolled - containerStart) / (containerEnd - containerStart)) * 100;
//             strokeArrow.css("width", `${containerScroll}%`);

//             // Add class to horizontal-stroke and content__box when horizontal-stroke-arrow width starts changing
//             stroke.addClass("active");
//             contentBox.addClass("highlight");
//           } else if (percentageScrolled >= containerEnd) {
//             strokeArrow.css("width", "100%");
//             stroke.addClass("active");
//             contentBox.addClass("highlight");
//           } else {
//             strokeArrow.css("width", "0%");
//             stroke.removeClass("active");
//             contentBox.removeClass("highlight");
//           }
//         }
//       });

//       // Check if horizontal scroll is complete
//       isHorizontalScrollComplete = horizontalScrollPercentage >= maxHorizontalScrollPercentage;
//     } else {
//       // Reset scroll transform when out of the .design__process section
//       scrollWrapper.css("transform", "translate3d(0, 0, 0)");
//       isHorizontalScrollComplete = false;

//       // Remove classes when out of the section
//       containers.each(function () {
//         $(this).siblings(".horizontal-stroke").removeClass("active");
//         $(this).siblings(".content__box").removeClass("highlight");
//       });
//     }

//     // Prevent vertical scroll until horizontal scroll is complete
//     if (!isHorizontalScrollComplete) {
//       $(window).scrollTop(scrollPosition);
//     }
//   }

//   // Create an IntersectionObserver-like functionality to detect when .design__process enters and exits the viewport
//   function checkIntersection() {
//     const homeWalkthrough = $(".design__process");
//     const homeWalkthroughTop = homeWalkthrough.offset().top;
//     const homeWalkthroughBottom = homeWalkthroughTop + homeWalkthrough.outerHeight();
//     const viewportHeight = $(window).height();
//     const scrollTop = $(window).scrollTop();

//     if (scrollTop + viewportHeight > homeWalkthroughTop && scrollTop < homeWalkthroughBottom) {
//       $(window).on("scroll", handleScroll);
//     } else {
//       $(window).off("scroll", handleScroll);
//       // Reset horizontal scroll transform when section is out of view
//       scrollWrapper.css("transform", "translate3d(0, 0, 0)");
//       isHorizontalScrollComplete = false;

//       // Remove classes when out of the section
//       containers.each(function () {
//         $(this).siblings(".horizontal-stroke").removeClass("active");
//         $(this).siblings(".content__box").removeClass("highlight");
//       });
//     }
//   }

//   // Check for intersection initially and on scroll
//   checkIntersection();
//   $(window).on("scroll", checkIntersection);
// });
