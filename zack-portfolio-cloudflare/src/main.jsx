import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./index.css";

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

const rawProjects = String.raw`Bretman Rock - Curology	Commercial	AIRED	https://www.youtube.com/watch?v=WJ1waNatQPM	Production Assistant	Curology	2021		false	
The Prayer - Pentatonix	Music Video	AIRED	https://www.youtube.com/watch?v=wnvzwAPqniU&list=RDwnvzwAPqniU&start_radio=1	Production Assistant	Green Glow Films	2021		false	
I Just Called to Say I Love You - Pentatonix	Music Video	AIRED	https://www.youtube.com/watch?v=m4VGPIZ_wwo&list=RDm4VGPIZ_wwo&start_radio=1	Production Assistant	Green Glow Films	2021		false	
Over the River - Pentatonix	Music Video	AIRED	https://www.youtube.com/watch?v=t6LckCuIcYE&list=RDt6LckCuIcYE&start_radio=1	Production Assistant	Green Glow Films	2021		false	
Smokin’ Out the Window - Silk Sonic	Music Video	AIRED	https://www.youtube.com/watch?v=GG7fLOmlhYg&list=RDGG7fLOmlhYg&start_radio=1	Key Production Assistant	Cherry Multimedia	2021		false	
The Bottom - Gracie Abrams	Music Video	AIRED	https://www.youtube.com/watch?v=FgBDOAjj3Qs&list=RDFgBDOAjj3Qs&start_radio=1	Electric	Ways and Means	2021		false	
Brighter Side of Grey - Five Finger Death Punch	Music Video	AIRED	https://www.youtube.com/watch?v=XWm3X8GdP5Q&list=RDXWm3X8GdP5Q&start_radio=1	Key Production Assistant	Green Glow Films	2021		false	
25 Million - Roddy Ricch	Music Video	AIRED	https://www.youtube.com/watch?v=jfNNoN5g37U&list=RDjfNNoN5g37U&start_radio=1	Art PA	Hound	2021		false	
Silk Sonic Photoshoot	Photoshoot	AIRED		Production Assistant	Cherry Multimedia	2022		false	
Naturally - Tinashe	Music Video	AIRED	https://www.youtube.com/watch?v=KI-IiIt-xpg&list=RDKI-IiIt-xpg&start_radio=1	Production Assistant	Green Glow Films	2022		false	
We Are From Future	Photoshoot	AIRED		Production Assistant		2022		false	
Stream	Feature Film			Art PA / Set PA		2022		false	
Instacart X Sprouts	Commercial	AIRED		Key Production Assistant		2022		false	
Beautiful Life - Dorothy	Music Video	AIRED	https://www.youtube.com/watch?v=2SqPWW7cr18&list=RD2SqPWW7cr18&start_radio=1	Key Production Assistant	Green Glow Films	2022		false	
Born to Die - Mckenna	Music Video	AIRED	https://www.youtube.com/watch?v=hzxo9dkpQBs&list=RDhzxo9dkpQBs&start_radio=1	Production Assistant	Green Glow Films	2022		false	
Too Precious - Em Beihold	Music Video	AIRED	https://www.youtube.com/watch?v=kHNCHjmFSck&list=RDkHNCHjmFSck&start_radio=1	Production Assistant	Green Glow Films	2022		false	
Broxel	Commercial	AIRED		Production Assistant	Green Glow Films	2022		false	
Christmas on Repeat	Feature Film	AIRED	https://www.imdb.com/title/tt20445598/	Key Production Assistant	Dawns Light	2022		false	
Curology	Commercial	AIRED		Key Production Assistant		2022		false	
SMKFLWR Wiggle	Commercial	AIRED		Key Production Assistant	Monstera Content	2022		false	
Crazy Day	Music Video			Key Production Assistant	Green Glow Films	2022		false	
Mars - Scott Hoying	Music Video	AIRED	https://youtu.be/vjV-tMsVtzQ?si=FzZqR934dIcx9I16	Production Coordinator	Cult Classic	2022		false	
Wages of Sin	Feature Film	AIRED		Production Assistant	333 Pictures	2022		false	
Hey, Cowboy - Devon Cole	Music Video	AIRED	https://youtu.be/rORqh-tCKEY?si=rSiDfdCfvMuPy9Hs	Production Coordinator	The Sunflower Pictures	2022		false	
Time Machine - Daisy the Great	Music Video	AIRED	https://youtu.be/PDm4vW56Nao?si=7F1pZphazuLEBc5a	Production Coordinator	The Sunflower Pictures	2022		false	
King’s Affirmation - Iniko	Music Video	AIRED	https://youtu.be/y6hk7er4fto?si=EI7Tnb38iggjuPHl	Key Production Assistant	Green Glow Films	2022		false	
Judgement Day - Five Finger Death Punch	Music Video	AIRED	https://youtu.be/S5QgTL37g-c?si=TQ-PPJRppDwTK2Ne	Production Coordinator	Fight Milk LLC	2022		false	
The Key	Commercial	AIRED	https://youtu.be/qclhJ371gAA?si=To02c0o7CmIm9N1Z	Production Coordinator	The Sunflower Pictures	2022		false	
SMKFLWR Summer	Commercial	AIRED		Production Coordinator	Monstera Content	2022		false	
StarStriker Bandits	Proof of Concept			Production Coordinator	The Sunflower Pictures	2022		false	
IYKYK	Music Video			Production Coordinator	Cult Classic	2023		false	
Headstrong Gunner - ALDN	Music Video	AIRED	https://youtu.be/1CCbMxJehpg?si=Wlfot-o_92UG8wwo	Production Coordinator	Green Glow Films	2023		false	
Deadly Influence	Feature Film	AIRED		Key Production Assistant	Dawns Light	2023		false	
Power Trip	Commercial	AIRED		Production Coordinator	The Sunflower Pictures	2023		false	
Madison X SHEIN	Editorial/ E Commerce	AIRED		Production Coordinator	SHEIN	2023		false	
Jericho - Iniko	Music Video	AIRED	https://youtu.be/C8BP8K-ZuL0?si=ekkS2UR2zIiqLC-s	Production Coordinator	Green Glow Films	2023		false	
A Christmas Frequency	Feature Film	AIRED	https://www.imdb.com/title/tt27774522/?ref_=nm_flmg_job_1_accord_2_cdt_t_6	2nd Assistant Director	Dawns Light	2023		false	
Daffodil - The Future X	Music Video	AIRED	https://youtu.be/0J5CtNlaU1o?si=UWiZb0OTabHQ-HQd	Production Coordinator	SHEIN	2023		false	
Daffodil - The Future X	Editorial/ E Commerce	AIRED		Production Coordinator	SHEIN	2023		false	
Daffodil - The Future X	Photoshoot	AIRED		Production Coordinator	SHEIN	2023		false	
Aura X RDJ	Commercial	AIRED	https://youtu.be/B04vA8fzD00?si=mQayDDkA0MIIOVNH	Production Assistant	Arts & Sciences	2023		false	
Leaves of Glass	Short Film	AIRED		Production Coordinator & 2nd Assistant Director	The Sunflower Pictures	2023		false	
Gawx X SHEIN	Commercial	AIRED		Production Coordinator	SHEIN	2023		false	
Gawx X SHEIN	Editorial/ E Commerce	AIRED		Production Coordinator	SHEIN	2023		false	
Stride	Commercial	AIRED		Production Coordinator	LV Productions	2023		false	
Finishing Notes	Short Film	AIRED		2nd Assistant Director		2023		false	
Uneasy - Jon Batiste & Lil Wayne	Music Video	AIRED	https://youtu.be/Zs89nghjuBo?si=RmwhvRhO7LZp5N7o	Key Production Assistant	Cult Classic	2023		false	
Galloways X SHEIN	Commercial	AIRED		1st Assistant Director	SHEIN	2023		false	
Galloways X SHEIN	Photoshoot	AIRED		1st Assistant Director	SHEIN	2023		false	
Galloways X SHEIN	Editorial/ E Commerce	AIRED		1st Assistant Director	SHEIN	2023		false	
Whatchu Want - Citizen Queen	Music Video	AIRED	https://youtu.be/huWm0VY5mdM?si=gzB6RGbH5sREG0vy	1st Assistant Director	Cult Classic	2023		false	
You Wish - Flyana Boss	Music Video	AIRED	https://youtu.be/i94oYhn_d0c?si=sp25M83Z8o2uGVlQ	2nd Assistant Camera	Dire Future	2023		false	
Beyonce Sofi	Live Show	AIRED	https://www.imdb.com/title/tt29354040/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Beyonce%20ren	2nd Assistant Camera		2023		false	
Guidice X SHEIN	Commercial	AIRED		1st Assistant Director	SHEIN	2023		false	
Guidice X SHEIN	Photoshoot	AIRED		1st Assistant Director	SHEIN	2023		false	
Guidice X SHEIN	Editorial/ E Commerce	AIRED		1st Assistant Director	SHEIN	2023		false	
Danna Paola	Music Doc			1st Assistant Director	Cult Classic	2023		false	
Aldi 1	Commercial	AIRED		Production Assistant	Arts & Sciences	2023		false	
REM Beauty Pop Up	Pop Up			Art PA	Pop Up Mob	2023		false	
PTX Holiday	Music Video	AIRED		Key Production Assistant	Cult Classic	2023		false	
First Light - Hozier	Music Video			Line Producer	Green Glow Films	2023		false	
Catch the Rain - Dax	Music Video	AIRED	https://youtu.be/-qO8MnAesHU?si=Dazh6kxs4S7cL7LY	1st Assistant Director	JuniVis	2023		false	
Forgive Me	Short Film	AIRED	https://www.imdb.com/title/tt30803278/?ref_=fn_t_9	1st Assistant Director	EchoBend	2023	/images/forgive-me-poster.jpg	true	
All My Life - Falling In Reverse & Jelly Roll	Music Video	AIRED	https://youtu.be/GB9jFPUb7HA?si=-Qgp8eVK7YQRAHGS	2nd 2nd Assistant Director		2023		false	
Yokai	Short Film			1st Assistant Director	Green Glow Films	2024		false	
Quinceañera Killer	Feature Film	AIRED	https://www.imdb.com/title/tt30688978/?ref_=nv_sr_srsg_0_tt_1_nm_0_in_0_q_Quincea%C3%B1era%20Killer	2nd Assistant Director	Maverick Films	2024		false	
Appofeniacs	Feature Film	AIRED	https://www.imdb.com/title/tt29870331/?ref_=fn_t_1	Unit Production Manager	Appofeniacs	2024		false	
Eye of the Untold Her - Lindsey Stirling	Music Video	AIRED	https://youtu.be/rWwfyzX2OeM?si=DXflS64aluqRgldC	Unit Production Manager	Green Glow Films	2024		false	
We Will Rave - Kaleen	Music Video	AIRED	https://youtu.be/Kqda15G4T-4?si=A0kezEgXrYFaRmMT	2nd Assistant Camera		2024		false	
Stripping Feelings - Kaleen	Music Video	AIRED	https://youtu.be/9ITyBpYuE0s?si=O7wfK3F3QREcGqHU	2nd Assistant Camera		2024		false	
Sweeter - Cannons	Music Video	AIRED	https://youtu.be/MXfT_qcArVU?si=LDwcZdiNpRr82tWk	Production Coordinator		2024		false	
Projection	Short Film	AIRED	https://www.imdb.com/title/tt36467158/?ref_=fn_t_8	Production Coordinator	Variable X	2024		false	
Inner Gold - Lindsey Stirling	Music Video	AIRED	https://youtu.be/VnHIe_USfL4?si=4nyRzY578oNP00Vf	Production Coordinator	Green Glow Films	2024		false	
Go Girlfriend - Chris Brown	Music Video	AIRED	https://youtu.be/ep523mpr78k?si=0oirCJZQaOqywzyn	Production Coordinator	Riveting Entertainement	2024		false	
Feel Something - Chris Brown	Music Video	AIRED	https://youtu.be/TMcbFHYH-Ic?si=sLBG_ogccj0j6Vdk	Production Coordinator	Riveting Entertainement	2024		false	
Press Me - Chris Brown	Music Video	AIRED	https://youtu.be/BloAzLIcRyE?si=8-xfN4uZDMNye2nB	Production Coordinator	Riveting Entertainement	2024		false	
The Slug	Short Film			2nd Assistant Camera	The Slug	2024		false	
Alice	Short Film	IN POST		Unit Production Manager	Variable X	2024		false	
Uptown Disco - Olamide, Firebox DML, Asake	Music Video	AIRED	https://youtu.be/sg6HiPSREc8?si=nYBIQewVS7RTbnPY	2nd 2nd Assistant Director	BT Studios	2024		false	
Find - BLXST	Short Film	AIRED	https://youtu.be/YQGiHvJRHLc?si=Y5sPT2nDQnKN8s8B	2nd 2nd Assistant Director		2024		false	
Dance with the Devil - BLXST & Anderson Paak	Music Video	AIRED	https://youtu.be/SRYeHQl6Gz8?si=622lUeIXlJgQQrS5	2nd 2nd Assistant Director		2024		false	
I Need Your Love - BLXST & TY Dolla $ign	Music Video	AIRED	https://youtu.be/WzexXWW8CX8?si=H7DTW5nszGDZLvmP	2nd 2nd Assistant Director		2024		false	
Don’t Tell Comedy SD	Comedy Show			2nd Assistant Camera	Don’t Tell Comedy	2024		false	
Toxic	Feature Film	AIRED		Line Producer & 1st Assistant Director	AK Pictures	2024		false	
Pride Ball 2024	Live Show			2nd Assistant Camera	The Barn Studio	2024		false	
Stephen Glickman Live	Live Show	AIRED		Camera Operator	Locust Garden	2024		false	
4AM - Cochise	Music Video	AIRED	https://youtu.be/vH49u4iY-xg?si=kdLM7v5MVkyYEb3c	2nd Assistant Camera	Birdman Productions	2024		false	
Came Out a Beast - Flau’jae & Lil Wayne	Music Video	AIRED	https://youtu.be/baR0ubruxCQ?si=8tOidBAKbDiszGFs	2nd Assistant Camera		2024		false	
Sweatshirt	Short Film	IN POST		1st Assistant Director	BT Studios	2024		false	
Pay the Price	Short Film	IN POST		Line Producer & 1st Assistant Director		2024		false	
Code Bleu	Commercial	AIRED	https://youtu.be/iPK-UVXCbZM?si=4nTrOoXGjcPWBVVr	Line Producer & 1st Assistant Director	Elijah Garcia	2024		false	
Nomatic Luggage	Commercial	AIRED		Line Producer & 1st Assistant Director	Pan Up Productions	2024		false	
Black Rifle 1	Commercial	AIRED		Line Producer & 1st Assistant Director	Pan Up Productions	2024		false	
Napa 1	Documentary	IN POST		Line Producer & 1st Assistant Director	Bungalow 32	2024		false	
Cross the Line - Tinashe	Music Video	AIRED	https://youtu.be/wZKG3b3Hk3s?si=ZCeT4cf4FuMCL9Ge	1st Assistant Director	BT Studios	2024		true	
Napa 2	Documentary	IN POST		Line Producer & 1st Assistant Director	Bungalow 32	2024		false	
HP Poly	Commercial	AIRED	https://youtu.be/3XDIWdcvYmg?si=zqKTHU3MoiVTmLAB	1st Assistant Director	Channel Bakers	2024		true	
Black Rifle 2	Commercial	AIRED		Line Producer & 1st Assistant Director	Pan Up Productions	2024		false	
Going Down	Short Film	IN POST		1st Assistant Director	Going Down	2024		false	
Greek Live Performance	Live	AIRED	https://youtu.be/7CymJsye-r4?si=ATX1uc-Nl_ZZPNl2	Line Producer & 1st Assistant Director	Birdman Productions	2024		false	
Wham THC	Commercial			Line Producer & 1st Assistant Director	Birdman Productions	2025		false	
Hangover Burger - Carl’s JR	Commercial	AIRED	https://youtu.be/Vo-q9B1DiRU?si=Xox4xs1FFpE4C86n	AD PA	FiveTwelve Pictures	2025		false	
Typical Ways - Culture Wars	Music Video	AIRED	https://youtu.be/rFj2zExDYck?si=l2ViTH2OHo25qElD	1st Assistant Director	BT Studios	2025		true	
CherryTree x St. Jude	Live / Event	IN POST		1st Assistant Director	GroundFloor	2025		false	
Women in Film	Short Film	IN POST		Line Producer & 1st Assistant Director		2025		false	
Inside the Trends - Collider	Corporate Documentary			Executive Producer & 1st Assistant Director		2025		false	
Balloons - Muni Norodom	Music Video	AIRED	https://youtu.be/WX3R8m5GC0o?si=4JsM9lza2smme_33	1st Assistant Director	FiveTwelve Pictures	2025		true	
Lolo’s Batman	Short Film			1st Assistant Director	JuniVis	2025		false	
Black Rifle 3	Commercial			Line Producer & 1st Assistant Director	Pan Up Productions	2025		false	
True Classic 1	Commercial	AIRED		Line Producer & 1st Assistant Director	Pan Up Productions	2025		false	
FTP x Vans	Commercial	AIRED	https://youtu.be/gNaU4Av09T8?si=Zido9ooblK00GLFd	2nd Assistant Director	Paperwork	2025		false	
Chris Patrick	Music Video			1st Assistant Director	Birdman Productions	2025		false	
Riding in Cars	Short Film	IN POST		Unit Production Manager	Variable X	2025		false	
When They’re Gone	Short Film	IN POST		1st Assistant Director	Brickhead LLC	2025		false	
Mexicali	Feature Film	AIRED		2nd Assistant Director	The Farmer LLC	2025		false	
USGA	Commercial			2nd Assistant Director	Derby	2025		false	
Escape Room - Teyana Taylor	Album Short Film & Music Videos	AIRED		AD PA	Sturdy.Co	2025		false	
Almost Friday x Dollar Shave Club	Commercial	AIRED		1st Assistant Director	Almost Friday	2025		false	
Roast	Short Film	IN POST		1st Assistant Director	AFHS Presents LLC	2025		false	
Safe Travels	Short Film	IN POST		1st Assistant Director	GroundFloor	2025		false	
Kay So - Carl’s Jr	Commercial	AIRED	https://youtu.be/Pf9LNaOJ1DI?si=5gjKw8kOQtlP4due	2nd 2nd Assistant Director	FiveTwelve Pictures	2025		false	
True Classic x UFC	Commercial	AIRED	https://youtu.be/szuXYwTF8qA?si=ynJlJMLuqX7ZZy30	Line Producer & 1st Assistant Director	Pan Up Productions	2025		true	
IONGAF	Commercial	AIRED		1st Assistant Director	IONGAF	2025		false	
Taylor Fritz	Commercial	AIRED	https://youtu.be/RQSyB1W1r34?si=mrjrtdABZd4L0SZD	1st Assistant Director	Essence Picture Co	2025		true	
Taylor Fritz	Commercial	AIRED	https://youtu.be/OJgCkIFw-yg?si=rp0dpT6wqLn3uqVU	1st Assistant Director	Essence Picture Co	2025		true	
Bender - The Paradox	Music Video	AIRED	https://youtu.be/xj4g2P1QBuw?si=d-VpmDjG0IlqUSsw	Line Producer	The Sunflower Pictures	2025		true	
Evelyn & Bobbie	Commercial			Line Producer	The Sunflower Pictures	2025		false	
Cherry	Short Film	IN POST		1st Assistant Director	Cherry LLC	2025		false	
Switchblade	Commercial			Line Producer & 1st Assistant Director	Variable X	2025		false	
True Classic Isn’t What it Looks Like	Commercial	AIRED		Line Producer & 1st Assistant Director	Pan Up Productions	2025		false	
3AM - Loe Shimmy & Don Toliver	Music Video	AIRED	https://youtu.be/2ub5lOODSD4?si=f6xaX4wx89Exk3JR	2nd 2nd Assistant Director	Lucky Bastards	2025		false	
Lake House Massacre	Feature Film	IN POST		Unit Production Manager & 2nd Assistant Director	Variable X	2025		false	
Mommy Issues - Sophie Grey	Music Video	AIRED	https://youtu.be/CbJdJpqJ8FM?si=XZ3HUSjcwBhxupQc	1st Assistant Director	GroundFloor	2025		false	
SSS - Sofia Gomez	Music Video	AIRED	https://youtu.be/W9K_VaZfQ6Y?si=pag4p_RHygqEE011	1st Assistant Director	No Idea Productions LLC	2025		false	
Detective Edge	Short Film	AIRED	https://youtu.be/4Sw2K58_Jwk?si=d0JbxJGXEYK4kx0O	1st Assistant Director	Almost Friday	2025		true	
Life Gets Better With Change - True Classic	Commercial	AIRED	https://youtu.be/1wWePLhZCLo?si=Y05JcoDxgC8BQ95m	Line Producer & 1st Assistant Director	Pan Up Productions	2025		true	
Black Rifle x UFC	Commercial	AIRED	https://youtube.com/shorts/wANo9aEOVGs?si=6ENy5VCHU5q-vAuR	Line Producer & 1st Assistant Director	Pan Up Productions	2025		false	
Ring	Commercial	AIRED		2nd Assistant Camera	Knockdown Productions LLC	2025		false	
Blink Cayuga	Commercial	AIRED		1st Assistant Director	Knockdown Productions LLC	2025		false	
Flesh and Blood	Commercial	AIRED	https://youtu.be/9sOJ2BuiEqM?si=UMAaek-FEPZESyu-	1st Assistant Director	Saybrosay Productions Inc. C Corp	2025		true	
FTP x Reebok	Commercial	AIRED	https://youtu.be/RyBTq80fv80?si=5QSBBMPnTMpXxvyE	Unit Production Manager	Paperwork	2025		true	
Iron	Short Film	IN POST		1st Assistant Director	Sculpted Iron Productions	2025		false	
The Learning Curve	Web Series	IN POST		1st Assistant Director		2026		false	
Impact is Forever - True Classic	Commercial	IN POST		Line Producer & 1st Assistant Director	Pan Up Productions	2026		false	
Gambling Queen	Vertical	IN POST		Production Coordinator	Halogen x Buzzfeed	2026		false	
Time Loop - Morgan and Morgan	Short Film & Commercial	AIRED	https://youtu.be/oyeTEzDUYow?si=O_BTXgCvkXLKDXO4	1st Assistant Director	Almost Friday	2026		true	
Drugs R Bad - Lucki	Album Short Film & Cover	AIRED	https://youtu.be/BxjPilyneH0?si=NYoV33KJe0ZDr9Mx https://youtu.be/OTpnKeovaWo?si=F9L1pOHotwNrUEUn	1st Assistant Director	Zissou Construction	2026		true	
Iowa State	Short Film	AIRED	https://youtu.be/R-gIR-HBylA?si=ToBfq6i-Gtqsc5uX	1st Assistant Director	Almost Friday	2026		false	
White Claw	Socials & Commercial	AIRED	https://youtu.be/e3xA-IO_x44?si=xBIu5oDKYo0UAwIM	1st Assistant Director	Almost Friday	2026		false	
Nature Doc	Short Film	IN POST		1st Assistant Director	Cool Guyz Online	2026		false	`;

