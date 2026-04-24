import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

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
Taylor Fritz	Commercial	AIRED	https://youtu.be/RQSyB1W1r34?si=mrjrtdABZd4L0SZD https://youtu.be/OJgCkIFw-yg?si=rp0dpT6wqLn3uqVU	1st Assistant Director	Essence Picture Co	2025		true
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
Nature Doc	Short Film	IN POST		1st Assistant Director	Cool Guyz Online	2026		false
`;

function parseProjects(raw) {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const [title = '', type = '', status = '', link = '', role = '', company = '', year = '', thumbnail = '', selected = 'false', description = ''] = line.split('\t');
      return {
        title: title.trim(),
        type: type.trim(),
        status: status.trim(),
        link: link.trim(),
        role: role.trim(),
        company: company.trim(),
        year: year.trim(),
        thumbnail: thumbnail.trim(),
        selected: String(selected).toLowerCase() === 'true',
        description: description.trim(),
      };
    })
    .filter((project) => project.title.length > 0);
}

const projects = parseProjects(rawProjects);
const projectTypeGroups = ['All', 'Commercial', 'Music Video', 'Narrative', 'Branded / Corporate', 'Live / Event', 'Photo / Editorial', 'Other'];
const roleDepartments = ['All', 'Production', 'Assistant Director', 'Other Departments'];
const roleSubGroups = {
  Production: ['All', 'Producer / LP / UPM / Production Manager', 'Production Coordinator', 'Production Assistant'],
  'Assistant Director': ['All', '1st AD', '2nd AD', '2nd 2nd AD', 'AD PA'],
  'Other Departments': ['All', 'Camera', 'Electric', 'Art'],
};
const viewModes = ['All Credits', 'Linked Only'];

function normalizeRole(role) { return String(role || '').toLowerCase(); }
function getAllUrls(url) { return String(url || '').replaceAll(String.fromCharCode(10), ' ').replaceAll(String.fromCharCode(13), ' ').replaceAll(String.fromCharCode(9), ' ').split(' ').map((i) => i.trim()).filter((i) => i.startsWith('http')); }
function getFirstUrl(url) { return getAllUrls(url)[0] || ''; }
function getYouTubeId(url) {
  const firstUrl = getFirstUrl(url); if (!firstUrl) return null;
  try {
    const parsed = new URL(firstUrl); const host = parsed.hostname.replace('www.', ''); const parts = parsed.pathname.split('/').filter(Boolean);
    if (host === 'youtu.be') return parts[0] || null;
    if (host.includes('youtube.com')) {
      if (parts[0] === 'shorts') return parts[1] || null;
      if (parts[0] === 'embed') return parts[1] || null;
      return parsed.searchParams.get('v');
    }
  } catch { return null; }
  return null;
}
function getEmbedUrl(url) {
  const firstUrl = getFirstUrl(url); if (!firstUrl) return null;
  const youtubeId = getYouTubeId(firstUrl); if (youtubeId) return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
  try {
    const parsed = new URL(firstUrl); const host = parsed.hostname.replace('www.', ''); const parts = parsed.pathname.split('/').filter(Boolean);
    if (host.includes('vimeo.com')) return parts[0] ? `https://player.vimeo.com/video/${parts[0]}` : null;
  } catch { return null; }
  return null;
}
function getThumbnail(project) {
  if (!project) return null;
  if (project.thumbnail) return project.thumbnail;
  const youtubeId = getYouTubeId(project.link); if (youtubeId) return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const firstUrl = getFirstUrl(project.link); if (firstUrl.match(/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i)) return firstUrl;
  return null;
}
function getProjectTypeGroup(type) {
  const t = String(type || '').toLowerCase();
  if (t.includes('commercial')) return 'Commercial';
  if (t.includes('music video')) return 'Music Video';
  if (t.includes('short film') || t.includes('feature film') || t.includes('web series') || t.includes('vertical')) return 'Narrative';
  if (t.includes('branded') || t.includes('corporate') || t.includes('documentary') || t.includes('socials')) return 'Branded / Corporate';
  if (t.includes('live') || t.includes('concert') || t.includes('comedy') || t.includes('pop up')) return 'Live / Event';
  if (t.includes('photo') || t.includes('editorial') || t.includes('e commerce') || t.includes('e comm')) return 'Photo / Editorial';
  return 'Other';
}
function getRoleGroups(role) {
  const r = normalizeRole(role);
  const groups = new Set();
  if (r.includes('executive producer') || r.includes('line producer') || r === 'lp' || r.includes(' lp') || r.includes('producer') || r.includes('unit production manager') || r.includes('upm') || r.includes('production manager')) groups.add('Producer / LP / UPM / Production Manager');
  if (r.includes('production coordinator') || r.includes('coordinator')) groups.add('Production Coordinator');
  if (r.includes('production assistant') || r.includes('set pa') || r.includes('van pa') || r === 'pa') groups.add('Production Assistant');
  if (r === 'ad pa' || r.includes('ad pa')) groups.add('AD PA');
  if (r.includes('2nd 2nd ad') || r.includes('second second assistant director') || r.includes('2nd 2nd assistant director')) groups.add('2nd 2nd AD');
  if (r.includes('2nd assistant director') || r.includes('second assistant director') || r.includes('2nd ad')) groups.add('2nd AD');
  if (r.includes('1st assistant director') || r.includes('first assistant director') || r.includes('1st ad')) groups.add('1st AD');
  if (r.includes('camera') || r.includes('camera operator') || r.includes('2nd ac') || r.includes('second assistant camera')) groups.add('Camera');
  if (r.includes('electric')) groups.add('Electric');
  if (r.includes('art')) groups.add('Art');
  if (groups.size === 0) groups.add('Other');
  return Array.from(groups);
}
function getRoleDepartmentGroups(role) {
  const groups = getRoleGroups(role);
  const out = new Set();
  if (groups.some((g) => ['Producer / LP / UPM / Production Manager', 'Production Coordinator', 'Production Assistant'].includes(g))) out.add('Production');
  if (groups.some((g) => ['1st AD', '2nd AD', '2nd 2nd AD', 'AD PA'].includes(g))) out.add('Assistant Director');
  if (groups.some((g) => ['Camera', 'Electric', 'Art'].includes(g))) out.add('Other Departments');
  return Array.from(out);
}
function getRoleGroup(role) { return getRoleGroups(role)[0] || 'Other'; }
function getDepartmentAccent(role) {
  const departments = getRoleDepartmentGroups(role);
  if (departments.includes('Assistant Director')) return 'ad-accent';
  if (departments.includes('Production')) return 'prod-accent';
  return 'other-accent';
}
function hasLink(project) { return Boolean(project.link && project.link.trim()); }
function hasThumbnailSource(project) { return Boolean(getThumbnail(project)); }
function shouldShowProject(project) {
  const status = String(project.status || '').toLowerCase();
  const type = String(project.type || '').toLowerCase();
  const title = String(project.title || '').toLowerCase();
  const company = String(project.company || '').toLowerCase();
  const isInPost = status === 'in post';
  const isShortFilm = type.includes('short film');
  const isMexicali = title.includes('mexicali');
  const isAlmostFriday = title.includes('almost friday') || company.includes('almost friday');
  const isPanUp = company.includes('pan up productions');
  const isLiveEvent = getProjectTypeGroup(project.type) === 'Live / Event';
  if (!hasThumbnailSource(project) && !isInPost && !isShortFilm && !isMexicali && !isAlmostFriday && !isPanUp && !isLiveEvent) return false;
  return true;
}
function getProjectSynopsis(project) { return project.description || 'Synopsis coming soon. Add project details, scope, responsibilities, crew notes, or production context here.'; }
function sortProjects(a, b) {
  const isBlackRifle = (project) => String(project.title || '').toLowerCase().includes('black rifle');
  if (isBlackRifle(a) && !isBlackRifle(b)) return 1;
  if (!isBlackRifle(a) && isBlackRifle(b)) return -1;
  return Number(b.year || 0) - Number(a.year || 0);
}
function dedupeProjects(list) {
  const seen = new Set();
  return list.filter((p) => {
    const key = p.title.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function ProjectCard({ project, onSelect, featured = false }) {
  const thumb = getThumbnail(project);
  const accent = getDepartmentAccent(project.role);
  return (
    <button className={`card project-card ${accent} ${featured ? 'featured-card' : ''}`} onClick={() => onSelect(project)}>
      {thumb ? <img src={thumb} alt="" className={project.title === 'Forgive Me' ? 'thumb poster-thumb' : 'thumb'} /> : null}
      <div className="card-body">
        {project.status?.toLowerCase() === 'in post' && <div className="badges"><span>In Post</span></div>}
        <p className="meta">{project.type || 'Project'} {project.year ? `• ${project.year}` : ''}</p>
        <h3>{project.title}</h3>
        <p className="role">{project.role}</p>
        {project.company && <p className="company">{project.company}</p>}
        <p className="view">View Project →</p>
      </div>
    </button>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectTypeFilter, setProjectTypeFilter] = useState('All');
  const [roleDepartmentFilter, setRoleDepartmentFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');
  const [viewMode, setViewMode] = useState('All Credits');
  const [search, setSearch] = useState('');

  const goToPage = (page) => { setSelectedProject(null); setCurrentPage(page); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0); };
  const scrollToSection = (id) => { setSelectedProject(null); setCurrentPage('home'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0); };

  const filteredProjects = useMemo(() => {
    return dedupeProjects(projects.filter(shouldShowProject).filter((p) => {
      if (viewMode === 'Linked Only' && !hasLink(p)) return false;
      if (projectTypeFilter !== 'All' && getProjectTypeGroup(p.type) !== projectTypeFilter) return false;
      if (roleDepartmentFilter !== 'All' && !getRoleDepartmentGroups(p.role).includes(roleDepartmentFilter)) return false;
      if (roleFilter !== 'All' && !getRoleGroups(p.role).includes(roleFilter)) return false;
      return `${p.title} ${p.type} ${p.role} ${p.company} ${p.year}`.toLowerCase().includes(search.toLowerCase());
    })).sort(sortProjects);
  }, [projectTypeFilter, roleDepartmentFilter, roleFilter, viewMode, search]);

  const featuredProjects = useMemo(() => {
    const selected = projects.filter((p) => p.selected && shouldShowProject(p));
    const featured = (selected.length ? selected : projects.filter(shouldShowProject)).slice(0, 6);
    const forgiveMeIndex = featured.findIndex((p) => p.title === 'Forgive Me');
    if (forgiveMeIndex > -1 && featured.length >= 5) {
      const [forgiveMe] = featured.splice(forgiveMeIndex, 1);
      featured.splice(4, 0, forgiveMe);
    }
    return featured;
  }, []);

  const crawlProjects = useMemo(() => {
    return dedupeProjects(filteredProjects).sort((a, b) => {
      if (a.selected && !b.selected) return 1;
      if (!a.selected && b.selected) return -1;
      return 0;
    });
  }, [filteredProjects]);

  if (selectedProject) {
    const links = getAllUrls(selectedProject.link);
    const firstLink = links[0] || '';
    const embed = getEmbedUrl(firstLink);
    const thumb = getThumbnail({ ...selectedProject, link: firstLink });
    return (
      <main className="site"><Header goToPage={goToPage} scrollToSection={scrollToSection} />
        <section className="detail page-pad">
          <button className="back" onClick={() => setSelectedProject(null)}>← Back to work</button>
          <div className="detail-grid">
            <div className="media-stack">
              <MediaTile embed={embed} thumb={thumb} title={selectedProject.title} />
              {links.slice(1).map((link, index) => <MediaTile key={link} embed={getEmbedUrl(link)} thumb={null} title={`${selectedProject.title} media ${index + 2}`} link={link} />)}
            </div>
            <div className="detail-info card">
              <p className="meta">{selectedProject.type} {selectedProject.year ? `• ${selectedProject.year}` : ''}</p>
              <h1>{selectedProject.title}</h1>
              {selectedProject.status?.toLowerCase() === 'in post' && <span className="status">In Post</span>}
              <Info label="My Role" value={selectedProject.role} />
              {selectedProject.company && <Info label="Production Company" value={selectedProject.company} />}
              <div><p className="label">Synopsis</p><p className="synopsis">{getProjectSynopsis(selectedProject)}</p></div>
              {links.length > 0 && <div><p className="label">Media Links</p><div className="link-row">{links.map((link, i) => <a key={link} href={link} target="_blank" rel="noreferrer">Open Media {links.length > 1 ? i + 1 : ''}</a>)}</div></div>}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="site"><Header goToPage={goToPage} scrollToSection={scrollToSection} />
      {currentPage === 'home' && <>
        <section id="home" className="hero page-pad">
          <div className="hero-grid">
            <div>
              <h1>Zack Stack</h1>
              <p className="location">Los Angeles</p>
              <p className="tagline">Producer & Assistant Director. Built for fast sets, clean execution, and controlled chaos.</p>
              <div className="pill-row"><span>Commercials • Narrative • Music Videos</span><span>Available for travel</span></div>
              <div className="cta-row"><button onClick={() => goToPage('work')}>View Work</button><button className="outline" onClick={() => scrollToSection('contact')}>Contact</button></div>
            </div>
            <div className="focus card photo-card">
              <img src="/images/zack-hero.jpg" alt="Zack Stack on set" />
              <div className="focus-content"><p className="label">Focus</p><span>Producer</span><span>Assistant Director</span></div>
            </div>
          </div>
        </section>
        <section className="section"><div className="section-head"><div><p className="eyebrow">Featured</p><h2>Featured Work</h2></div><p>A front-facing snapshot of work across production, assistant directing, commercials, narrative, and music videos.</p></div><div className="grid">{featuredProjects.map((p, i) => <ProjectCard key={`${p.title}-${i}`} project={p} onSelect={setSelectedProject} featured />)}</div></section>
        <Bio />
      </>}
      {(currentPage === 'work' || currentPage === 'home') && <WorkSection currentPage={currentPage} filteredProjects={filteredProjects} crawlProjects={crawlProjects} setSelectedProject={setSelectedProject} viewMode={viewMode} setViewMode={setViewMode} search={search} setSearch={setSearch} projectTypeFilter={projectTypeFilter} setProjectTypeFilter={setProjectTypeFilter} roleDepartmentFilter={roleDepartmentFilter} setRoleDepartmentFilter={setRoleDepartmentFilter} roleFilter={roleFilter} setRoleFilter={setRoleFilter} />}
      {currentPage === 'home' && <Contact />}
    </main>
  );
}

function Header({ goToPage, scrollToSection }) { return <header className="topbar"><div><button className="brand" onClick={() => goToPage('home')}>Zack Stack</button><nav><button onClick={() => goToPage('home')}>Home</button><button onClick={() => scrollToSection('bio')}>Bio</button><button onClick={() => goToPage('work')}>Work</button><button onClick={() => scrollToSection('contact')}>Contact</button></nav></div></header>; }
function Bio() { return <section id="bio" className="section"><div className="bio card bio-grid"><div><p className="eyebrow">Bio</p><h2>Built for the plan. Ready for the pivot.</h2><p>Zack Stack is a Los Angeles-based Producer and Assistant Director working across commercials, narrative film, branded content, and music videos. He often steps into projects as a one-stop shop for production and AD work — building the plan, organizing the moving pieces, protecting the schedule, and keeping the day moving with calm urgency. Known for a hands-on work ethic and strong people skills, Zack is trusted in the space between client, talent, and crew: keeping communication clear, personalities supported, departments aligned, and the set moving without losing the room.</p></div><div className="bio-photos"><img src="/images/zack-headshot.jpg" alt="Zack Stack portrait" /><img src="/images/zack-car-rig.jpg" alt="Zack Stack on set" /><img src="/images/zack-bio-pop-up.jpg" alt="Zack Stack production work" /></div></div></section>; }
function Contact() { return <section id="contact" className="section contact"><div className="contact-inner"><img src="/images/zack-contact2.jpg" alt="Zack Stack" /><div><p className="eyebrow">Contact</p><h2>Let’s make the day.</h2><div className="contact-row"><a href="mailto:zack@zackstack.tv">Email</a><a href="tel:16262267919">Call</a><a href="https://instagram.com/ZackStack_" target="_blank" rel="noreferrer">Instagram</a></div></div></div></section>; }
function Info({ label, value }) { return <div><p className="label">{label}</p><p>{value}</p></div>; }
function MediaTile({ embed, thumb, title, link }) { return <div className="media-tile">{embed ? <iframe src={embed} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : thumb ? <img src={thumb} alt="" /> : link ? <a href={link} target="_blank" rel="noreferrer">Open Media</a> : <span>Media coming soon</span>}</div>; }
function WorkSection(props) {
  const { currentPage, filteredProjects, crawlProjects, setSelectedProject, viewMode, setViewMode, search, setSearch, projectTypeFilter, setProjectTypeFilter, roleDepartmentFilter, setRoleDepartmentFilter, roleFilter, setRoleFilter } = props;
  const shouldLoop = crawlProjects.length >= 5;
  const loopProjects = shouldLoop ? [...crawlProjects, ...crawlProjects] : crawlProjects;
  return <section id="work" className={`section work ${currentPage === 'work' ? 'page-pad' : ''}`}><div className="section-head"><div><h2>All Work</h2><p>{filteredProjects.length} showing</p></div><div className="filter-row">{viewModes.map((m) => <button className={viewMode === m ? 'active' : ''} key={m} onClick={() => setViewMode(m)}>{m}</button>)}</div></div><div className="crawl-wrap"><div className={`crawl-track ${shouldLoop ? '' : 'still'}`}>{loopProjects.map((p, i) => <ProjectCard key={`${p.title}-${i}`} project={p} onSelect={setSelectedProject} />)}</div></div><input className="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, role, company, year..." /><Filter label="Type of Project" items={projectTypeGroups} value={projectTypeFilter} setValue={(v) => { setProjectTypeFilter(v); setRoleDepartmentFilter('All'); setRoleFilter('All'); }} /><Filter label="Role" items={roleDepartments} value={roleDepartmentFilter} setValue={(v) => { setRoleDepartmentFilter(v); setRoleFilter('All'); }} />{roleDepartmentFilter !== 'All' && <Filter label="Role Type" items={roleSubGroups[roleDepartmentFilter] || ['All']} value={roleFilter} setValue={setRoleFilter} />}</section>;
}
function Filter({ label, items, value, setValue }) { return <div className="filter-block"><p>{label}</p><div className="filter-row">{items.map((item) => <button key={item} className={value === item ? 'active' : ''} onClick={() => setValue(item)}>{item}</button>)}</div></div>; }

createRoot(document.getElementById('root')).render(<App />);
