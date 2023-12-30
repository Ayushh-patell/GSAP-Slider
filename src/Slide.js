import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import SvgPath from "./Components/SvgPath";
import LeftComponents from "./Components/LeftComponents";
import TextComponent from "./Components/TextComponent";
import ImgComponents from "./Components/ImgComponents";

function Slide() {
  gsap.registerPlugin(ScrollTrigger);
  const appRef = useRef();
//all the gsap code in inside the usegsap
  useGSAP(
    () => {
      //innitial variables and arrays of different components
      const innerHeight = window.innerHeight;
      let sections = gsap.utils.toArray("section");
      let leftBoxs = Array.from(document.querySelectorAll(".left-box"));
      let textH3 = Array.from(document.querySelectorAll(".big-text h3"));
      let textp = Array.from(document.querySelectorAll(".small-text "));
      let Imgs = Array.from(document.querySelectorAll(".img "));
      let SVG_text = Array.from(document.querySelectorAll(".svg_text "));
      let mainArr = [];
      //mainArr is an array of objects each object has one element of all arrays
      sections.forEach((element, i) => {
        mainArr.push({
          section: element,
          left: leftBoxs[i],
          bigText: textH3[i],
          smallText: textp[i],
          Imgs: Imgs[i],
          SVGText: SVG_text[i]
        });
      });
      
      let currentElm = mainArr[0];
      let currentImgElm = mainArr[0].Imgs;
      gsap.defaults({ overwrite: "auto", duration: 0.5 });
      gsap.set("body", { height: mainArr.length * 100 + "%" });
//adding scrollTrigger  with different start and end point and giving them function for entering and enterback
      mainArr.forEach((element, i) => {
        ScrollTrigger.create({
          // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
          start: () => (i - 0.5) * innerHeight,
          end: () => (i + 0.5) * innerHeight,
          markers:{startColor: "transparent", endColor: "transparent", fontSize: "18px", fontWeight: "bold", indent: 20},
          // when a new section activates (from either direction), set the section accordingly.
          onEnter: (self) => self.isActive && setForwardElm(element, i),
          onEnterBack: (self) => self.isActive && setBackwardElm(element, i),
        });
        ScrollTrigger.create({
          // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
          start: () => (i - 0.5) * innerHeight,
          end: () => (i + 0.5) * innerHeight,
          // when a new section activates (from either direction), set the section accordingly.
          onEnter: (self) => self.isActive && ImgEnterAnimation(element.Imgs),
          onEnterBack: (self) =>
            self.isActive && ImgEnterBackAnimation(element.Imgs),
        });
      });

      const setForwardElm = (newElm, i) => {
        if (newElm !== currentElm) {
          gsap.to(currentElm.section, { autoAlpha: 0 });//previous slide fades away
          gsap.to(newElm.section, { autoAlpha: 1 });//new slide fades in
          gsap.to(currentElm.left, { autoAlpha: 0 });//previous slide fades away
          gsap.to(newElm.left, { autoAlpha: 1 });//new slide fades in
          gsap.to(currentElm.bigText, { y: -50, autoAlpha: 0 });//previous text moves up
          gsap.to(newElm.bigText, { y: 0, autoAlpha: 1 });//next text moves up
          Array.from(currentElm.SVGText.children).forEach(el => {gsap.to(Array.from(el.children), {yPercent:-100,  autoAlpha: 0 })})//previous text moves up
          Array.from(newElm.SVGText.children).forEach(el => {gsap.to(Array.from(el.children), { yPercent:-100, autoAlpha: 1 })})//next text moves up
          gsap.to(Array.from(currentElm.smallText.children), {
            y: -60,
            autoAlpha: 0,
            stagger: 0.06,
          });//previous text moves up
          gsap.to(Array.from(newElm.smallText.children), {
            y: 0,
            autoAlpha: 1,
            stagger: 0.06,
          });//next text moves up
          ImgEnterAnimation(newElm.Imgs);//separate function for image movement

          if (i === 0) {//with each slide move the svg ahead and fill color to the next dot
            gsap.to(".svg-box", { backgroundColor: "#6211A7", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "0,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          } else if (i === 1) {
            gsap.to(".svg-box", { backgroundColor: "#4C27CD", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "137,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          } else if (i === 2) {
            gsap.to(".svg-box", { backgroundColor: "#101439", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "277,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          } else if (i === 3) {
            gsap.to(".svg-box", { backgroundColor: "#15253A", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "410,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          } else if (i === 4) {
            gsap.to(".svg-box", { backgroundColor: "#114BA0", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "535,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          } else if (i === 5) {
            gsap.to(".svg-box", { backgroundColor: "#012B91", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "675,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          } else if (i === 6) {
            gsap.to(".svg-box", { backgroundColor: "#00824B", duration: 0.1 });
            gsap.to("#Opaque_Ring", { strokeDasharray: "1000,1000" });
            gsap.to(`.dotsstro${i + 1}`, { opacity: 1 });
            gsap.to(`.dotsfill${i + 1}`, { fill: "rgb(0, 146, 255)" });
          }
          currentElm = newElm;
        }
      };
      const setBackwardElm = (newElm, i) => {//same logic as the setForwardElm but for moving back up the slide
        if (newElm !== currentElm) {
          gsap.to(currentElm.section, { autoAlpha: 0 });
          gsap.to(newElm.section, { autoAlpha: 1 });
          gsap.to(currentElm.left, { autoAlpha: 0 });
          gsap.to(newElm.left, { autoAlpha: 1 });
          gsap.to(currentElm.bigText, { y: 50, autoAlpha: 0 });
          gsap.to(newElm.bigText, { y: 0, autoAlpha: 1 });
          if(i===0) {
            Array.from(currentElm.SVGText.children).forEach(el => {gsap.to(Array.from(el.children), {yPercent:100,  autoAlpha: 0 })})
          Array.from(newElm.SVGText.children).forEach(el => {gsap.to(Array.from(el.children), { yPercent:0, autoAlpha: 1 })})
          }
          else {
            Array.from(currentElm.SVGText.children).forEach(el => {gsap.to(Array.from(el.children), {yPercent:100,  autoAlpha: 0 })})
            Array.from(newElm.SVGText.children).forEach(el => {gsap.to(Array.from(el.children), { yPercent:-100, autoAlpha: 1 })})
          }
          gsap.to(Array.from(currentElm.smallText.children), {
            y: 60,
            autoAlpha: 0,
            stagger: 0.06,
          });
          gsap.to(Array.from(newElm.smallText.children), {
            y: 0,
            autoAlpha: 1,
            stagger: 0.06,
          });
          if (i === 0) {
            gsap.to(".svg-box", { backgroundColor: "#6211A7" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "0,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          } else if (i === 1) {
            gsap.to(".svg-box", { backgroundColor: "#4C27CD" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "137,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          } else if (i === 2) {
            gsap.to(".svg-box", { backgroundColor: "#101439" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "277,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          } else if (i === 3) {
            gsap.to(".svg-box", { backgroundColor: "#15253A" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "410,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          } else if (i === 4) {
            gsap.to(".svg-box", { backgroundColor: "#114BA0" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "535,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          } else if (i === 5) {
            gsap.to(".svg-box", { backgroundColor: "#012B91" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "675,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          } else if (i === 6) {
            gsap.to(".svg-box", { backgroundColor: "#00824B" });
            gsap.to("#Opaque_Ring", { strokeDasharray: "1000,1000" });
            gsap.to(`.dotsstro${i + 2}`, { opacity: 0, duration: 0.2 });
            gsap.to(`.dotsfill${i + 2}`, { fill: "rgba(183, 183, 183, 0.64)" });
          }
          currentElm = newElm;
        }
      };
      const ImgEnterAnimation = (newImgElm) => {//function for image movement in moving forward direction(down)
        if (newImgElm !== currentImgElm) {
          if (newImgElm.classList.contains("second")) {//2nd slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });//moving image element of slide 1 away, and fading slide 1
            gsap.to(currentImgElm.children, { bottom: "-100%", autoAlpha: 0, ease: "expo.in", stagger: 0.07,});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });//moving images of slide 2 in and fading slide 2 in
            gsap.fromTo( newImgElm.children[0], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-30%", autoAlpha: 1, ease: "expo.in" });

            gsap.fromTo( newImgElm.children[1], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-30%", autoAlpha: 1, ease: "expo.in" });

          } else if (newImgElm.classList.contains("third")) {//3rd slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });//moving image element of slide 2 away, and fading slide 2
            gsap.to(currentImgElm.children[0], { bottom: "-100%", autoAlpha: 0, ease: "expo.in"});
            gsap.to(currentImgElm.children[1], { top: "-100%", autoAlpha: 0, ease: "expo.in",});


            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });//moving images of slide 3 in and fading slide 3 in
            gsap.fromTo( newImgElm.children[0], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "55%", autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[1], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-55%", autoAlpha: 1, ease: "expo.in" });

          } else if (newImgElm.classList.contains("fourth")) {//4th Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });//moving image element of slide 3 away, and fading slide 3
            gsap.to(currentImgElm.children[0], { bottom: "-100%", autoAlpha: 0, ease: "expo.in", });
            gsap.to(currentImgElm.children[1], { top: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });//moving images of slide 4 in and fading slide 4 in
            gsap.fromTo( newImgElm.children[0], { top: "-100%", left: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "0", left: "0", autoAlpha: 1, ease: "sine.out",});
            gsap.fromTo( newImgElm.children[1], { top: "-100%", right: "0%", autoAlpha: 0 }, { delay: 0.1, top: "-10%", right: "5%", autoAlpha: 1, ease: "sine.out",});
            gsap.fromTo( newImgElm.children[2], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "14%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[3], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-20%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[4], { bottom: "-100%", right: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "0", right: "0", autoAlpha: 1, ease: "sine.out",});
            gsap.fromTo( newImgElm.children[5], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "0", autoAlpha: 1, ease: "sine.out" });

          } else if (newImgElm.classList.contains("fifth")) {//5th SLide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });//moving image element of slide 4 away, and fading slide 4
            gsap.to(currentImgElm.children[0], { top: "-100%", left: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[1], { top: "-100%", right: "0%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[2], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[3], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[4], { bottom: "-100%", right: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[5], { top: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });//moving images of slide 5 in and fading slide 5 in
            gsap.fromTo( newImgElm.children[0], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-45%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[1], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-25%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[2], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "50%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[3], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-35%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[4], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-50%", autoAlpha: 1, ease: "sine.out" });

          } else if (newImgElm.classList.contains("sixth")) {//6th Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });//moving image element of slide 5 away, and fading slide 5
            gsap.to(currentImgElm.children[0], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[1], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[2], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[3], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[4], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });//moving images of slide 6 in and fading slide 6 in
            gsap.fromTo( newImgElm.children[0], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "50%", autoAlpha: 1, ease: "sine.out" });

          } else if (newImgElm.classList.contains("seventh")) {//7th Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });//moving image element of slide 6 away, and fading slide 6
            gsap.to(currentImgElm.children[0], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });//moving images of slide 7 in and fading slide 7 in
            gsap.fromTo( newImgElm.children, { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-20%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children, { bottom: "-100%", autoAlpha: 0 }, { delay: 0.2, bottom: "-10%", autoAlpha: 1, ease: "sine.out" });
          }
          currentImgElm = newImgElm;
        }
      };
      const ImgEnterBackAnimation = (newImgElm) => {//SIMILAR LOGIC AS ImgEnterAnimation JUST BACKWARDS
        if (newImgElm !== currentImgElm) {

          if (newImgElm.classList.contains("first")) {//1st Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });
            gsap.to(currentImgElm.children[0], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[1], { top: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children, { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "58%", autoAlpha: 1, ease: "expo.in", stagger: 0.07,});

          } else if (newImgElm.classList.contains("second")) {//2nd Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });
            gsap.to(currentImgElm.children[0], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[1], { top: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[0], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-30%", autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[1], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-30%", autoAlpha: 1, ease: "expo.in" });

          } else if (newImgElm.classList.contains("third")) {//3rd Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });
            gsap.to(currentImgElm.children[0], { top: "-100%", left: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[1], { top: "-100%", right: "0%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[2], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[3], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[4], { bottom: "-100%", right: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[5], { top: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[0], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "55%", autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[1], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-55%", autoAlpha: 1, ease: "expo.in" });

          } else if (newImgElm.classList.contains("fourth")) {//4th Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });
            gsap.to(currentImgElm.children[0], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[1], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[2], { top: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[3], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});
            gsap.to(currentImgElm.children[4], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[0], { top: "-100%", left: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "0", left: "0", autoAlpha: 1, ease: "sine.out",});
            gsap.fromTo( newImgElm.children[1], { top: "-100%", right: "0%", autoAlpha: 0 }, { delay: 0.1, top: "-10%", right: "5%", autoAlpha: 1, ease: "sine.out",});
            gsap.fromTo( newImgElm.children[2], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "14%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[3], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-20%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[4], { bottom: "-100%", right: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "0", right: "0", autoAlpha: 1, ease: "sine.out",});
            gsap.fromTo( newImgElm.children[5], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "0", autoAlpha: 1, ease: "sine.out" });

          } else if (newImgElm.classList.contains("fifth")) {//5th Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });
            gsap.to(currentImgElm.children[0], { bottom: "-100%", autoAlpha: 0, ease: "expo.in",});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[0], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-45%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[1], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "-25%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[2], { top: "-100%", autoAlpha: 0 }, { delay: 0.1, top: "50%", autoAlpha: 1, ease: "sine.out" });
            gsap.fromTo( newImgElm.children[3], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-35%", autoAlpha: 1, ease: "sine.out" }
            );
            gsap.fromTo( newImgElm.children[4], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "-50%", autoAlpha: 1, ease: "sine.out" });

          } else if (newImgElm.classList.contains("sixth")) {//6th Slide
            gsap.to(currentImgElm, { autoAlpha: 0, ease: "expo.in" });
            gsap.to(currentImgElm.children, { bottom: "-100%", autoAlpha: 0, ease: "expo.in", stagger: 0.07,});

            gsap.to(newImgElm, { autoAlpha: 1, ease: "expo.in" });
            gsap.fromTo( newImgElm.children[0], { bottom: "-100%", autoAlpha: 0 }, { delay: 0.1, bottom: "50%", autoAlpha: 1, ease: "sine.out" });
          }
          //7th slide is not needed as it is the last slide

          currentImgElm = newImgElm;
        }
      };
    },
    { scope: appRef }
  );
  return (
    <div ref={appRef} className="slide">
      <section className="main first"></section>
      <section className="main second"></section>
      <section className="main third"></section>
      <section className="main fourth"></section>
      <section className="main fifth"></section>
      <section className="main sixth"></section>
      <section className="main seventh"></section>

      <div className="left">
        <LeftComponents/>
      </div>

      <div className="text-box">
        <TextComponent/>
      </div>

      <div className="img-box">
        <ImgComponents/>
      </div>

      <SvgPath />
    </div>
  );
}

export default Slide;