function parseProjects(raw) {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const [title = "", type = "", status = "", link = "", role = "", company = "", year = "", thumbnail = "", selected = "false", description = ""] = line.split("\t");
      return { title: title.trim(), type: type.trim(), status: status.trim(), link: link.trim(), role: role.trim(), company: company.trim(), year: year.trim(), thumbnail: thumbnail.trim(), selected: String(selected).toLowerCase() === "true", description: description.trim() };
    })
    .filter((project) => project.title.length > 0);
}

const projects = parseProjects(rawProjects);
console.assert(projects.length > 0, "Expected project parser to return projects.");
console.assert(projects.some((p) => p.title === "Bretman Rock - Curology"), "Expected Bretman Rock project to parse.");
console.assert(projects.some((p) => p.title === "Taylor Fritz"), "Expected repeated project titles to parse.");

const projectTypeGroups = ["All", "Commercial", "Music Video", "Narrative", "Branded / Corporate", "Live / Event", "Photo / Editorial", "Other"];
const roleDepartments = ["All", "Production", "Assistant Director", "Other Departments"];
const roleSubGroups = {
  Production: ["All", "Producer / LP / UPM / Production Manager", "Production Coordinator", "Production Assistant"],
  "Assistant Director": ["All", "1st AD", "2nd AD", "2nd 2nd AD", "AD PA"],
  "Other Departments": ["All", "Camera", "Electric", "Art"],
};
const viewModes = ["All Credits", "Linked Only"];

