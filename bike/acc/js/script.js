// var items = document.querySelectorAll(".list__item")

// items.forEach(item => {
//   var itemTitle = item.querySelector(".list__item__title")
//   var itemTitleOutline = item.querySelector(".list__item__titleOutline")
//   var itemImg = item.querySelector(".list__item img")
  
//   var itemTL = gsap.timeline({scrollTrigger: {
//     trigger: item,
//     start: "0% 75%",
//     end: "25% 50%",
//     scrub: 3,
//   }})
  
//   itemTL.fromTo(itemTitle, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
//   itemTL.fromTo(itemTitleOutline, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
  
//   gsap.fromTo(itemImg, {x: "60vw", y : "60vh", rotate: -30}, {x: "-60vw", y: "-60vh", rotate: 30, ease: "none", scrollTrigger: {
//     trigger: item,
//     start: "50% 100%",
//     end: "100% 50%",
//     scrub: 3,
//   }})
// })


// gsap.timeline()
//     .set('.logo',     { x:215, y:482 })
//     .set('.chip',     { x:148, y:66 })
//     .set('.knot',     { x:22, y:250 })
//     .set('.numTxt',   { x:22, y:375 })
//     .set('.nameTxt',  { x:22, y:410 })
//     .add(centerMain(), 0.2)
//     .from('.ball',    { duration:2,
//                         transformOrigin:'50% 50%',
//                         scale:0,
//                         opacity:0,
//                         ease:'elastic',
//                         stagger:0.2
//                       }, 0)
//     .fromTo('.card',  { x:200,
//                         y:40,
//                         transformOrigin:'50% 50%',
//                         rotation:-4,
//                         skewX:10,
//                         skewY:4,
//                         scale:2,
//                         opacity:0
//                       },{
//                         duration:1.3,
//                         skewX:0,
//                         skewY:0,
//                         scale:1,
//                         opacity:1,
//                         ease:'power4.inOut'
//                       }, 0.2)
        


// function centerMain(){ gsap.set('.main', {x:'50%', xPercent:-50, y:'50%', yPercent:-50}); }
// window.onresize = centerMain;

// window.onmousemove = (e)=> {
//   let winPercent = { x:e.clientX/window.innerWidth, y:e.clientY/window.innerHeight },
//       distFromCenter = 1 - Math.abs((e.clientX - window.innerWidth/2)/window.innerWidth*2);
  
//   gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
//       .to('.card',        {rotation:-7+9*winPercent.x}, 0)
//       .to('.fillLight',   {opacity:distFromCenter}, 0)  
//       .to('.bg',          {x:100-200*winPercent.x, y:20-40*winPercent.y}, 0) 
// }

// Create a new QRCode instance
// var qrCode = new QRCode(document.getElementById("ticket"), {
//     width: 200,
//     height: 200
//   });
  
//   // Flight ticket data
//   var ticketData = {
//     flightNumber: "FL123",
//     departure: "New York",
//     destination: "London",
//     date: "2023-05-20",
//     passengerName: "John Doe"
//   };
  
//   // Generate the ticket content
//   var ticketContent = `
//     <h2>Flight Ticket</h2>
//     <p><strong>Flight Number:</strong> ${ticketData.flightNumber}</p>
//     <p><strong>Departure:</strong> ${ticketData.departure}</p>
//     <p><strong>Destination:</strong> ${ticketData.destination}</p>
//     <p><strong>Date:</strong> ${ticketData.date}</p>
//     <p><strong>Passenger Name:</strong> ${ticketData.passengerName}</p>
//   `;
  
//   // Set the ticket content
//   document.getElementById("ticket").innerHTML = ticketContent;
  
//   // Generate the QR code
//   qrCode.makeCode(JSON.stringify(ticketData));