function normalizeRole(role) { return (role || "").toLowerCase(); }

function getProjectTypeGroup(type) {
  const t = String(type || "").toLowerCase();
  if (t.includes("commercial")) return "Commercial";
  if (t.includes("music video")) return "Music Video";
  if (t.includes("short film") || t.includes("feature film") || t.includes("web series") || t.includes("vertical")) return "Narrative";
  if (t.includes("branded") || t.includes("corporate") || t.includes("documentary") || t.includes("socials")) return "Branded / Corporate";
  if (t.includes("live") || t.includes("concert") || t.includes("comedy") || t.includes("pop up")) return "Live / Event";
  if (t.includes("photo") || t.includes("editorial") || t.includes("e commerce") || t.includes("e comm")) return "Photo / Editorial";
  return "Other";
}

function getRoleGroups(role) {
  const r = normalizeRole(role);
  const groups = new Set();
  if (r.includes("unit production manager") || r.includes("upm")) groups.add("Producer / LP / UPM / Production Manager");
  if (r.includes("executive producer") || r.includes("line producer") || r === "lp" || r.includes(" lp") || r.includes("producer") || r.includes("production manager")) groups.add("Producer / LP / UPM / Production Manager");
  if (r.includes("production coordinator") || r.includes("coordinator")) groups.add("Production Coordinator");
  if (r.includes("production assistant") || r.includes("set pa") || r.includes("van pa") || r === "pa") groups.add("Production Assistant");
  if (r === "ad pa" || r.includes("ad pa")) groups.add("AD PA");
  if (r.includes("2nd 2nd ad") || r.includes("second second assistant director")) groups.add("2nd 2nd AD");
  if (r.includes("2nd assistant director") || r.includes("second assistant director") || r.includes("2nd ad")) groups.add("2nd AD");
  if (r.includes("1st assistant director") || r.includes("first assistant director") || r.includes("1st ad")) groups.add("1st AD");
  if (r.includes("camera") || r.includes("camera operator") || r.includes("2nd ac") || r.includes("second assistant camera") || r.includes("2nd assistant camera")) groups.add("Camera");
  if (r.includes("electric")) groups.add("Electric");
  if (r.includes("art")) groups.add("Art");
  if (groups.size === 0) groups.add("Other");
  return Array.from(groups);
}
function getRoleGroup(role) { return getRoleGroups(role)[0] || "Other"; }
function getDepartmentAccent(role) {
  const group = getRoleGroup(role);
  if (["1st AD", "2nd AD", "2nd 2nd AD", "AD PA"].includes(group)) return "from-sky-500/20";
  if (["Producer / LP / UPM / Production Manager", "Production Coordinator", "Production Assistant"].includes(group)) return "from-amber-500/20";
  return "from-zinc-400/20";
}
function getProductionLevel(role) {
  const r = normalizeRole(role);
  if (r.includes("executive producer") || r.includes("producer") || r.includes("line producer") || r === "lp" || r.includes(" lp") || r.includes("unit production manager") || r.includes("upm") || r.includes("production manager")) return "Producer / LP / UPM / Production Manager";
  if (r.includes("production coordinator") || r.includes("coordinator")) return "Production Coordinator";
  if (r.includes("production assistant") || r.includes("set pa") || r.includes("van pa") || r === "pa") return "Production Assistant";
  return "Production Assistant";
}
function getAllUrls(url) {
  return String(url || "").replaceAll(String.fromCharCode(10), " ").replaceAll(String.fromCharCode(13), " ").replaceAll(String.fromCharCode(9), " ").split(" ").map((item) => item.trim()).filter((item) => item.startsWith("http"));
}
function getFirstUrl(url) { return getAllUrls(url)[0] || ""; }
function getYouTubeId(url) {
  const firstUrl = getFirstUrl(url);
  if (!firstUrl) return null;
  try {
    const parsed = new URL(firstUrl);
    const host = parsed.hostname.replace("www.", "");
    const pathParts = parsed.pathname.split("/").filter(Boolean);
    if (host === "youtu.be") return pathParts[0] || null;
    if (host.includes("youtube.com")) {
      if (pathParts[0] === "shorts") return pathParts[1] || null;
      if (pathParts[0] === "embed") return pathParts[1] || null;
      return parsed.searchParams.get("v");
    }
  } catch { return null; }
  return null;
}
function getEmbedUrl(url) {
  const firstUrl = getFirstUrl(url);
  if (!firstUrl) return null;
  const youtubeId = getYouTubeId(firstUrl);
  if (youtubeId) return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
  try {
    const parsed = new URL(firstUrl);
    const host = parsed.hostname.replace("www.", "");
    const pathParts = parsed.pathname.split("/").filter(Boolean);
    if (host.includes("vimeo.com")) {
      const id = pathParts[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch { return null; }
  return null;
}
console.assert(getEmbedUrl("https://youtu.be/RQSyB1W1r34?si=test") === "https://www.youtube.com/embed/RQSyB1W1r34?rel=0&modestbranding=1", "Expected youtu.be links to embed.");
console.assert(getEmbedUrl("https://youtube.com/shorts/wANo9aEOVGs?si=test") === "https://www.youtube.com/embed/wANo9aEOVGs?rel=0&modestbranding=1", "Expected YouTube Shorts links to embed.");
console.assert(getAllUrls("https://a.com https://b.com").length === 2, "Expected multiple links in one cell to parse.");

function getThumbnail(project) {
  if (!project) return null;
  if (project.thumbnail) return project.thumbnail;
  const youtubeId = getYouTubeId(project.link);
  if (youtubeId) return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const firstUrl = getFirstUrl(project.link);
  if (firstUrl.match(/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i)) return firstUrl;
  return null;
}
function isPosterProject(project) {
  const title = String(project?.title || "").toLowerCase();
  const thumbnail = String(project?.thumbnail || "").toLowerCase();
  return title.includes("forgive me") || thumbnail.includes("poster");
}
function PosterAwareImage({ project, src, className = "" }) {
  const poster = isPosterProject(project);
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden ${poster ? "bg-black/25" : ""}`}>
      <img src={src} alt="" className={poster ? "h-full w-auto object-contain opacity-100 transition" : "h-full w-full object-cover opacity-100 transition"} />
    </div>
  );
}
function hasLink(project) { return Boolean(project.link && project.link.trim()); }
function hasThumbnailSource(project) { return Boolean(getThumbnail(project)); }
function shouldShowProject(project) {
  const status = String(project.status || "").toLowerCase();
  const type = String(project.type || "").toLowerCase();
  const title = String(project.title || "").toLowerCase();
  const company = String(project.company || "").toLowerCase();
  const isInPost = status === "in post";
  const isShortFilm = type.includes("short film");
  const isMexicali = title.includes("mexicali");
  const isAlmostFriday = title.includes("almost friday") || company.includes("almost friday");
  const isPanUp = company.includes("pan up productions");
  const isLiveEvent = getProjectTypeGroup(project.type) === "Live / Event";
  if (!hasThumbnailSource(project) && !isInPost && !isShortFilm && !isMexicali && !isAlmostFriday && !isPanUp && !isLiveEvent) return false;
  return true;
}
function getProjectSynopsis(project) { return project.description || "Synopsis coming soon. Add project details, scope, responsibilities, crew notes, or production context here."; }
function sortProjects(a, b) {
  const isBlackRifle = (project) => String(project.title || "").toLowerCase().includes("black rifle");
  if (isBlackRifle(a) && !isBlackRifle(b)) return 1;
  if (!isBlackRifle(a) && isBlackRifle(b)) return -1;
  const priority = { "Producer / LP / UPM / Production Manager": 1, "Production Coordinator": 2, "Production Assistant": 3 };
  const aPriority = priority[getProductionLevel(a.role)] || 9;
  const bPriority = priority[getProductionLevel(b.role)] || 9;
  if (aPriority !== bPriority) return aPriority - bPriority;
  return Number(b.year || 0) - Number(a.year || 0);
}

function FilmPortfolioWebsite() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectTypeFilter, setProjectTypeFilter] = useState("All");
  const [roleDepartmentFilter, setRoleDepartmentFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [viewMode, setViewMode] = useState("All Credits");
  const [search, setSearch] = useState("");
  const [crawlOffset, setCrawlOffset] = useState(0);

  const goToPage = (page) => { setSelectedProject(null); setCurrentPage(page); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0); };
  const scrollToSection = (id) => { setSelectedProject(null); setCurrentPage("home"); setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 0); };

  const filteredProjects = useMemo(() => {
    const seen = new Set();
    return projects.filter(shouldShowProject).filter((p) => {
      if (viewMode === "Linked Only" && !hasLink(p)) return false;
      if (projectTypeFilter !== "All" && getProjectTypeGroup(p.type) !== projectTypeFilter) return false;
      if (roleDepartmentFilter !== "All") {
        const roleGroupsForProject = getRoleGroups(p.role);
        const departmentMap = {
          Production: ["Producer / LP / UPM / Production Manager", "Production Coordinator", "Production Assistant"],
          "Assistant Director": ["1st AD", "2nd AD", "2nd 2nd AD", "AD PA"],
          "Other Departments": ["Camera", "Electric", "Art"],
        };
        const departmentRoles = departmentMap[roleDepartmentFilter] || [];
        if (!roleGroupsForProject.some((group) => departmentRoles.includes(group))) return false;
      }
      if (roleFilter !== "All" && !getRoleGroups(p.role).includes(roleFilter)) return false;
      const searchable = `${p.title} ${p.type} ${p.role} ${p.company} ${p.year}`.toLowerCase();
      if (!searchable.includes(search.toLowerCase())) return false;
      const key = p.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).sort(sortProjects);
  }, [projectTypeFilter, roleDepartmentFilter, roleFilter, viewMode, search]);

  const featuredProjects = useMemo(() => {
    const selected = projects.filter((p) => p.selected && shouldShowProject(p));
    const featured = (selected.length ? selected : projects.filter(shouldShowProject)).slice(0, 6);
    const forgiveMeIndex = featured.findIndex((p) => p.title === "Forgive Me");
    if (forgiveMeIndex > -1 && featured.length >= 5) {
      const [forgiveMe] = featured.splice(forgiveMeIndex, 1);
      featured.splice(4, 0, forgiveMe);
    }
    return featured;
  }, []);

  const crawlProjects = useMemo(() => {
    const seen = new Set();
    return filteredProjects.filter((project) => {
      const key = `${project.title}-${project.role}-${project.type}-${project.year}`.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).sort((a, b) => {
      if (a.selected && !b.selected) return 1;
      if (!a.selected && b.selected) return -1;
      return 0;
    });
  }, [filteredProjects]);

  const shouldLoopCrawl = crawlProjects.length >= 5;
  const shiftedCrawlProjects = crawlProjects.length ? [...crawlProjects.slice(crawlOffset % crawlProjects.length), ...crawlProjects.slice(0, crawlOffset % crawlProjects.length)] : [];
  const crawlLoopProjects = shouldLoopCrawl ? [...shiftedCrawlProjects, ...shiftedCrawlProjects] : shiftedCrawlProjects;

  if (selectedProject) {
    const projectLinks = getAllUrls(selectedProject.link);
    const firstMediaLink = projectLinks[0] || "";
    const embed = getEmbedUrl(firstMediaLink);
    const thumb = getThumbnail({ ...selectedProject, link: firstMediaLink });
    return (
      <main className="bg-black text-white min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#3a3a3a]/94 backdrop-blur border-b border-white/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button onClick={() => setSelectedProject(null)} className="text-lg font-black tracking-widest uppercase">Zack Stack</button>
            <button onClick={() => setSelectedProject(null)} className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black">Back to Work</button>
          </div>
        </header>
        <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
          <button onClick={() => setSelectedProject(null)} className="mb-8 text-sm uppercase tracking-[0.22em] text-white/90 hover:text-white">← Back to all work</button>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl border border-white/30 bg-neutral-700">
                {embed ? <iframe src={embed} title={selectedProject.title} className="w-full aspect-video bg-black" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : thumb ? <PosterAwareImage project={selectedProject} src={thumb} className="w-full aspect-video" /> : <div className="flex aspect-video w-full items-center justify-center bg-neutral-700 text-xs uppercase tracking-[0.25em] text-white/35">Media coming soon</div>}
              </div>
              {projectLinks.length > 1 && <div className="grid gap-4 md:grid-cols-2">{projectLinks.slice(1).map((link, index) => { const extraEmbed = getEmbedUrl(link); return <div key={link} className="overflow-hidden rounded-2xl border border-white/30 bg-neutral-700">{extraEmbed ? <iframe src={extraEmbed} title={`${selectedProject.title} media ${index + 2}`} className="w-full aspect-video bg-black" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <a href={link} target="_blank" rel="noreferrer" className="flex aspect-video items-center justify-center text-xs uppercase tracking-[0.22em] text-white/90">Open Media {index + 2}</a>}</div>; })}</div>}
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/60">{selectedProject.type || "Project"} {selectedProject.year ? `• ${selectedProject.year}` : ""}</p>
              <div className="flex flex-wrap items-start gap-3"><h1 className="text-5xl font-black uppercase tracking-[-0.05em] leading-none text-white">{selectedProject.title}</h1>{selectedProject.status?.toLowerCase() === "in post" && <span className="mt-2 rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wider text-white/90">In Post</span>}</div>
              <div className="mt-8 space-y-5 rounded-3xl border border-white/30 bg-neutral-700 p-6">
                <div><p className="text-xs uppercase tracking-[0.22em] text-white/90">My Role</p><p className="mt-1 text-lg text-white">{selectedProject.role}</p></div>
                {selectedProject.company && <div><p className="text-xs uppercase tracking-[0.22em] text-white/90">Production Company</p><p className="mt-1 text-lg text-white">{selectedProject.company}</p></div>}
                <div><p className="text-xs uppercase tracking-[0.22em] text-white/90">Synopsis</p><p className="mt-2 text-base leading-7 text-gray-200">{getProjectSynopsis(selectedProject)}</p></div>
                {projectLinks.length > 0 && <div><p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/90">Media Links</p><div className="flex flex-wrap gap-3">{projectLinks.map((link, index) => <a key={link} href={link} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-wider text-black">Open Media {projectLinks.length > 1 ? index + 1 : ""}</a>)}</div></div>}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const ProjectCard = ({ p, i, featured = false }) => {
    const thumb = getThumbnail(p);
    return (
      <motion.button key={`${featured ? "featured" : "project"}-${p.title}-${i}`} whileHover={featured ? { scale: 1.025, y: -4 } : undefined} onClick={() => setSelectedProject(p)} className="group block text-left">
        <Card className={`relative h-full overflow-hidden border ${featured ? "border-red-400/50" : "border-white/30"} bg-gradient-to-br ${getDepartmentAccent(p.role)} to-neutral-700 transition duration-300 hover:border-red-500/70 hover:shadow-2xl hover:shadow-red-900/35`}>
          {thumb ? (
            <PosterAwareImage project={p} src={thumb} className={featured ? "h-48 w-full" : "h-36 w-full"} />
          ) : !featured ? (
            <div className="h-36 w-full border-b border-white/10 bg-black/10" />
          ) : null}
          <CardContent className={featured ? "p-5" : "p-5 min-h-[175px] flex flex-col justify-between"}>
            <div>{p.status?.toLowerCase() === "in post" && <div className="mb-3 flex flex-wrap items-center gap-2"><span className="rounded-full border border-red-400/30 px-2.5 py-1 text-[10px] uppercase tracking-wider text-red-200/80">In Post</span></div>}<p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/85">{p.type || "Project"} {p.year ? `• ${p.year}` : ""}</p><h3 className={featured ? "text-xl font-black leading-tight text-white" : "text-lg font-black leading-tight text-white"}>{p.title}</h3><p className="mt-2 text-sm text-gray-100">{p.role}</p>{p.company && <p className="mt-1 text-sm text-gray-100">{p.company}</p>}</div>
            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/90 transition group-hover:text-white">View Project →</p>
          </CardContent>
        </Card>
      </motion.button>
    );
  };

  return (
    <main className="relative bg-[#4a4a4a] text-white min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(177,18,38,0.82),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.34),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.30),transparent_38%),radial-gradient(circle_at_85%_90%,rgba(177,18,38,0.42),transparent_32%)]" />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#3a3a3a]/94 backdrop-blur border-b border-white/30"><div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"><h1 className="text-lg font-black tracking-widest uppercase">Zack Stack</h1><nav className="flex gap-6 text-xs uppercase tracking-widest text-gray-200"><button onClick={() => goToPage("home")} className="hover:text-white">Home</button><button onClick={() => scrollToSection("bio")} className="hover:text-white">Bio</button><button onClick={() => goToPage("work")} className="hover:text-white">Work</button><button onClick={() => scrollToSection("contact")} className="hover:text-white">Contact</button></nav></div></header>
        {currentPage === "home" && <><section id="home" className="max-w-7xl mx-auto px-6 pt-36 pb-10"><div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black uppercase tracking-[-0.025em] leading-none text-white">Zack Stack</motion.h1><p className="mt-4 text-xs uppercase tracking-[0.45em] text-red-400/80">Los Angeles</p><p className="mt-6 text-xl text-gray-100 max-w-2xl leading-8">Producer & Assistant Director. Built for fast sets, clean execution, and controlled chaos.</p><div className="mt-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-white/90"><span className="rounded-full border border-white/30 px-4 py-2">Commercials • Narrative • Music Videos</span><span className="rounded-full border border-red-400/50 bg-red-900/35 px-4 py-2">Available for travel</span></div><div className="mt-8 flex flex-wrap gap-3"><button onClick={() => goToPage("work")} className="rounded-full bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-600">View Work</button><button onClick={() => scrollToSection("contact")} className="rounded-full border border-red-500/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-red-500 hover:bg-red-700 hover:text-white">Contact</button></div></div><div className="overflow-hidden rounded-3xl border border-red-300/60 bg-neutral-700/90 shadow-2xl shadow-red-900/35 backdrop-blur"><img src="/images/zack-bio-pop-up2.jpg" alt="Zack Stack on set" className="h-80 w-full object-cover grayscale-0 opacity-100" /><div className="p-6"><p className="text-xs uppercase tracking-[0.3em] text-white/90">Focus</p><div className="mt-5 grid gap-3">{["Producer", "Assistant Director"].map((item) => <div key={item} className="rounded-2xl border border-red-300/60 bg-red-900/35 px-4 py-3 text-sm uppercase tracking-wider text-white/85">{item}</div>)}</div></div></div></div></section><section className="max-w-7xl mx-auto px-6 py-20"><div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 text-xs uppercase tracking-[0.35em] text-red-400/75">Featured</p><h2 className="text-5xl font-black uppercase tracking-[-0.05em] text-white">Featured Work</h2></div><p className="max-w-md text-sm leading-6 text-white/85">A front-facing snapshot of work across production, assistant directing, commercials, narrative, and music videos.</p></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{featuredProjects.map((p, i) => <ProjectCard key={`featured-${p.title}-${i}`} p={p} i={i} featured />)}</div></section><section id="bio" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20"><div className="grid gap-8 rounded-3xl border border-red-400/50 bg-neutral-700/90 p-8 shadow-2xl shadow-red-900/35 md:grid-cols-[1.05fr_0.95fr] md:p-12"><div><p className="mb-4 text-xs uppercase tracking-[0.35em] text-red-400/75">Bio</p><h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.05em] mb-6 text-white">Built for the plan. Ready for the pivot.</h2><p className="text-gray-100 leading-8 text-lg">Zack Stack is a Los Angeles-based Producer and Assistant Director working across commercials, narrative film, branded content, and music videos. He often steps into projects as a one-stop shop for production and AD work — building the plan, organizing the moving pieces, protecting the schedule, and keeping the day moving with calm urgency. Known for a hands-on work ethic and strong people skills, Zack is trusted in the space between client, talent, and crew: keeping communication clear, personalities supported, departments aligned, and the set moving without losing the room.</p></div><div className="grid grid-cols-2 gap-4"><img src="/images/zack-bio-portrait.jpg" alt="Zack Stack on set portrait" className="aspect-[3/4] w-full rounded-2xl object-cover grayscale-0" /><img src="/images/zack-car-rig.jpg" alt="Zack Stack on a car rig set" className="aspect-[3/4] w-full rounded-2xl object-cover" /><img src="/images/zack-car-rig2.jpg" alt="Zack Stack working on set" className="col-span-2 h-48 w-full rounded-2xl object-cover" /></div></div></section></>}
        {(currentPage === "work" || currentPage === "home") && <section id="work" className={`scroll-mt-24 max-w-7xl mx-auto px-6 ${currentPage === "work" ? "pt-36" : "pt-10"} pb-20`}><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-10"><div><h2 className="text-5xl font-black uppercase tracking-[-0.04em] text-white">All Work</h2><p className="mt-3 text-gray-100">Hover, tap, or focus the crawl to pause. Click a project to open details.</p></div><div className="flex flex-wrap gap-3">{viewModes.map((mode) => <button key={mode} onClick={() => setViewMode(mode)} className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider border transition ${viewMode === mode ? "bg-red-700 text-white border-red-600" : "border-white/30 text-white hover:border-red-500"}`}>{mode}</button>)}</div></div><div className="mb-6"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, role, company, year..." className="w-full rounded-2xl border border-white/30 bg-neutral-700 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-red-500" /></div><style>{`@keyframes workCrawl { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } } .work-crawl-track { animation: workCrawl 360s linear infinite; will-change: transform; transform: translate3d(0, 0, 0); backface-visibility: hidden; contain: layout paint style; } .work-crawl-wrap:hover .work-crawl-track, .work-crawl-wrap:focus-within .work-crawl-track, .work-crawl-wrap:active .work-crawl-track { animation-play-state: paused; } .work-crawl-wrap { overscroll-behavior-x: contain; -webkit-overflow-scrolling: touch; scroll-behavior: smooth; contain: layout paint; } .work-crawl-wrap iframe, .work-crawl-wrap img { pointer-events: none; } @media (prefers-reduced-motion: reduce) { .work-crawl-track { animation: none !important; transform: none !important; } } @media (hover: none), (pointer: coarse) { .work-crawl-track { animation: none !important; transform: none !important; } }`}</style><div className="work-crawl-wrap relative mb-10 overflow-x-auto overflow-y-hidden rounded-3xl border border-red-300/60 bg-neutral-600/85 py-6 shadow-2xl shadow-red-900/30 [scrollbar-color:#B11226_#171717] [scrollbar-width:thin]"><div className={`work-crawl-track flex gap-5 px-6 pb-3 ${shouldLoopCrawl ? "w-max" : "w-full justify-center [animation:none]"}`}>{crawlLoopProjects.map((p, i) => <div key={`crawl-${p.title}-${p.role}-${i}`} className="w-[300px] shrink-0"><ProjectCard p={p} i={i} /></div>)}</div></div><div className="mb-4"><p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/75">Type of Project</p><div className="flex gap-3 flex-wrap">{projectTypeGroups.map((type) => <button key={type} onClick={() => { setProjectTypeFilter(type); setRoleDepartmentFilter("All"); setRoleFilter("All"); }} className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider border transition ${projectTypeFilter === type ? "bg-red-700 text-white border-red-600" : "border-white/30 text-white hover:border-red-500"}`}>{type}</button>)}</div></div><div className="mb-5"><p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/75">Role</p><div className="flex gap-3 flex-wrap">{roleDepartments.map((department) => <button key={department} onClick={() => { setRoleDepartmentFilter(department); setRoleFilter("All"); }} className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider border transition ${roleDepartmentFilter === department ? "bg-red-700 text-white border-red-600" : "border-white/30 text-white hover:border-red-500"}`}>{department}</button>)}</div></div>{roleDepartmentFilter !== "All" && <div className="mb-10"><p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/75">Role Type</p><div className="flex gap-3 flex-wrap">{(roleSubGroups[roleDepartmentFilter] || ["All"]).map((role) => <button key={role} onClick={() => setRoleFilter(role)} className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border transition ${roleFilter === role ? "bg-red-700 text-white border-red-600" : "border-white/30 text-white hover:border-red-500"}`}>{role}</button>)}</div></div>}</section>}
        {currentPage === "home" && <section id="contact" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20"><div className="grid overflow-hidden rounded-3xl bg-zinc-100 text-black shadow-2xl shadow-white/10 md:grid-cols-[0.95fr_1.05fr]"><img src="/images/zack-contact2.jpg" alt="Zack Stack on set" className="h-full min-h-[320px] w-full object-cover" /><div className="p-8 md:p-12"><p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/45">Contact</p><h2 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.07em] leading-none mb-8">Let’s make the day.</h2><div className="flex flex-wrap gap-3"><a href="mailto:zack@zackstack.tv" className="rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-wider text-white">Email</a><a href="tel:16262267919" className="rounded-full border border-black/20 px-5 py-3 text-sm font-bold uppercase tracking-wider text-black">Call</a><a href="https://instagram.com/ZackStack_" target="_blank" rel="noreferrer" className="rounded-full border border-black/20 px-5 py-3 text-sm font-bold uppercase tracking-wider text-black">Instagram</a></div></div></div></section>}
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<FilmPortfolioWebsite />);
