function f(p, p2) {
  const v_0x36f5 = f4();
  f = function (p3, p4) {
    p3 = p3 - 390;
    let v = v_0x36f5[p3];
    return v;
  };
  return f(p, p2);
}
const vF = f;
(function (p5, p6) {
  const vF2 = f;
  const vP5 = p5();
  while (true) {
    try {
      const v2 = -parseInt(vF2(496)) / 1 * (parseInt(vF2(509)) / 2) + -parseInt(vF2(747)) / 3 * (-parseInt(vF2(490)) / 4) + parseInt(vF2(459)) / 5 * (parseInt(vF2(533)) / 6) + -parseInt(vF2(790)) / 7 + -parseInt(vF2(512)) / 8 + -parseInt(vF2(562)) / 9 * (-parseInt(vF2(622)) / 10) + parseInt(vF2(521)) / 11;
      if (v2 === p6) {
        break;
      } else {
        vP5.push(vP5.shift());
      }
    } catch (_0x55a200) {
      vP5.push(vP5.shift());
    }
  }
})(f4, 557376);
function f2() {
  const vF3 = f;
  console[vF3(705)](vF3(433));
}
f2();
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  getContentType,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  AnyMessageContent,
  prepareWAMessageMedia,
  areJidsSameUser,
  downloadContentFromMessage,
  MessageRetryMap,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  generateMessageID,
  makeInMemoryStore,
  jidDecode,
  fetchLatestBaileysVersion,
  Browsers
} = require(vF(470));
const v3 = console[vF(705)];
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require(vF(811));
const fs2 = require("fs");
const vRequire = require(vF(465));
const vRequire2 = require(vF(607));
const vRequire3 = require(vF(750));
const vRequire4 = require(vF(783));
const vRequire5 = require(vF(394));
const vRequire6 = require(vF(661));
const {
  sms,
  downloadMediaMessage
} = require(vF(767));
const vRequire7 = require(vF(616));
const axios2 = require("axios");
const {
  File
} = require(vF(593));
const {
  fromBuffer
} = require(vF(616));
const vRequire8 = require(vF(704));
const os2 = require("os");
const vRequire9 = require(vF(651));
const vRequire10 = require(vF(743));
const v4 = vRequire3[vF(577)];
const v5 = [vF(753)];
const v6 = vRequire10[vF(559)](os2.tmpdir(), "cache-temp");
if (!fs2[vF(702)](v6)) {
  fs2[vF(623)](v6);
}
const vF4 = () => {
  const vVF = vF;
  fs2[vVF(565)](v6, (p7, p8) => {
    const vVVF = vVF;
    if (p7) {
      throw p7;
    }
    for (const v7 of p8) {
      fs2[vVVF(818)](vRequire10[vVVF(559)](v6, v7), p9 => {
        if (p9) {
          throw p9;
        }
      });
    }
  });
};
setInterval(vF4, 300000);
if (!fs2[vF(702)](__dirname + vF(498))) {
  if (!vRequire3[vF(613)]) {
    return console[vF(705)](vF(472));
  }
  const v8 = vRequire3.SESSION_ID[vF(805)]("MATRIX-XMD~", "");
  const v9 = File.fromURL(vF(764) + v8);
  v9[vF(524)]((p10, p11) => {
    const vVF2 = vF;
    if (p10) {
      throw p10;
    }
    fs2[vVF2(469)](__dirname + vVF2(498), p11, () => {
      const vVVF2 = vVF2;
      console[vVVF2(705)](vVVF2(585));
    });
  });
}
const vRequire11 = require(vF(740));
const vVRequire11 = vRequire11();
const v10 = process[vF(731)][vF(399)] || 7860;
async function f3() {
  const vVF3 = vF;
  console[vVF3(705)](vVF3(707));
  const {
    state: _0x2dcf5c,
    saveCreds: _0x2d18e5
  } = await useMultiFileAuthState(__dirname + vVF3(696));
  var {
    version: _0x59ce54
  } = await fetchLatestBaileysVersion();
  const vMakeWASocket = makeWASocket({
    logger: vRequire2({
      level: vVF3(715)
    }),
    printQRInTerminal: false,
    browser: Browsers[vVF3(503)](vVF3(453)),
    syncFullHistory: true,
    auth: _0x2dcf5c,
    version: _0x59ce54
  });
  vMakeWASocket.ev.on(vVF3(629), p12 => {
    const vVVF3 = vVF3;
    const {
      connection: _0x32629e,
      lastDisconnect: _0x3aa0ad
    } = p12;
    if (_0x32629e === vVVF3(780)) {
      if (_0x3aa0ad[vVVF3(561)][vVVF3(571)][vVVF3(510)] !== DisconnectReason.loggedOut) {
        f3();
      }
    } else if (_0x32629e === vVVF3(569)) {
      console[vVVF3(705)](vVVF3(515));
      const vRequire12 = require(vVVF3(743));
      fs2[vVVF3(534)](vVVF3(684))[vVVF3(787)](p13 => {
        if (vRequire12.extname(p13).toLowerCase() == ".js") {
          require("./plugins/" + p13);
        }
      });
      console.log("[🎗️] Plugins installed successful ✅");
      console.log("[🎗️] MATRIX XMD connected to whatsapp ✅");
      let v11 = vVVF3(619) + v4 + vVVF3(653);
      vMakeWASocket.sendMessage(vMakeWASocket[vVVF3(649)].id, {
        image: {
          url: vVVF3(728)
        },
        caption: v11
      });
    }
  });
  vMakeWASocket.ev.on(vVF3(756), _0x2d18e5);
  vMakeWASocket.ev.on("messages.upsert", async p14 => {
    const vVVF32 = vVF3;
    p14 = p14.messages[0];
    if (!p14[vVVF32(525)]) {
      return;
    }
    p14[vVVF32(525)] = getContentType(p14[vVVF32(525)]) === vVVF32(589) ? p14[vVVF32(525)][vVVF32(589)][vVVF32(525)] : p14[vVVF32(525)];
    if (vRequire3[vVVF32(401)] === vVVF32(438)) {
      await vMakeWASocket.readMessages([p14.key]);
      console[vVVF32(705)](vVVF32(721) + p14[vVVF32(550)].remoteJid + vVVF32(501));
    }
    if (p14.message.viewOnceMessageV2) {
      p14[vVVF32(525)] = getContentType(p14[vVVF32(525)]) === vVVF32(589) ? p14[vVVF32(525)][vVVF32(589)][vVVF32(525)] : p14.message;
    }
    if (p14[vVVF32(550)] && p14[vVVF32(550)][vVVF32(625)] === vVVF32(794) && vRequire3[vVVF32(606)] === vVVF32(438)) {
      await vMakeWASocket[vVVF32(620)]([p14[vVVF32(550)]]);
    }
    if (p14[vVVF32(550)] && p14[vVVF32(550)][vVVF32(625)] === vVVF32(794) && vRequire3[vVVF32(640)] === vVVF32(438)) {
      const v12 = p14.key[vVVF32(595)];
      const v13 = "" + vRequire3[vVVF32(688)];
      await vMakeWASocket.sendMessage(v12, {
        text: v13,
        react: {
          text: "💚",
          key: p14.key
        }
      }, {
        quoted: p14
      });
    }
    let v14 = p14[vVVF32(525)][vVVF32(639)];
    let v15 = p14.mtype === vVVF32(539);
    if (v14 && vRequire3[vVVF32(575)] === vVVF32(438)) {
      if (v14.message.imageMessage) {
        let v16 = v14[vVVF32(525)].imageMessage[vVVF32(489)];
        let v17 = await vMakeWASocket[vVVF32(497)](v14[vVVF32(525)][vVVF32(520)]);
        return vMakeWASocket[vVVF32(508)](vVVF32(390), {
          image: {
            url: v17
          },
          caption: v16
        }, {
          quoted: p14
        });
      }
      if (v14.message.videoMessage) {
        let v18 = v14.message[vVVF32(422)][vVVF32(489)];
        let v19 = await vMakeWASocket[vVVF32(497)](v14[vVVF32(525)][vVVF32(422)]);
        return vMakeWASocket[vVVF32(508)]("255760774888@s.whatsapp.net", {
          video: {
            url: v19
          },
          caption: v18
        }, {
          quoted: p14
        });
      }
      if (v14[vVVF32(525)].audioMessage) {
        let v20 = await vMakeWASocket[vVVF32(497)](v14[vVVF32(525)][vVVF32(538)]);
        return vMakeWASocket.sendMessage(vVVF32(390), {
          audio: {
            url: v20
          },
          caption: cap
        }, {
          quoted: p14
        });
      }
    }
    const vSms = sms(vMakeWASocket, p14);
    const vGetContentType = getContentType(p14[vVVF32(525)]);
    const v21 = JSON[vVVF32(792)](p14.message);
    const v22 = p14[vVVF32(550)][vVVF32(625)];
    const v23 = vGetContentType == vVVF32(735) && p14[vVVF32(525)][vVVF32(735)].contextInfo != null ? p14[vVVF32(525)].extendedTextMessage[vVVF32(736)][vVVF32(523)] || [] : [];
    const v24 = vGetContentType === "conversation" ? p14[vVVF32(525)][vVVF32(667)] : vGetContentType === vVVF32(735) ? p14[vVVF32(525)].extendedTextMessage.text : vGetContentType == vVVF32(520) && p14[vVVF32(525)].imageMessage[vVVF32(489)] ? p14[vVVF32(525)][vVVF32(520)][vVVF32(489)] : vGetContentType == vVVF32(422) && p14[vVVF32(525)][vVVF32(422)].caption ? p14[vVVF32(525)][vVVF32(422)][vVVF32(489)] : "";
    const v25 = v24.startsWith(v4);
    const v26 = v25 ? v24[vVVF32(588)](v4[vVVF32(634)]).trim().split(" ").shift().toLowerCase() : "";
    const v27 = v24.trim()[vVVF32(436)](/ +/)[vVVF32(588)](1);
    const v28 = v27.join(" ");
    const v29 = v22.endsWith(vVVF32(578));
    const v30 = p14[vVVF32(550)][vVVF32(428)] ? vMakeWASocket[vVVF32(649)].id[vVVF32(436)](":")[0] + vVVF32(405) || vMakeWASocket.user.id : p14[vVVF32(550)][vVVF32(595)] || p14[vVVF32(550)][vVVF32(625)];
    const v31 = v30[vVVF32(436)]("@")[0];
    const v32 = vMakeWASocket.user.id[vVVF32(436)](":")[0];
    const v33 = p14[vVVF32(742)] || "Sin Nombre";
    const v34 = v32[vVVF32(672)](v31);
    const v35 = v5[vVVF32(672)](v31) || v34;
    const v36 = await jidNormalizedUser(vMakeWASocket.user.id);
    const v37 = v29 ? await vMakeWASocket[vVVF32(635)](v22)[vVVF32(614)](p15 => {}) : "";
    const v38 = v29 ? v37[vVVF32(554)] : "";
    const v39 = v29 ? await v37[vVVF32(518)] : "";
    const v40 = v29 ? await getGroupAdmins(v39) : "";
    const v41 = v29 ? v40.includes(v36) : false;
    const v42 = v29 ? v40[vVVF32(672)](v30) : false;
    const v43 = vSms[vVVF32(525)][vVVF32(626)] ? true : false;
    const vF5 = p16 => {
      const vVVVF32 = vVVF32;
      vMakeWASocket[vVVVF32(508)](v22, {
        text: p16
      }, {
        quoted: p14
      });
    };
    vMakeWASocket[vVVF32(448)] = p17 => {
      const vVVVF322 = vVVF32;
      if (!p17) {
        return p17;
      }
      if (/:\d+@/gi[vVVVF322(638)](p17)) {
        let v44 = jidDecode(p17) || {};
        return v44[vVVVF322(649)] && v44.server && v44[vVVVF322(649)] + "@" + v44[vVVVF322(522)] || p17;
      } else {
        return p17;
      }
    };
    vMakeWASocket[vVVF32(719)] = async (p18, p19, p20 = false, p21 = {}) => {
      const vVVVF323 = vVVF32;
      let v45;
      if (p21[vVVVF323(594)]) {
        p19[vVVVF323(525)] = p19.message && p19[vVVVF323(525)][vVVVF323(589)] && p19[vVVVF323(525)][vVVVF323(589)][vVVVF323(525)] ? p19[vVVVF323(525)][vVVVF323(589)][vVVVF323(525)] : p19[vVVVF323(525)] || undefined;
        v45 = Object[vVVVF323(687)](p19[vVVVF323(525)].viewOnceMessage[vVVVF323(525)])[0];
        delete (p19[vVVVF323(525)] && p19[vVVVF323(525)][vVVVF323(718)] ? p19.message.ignore : p19.message || undefined);
        delete p19[vVVVF323(525)][vVVVF323(539)][vVVVF323(525)][v45].viewOnce;
        p19[vVVVF323(525)] = {
          ...p19.message[vVVVF323(539)][vVVVF323(525)]
        };
      }
      let v46 = Object[vVVVF323(687)](p19[vVVVF323(525)])[0];
      let v47 = await generateForwardMessageContent(p19, p20);
      let v48 = Object[vVVVF323(687)](v47)[0];
      let v49 = {};
      if (v46 != vVVVF323(667)) {
        v49 = p19[vVVVF323(525)][v46][vVVVF323(736)];
      }
      v47[v48][vVVVF323(736)] = {
        ...v49,
        ...v47[v48].contextInfo
      };
      const v50 = await generateWAMessageFromContent(p18, v47, p21 ? {
        ...v47[v48],
        ...p21,
        ...(p21.contextInfo ? {
          contextInfo: {
            ...v47[v48][vVVVF323(736)],
            ...p21[vVVVF323(736)]
          }
        } : {})
      } : {});
      await vMakeWASocket.relayMessage(p18, v50.message, {
        messageId: v50[vVVVF323(550)].id
      });
      return v50;
    };
    vMakeWASocket[vVVF32(497)] = async (p22, p23, p24 = true) => {
      const vVVVF324 = vVVF32;
      let v51 = p22[vVVVF324(549)] ? p22[vVVVF324(549)] : p22;
      let v52 = (p22[vVVVF324(549)] || p22)[vVVVF324(706)] || "";
      let v53 = p22.mtype ? p22.mtype[vVVVF324(805)](/Message/gi, "") : v52.split("/")[0];
      const v54 = await downloadContentFromMessage(v51, v53);
      let v55 = Buffer.from([]);
      for await (const v56 of v54) {
        v55 = Buffer.concat([v55, v56]);
      }
      let v57 = await vRequire7[vVVVF324(761)](v55);
      trueFileName = p24 ? p23 + "." + v57[vVVVF324(665)] : p23;
      await fs2[vVVVF324(411)](trueFileName, v55);
      return trueFileName;
    };
    vMakeWASocket.downloadMediaMessage = async p25 => {
      const vVVVF325 = vVVF32;
      let v58 = (p25[vVVVF325(549)] || p25).mimetype || "";
      let v59 = p25.mtype ? p25.mtype[vVVVF325(805)](/Message/gi, "") : v58.split("/")[0];
      const v60 = await downloadContentFromMessage(p25, v59);
      let v61 = Buffer[vVVVF325(475)]([]);
      for await (const v62 of v60) {
        v61 = Buffer[vVVVF325(678)]([v61, v62]);
      }
      return v61;
    };
    vMakeWASocket[vVVF32(555)] = async (p26, p27, p28, p29, p30 = {}) => {
      const vVVVF326 = vVVF32;
      let v63 = "";
      let v64 = await axios2[vVVVF326(650)](p27);
      v63 = v64[vVVVF326(808)][vVVVF326(813)];
      if (v63[vVVVF326(436)]("/")[1] === vVVVF326(424)) {
        return vMakeWASocket.sendMessage(p26, {
          video: await getBuffer(p27),
          caption: p28,
          gifPlayback: true,
          ...p30
        }, {
          quoted: p29,
          ...p30
        });
      }
      let v65 = v63[vVVVF326(436)]("/")[0] + vVVVF326(612);
      if (v63 === vVVVF326(711)) {
        return vMakeWASocket.sendMessage(p26, {
          document: await getBuffer(p27),
          mimetype: "application/pdf",
          caption: p28,
          ...p30
        }, {
          quoted: p29,
          ...p30
        });
      }
      if (v63.split("/")[0] === "image") {
        return vMakeWASocket[vVVVF326(508)](p26, {
          image: await getBuffer(p27),
          caption: p28,
          ...p30
        }, {
          quoted: p29,
          ...p30
        });
      }
      if (v63.split("/")[0] === vVVVF326(726)) {
        return vMakeWASocket[vVVVF326(508)](p26, {
          video: await getBuffer(p27),
          caption: p28,
          mimetype: vVVVF326(608),
          ...p30
        }, {
          quoted: p29,
          ...p30
        });
      }
      if (v63[vVVVF326(436)]("/")[0] === "audio") {
        return vMakeWASocket[vVVVF326(508)](p26, {
          audio: await getBuffer(p27),
          caption: p28,
          mimetype: vVVVF326(748),
          ...p30
        }, {
          quoted: p29,
          ...p30
        });
      }
    };
    vMakeWASocket[vVVF32(615)] = (p31, p32, p33 = "", p34 = vMakeWASocket.user.id, p35 = {}) => {
      const vVVVF327 = vVVF32;
      let v66 = Object[vVVVF327(687)](p32[vVVVF327(525)])[0];
      let v67 = v66 === "ephemeralMessage";
      if (v67) {
        v66 = Object[vVVVF327(687)](p32[vVVVF327(525)].ephemeralMessage[vVVVF327(525)])[0];
      }
      let v68 = v67 ? p32[vVVVF327(525)][vVVVF327(589)].message : p32[vVVVF327(525)];
      let v69 = v68[v66];
      if (typeof v69 === vVVVF327(699)) {
        v68[v66] = p33 || v69;
      } else if (v69[vVVVF327(489)]) {
        v69[vVVVF327(489)] = p33 || v69[vVVVF327(489)];
      } else if (v69[vVVVF327(420)]) {
        v69[vVVVF327(420)] = p33 || v69.text;
      }
      if (typeof v69 !== "string") {
        v68[v66] = {
          ...v69,
          ...p35
        };
      }
      if (p32[vVVVF327(550)].participant) {
        p34 = p32.key[vVVVF327(595)] = p34 || p32.key[vVVVF327(595)];
      } else if (p32[vVVVF327(550)].participant) {
        p34 = p32[vVVVF327(550)].participant = p34 || p32[vVVVF327(550)][vVVVF327(595)];
      }
      if (p32[vVVVF327(550)][vVVVF327(625)][vVVVF327(672)](vVVVF327(405))) {
        p34 = p34 || p32[vVVVF327(550)].remoteJid;
      } else if (p32[vVVVF327(550)][vVVVF327(625)][vVVVF327(672)](vVVVF327(456))) {
        p34 = p34 || p32.key.remoteJid;
      }
      p32[vVVVF327(550)][vVVVF327(625)] = p31;
      p32[vVVVF327(550)][vVVVF327(428)] = p34 === vMakeWASocket.user.id;
      return proto[vVVVF327(536)][vVVVF327(746)](p32);
    };
    vMakeWASocket[vVVF32(784)] = async (p36, p37) => {
      const vVVVF328 = vVVF32;
      let v70;
      let v71 = Buffer.isBuffer(p36) ? p36 : /^data:.*?\/.*?;base64,/i[vVVVF328(638)](p36) ? Buffer[vVVVF328(475)](p36[vVVVF328(436)]`,`[1], vVVVF328(580)) : /^https?:\/\//.test(p36) ? await (v70 = await getBuffer(p36)) : fs2[vVVVF328(702)](p36) ? (v73 = p36, fs2[vVVVF328(446)](p36)) : typeof p36 === vVVVF328(699) ? p36 : Buffer[vVVVF328(474)](0);
      let v72 = (await vRequire7.fromBuffer(v71)) || {
        mime: vVVVF328(408),
        ext: vVVVF328(766)
      };
      let v73 = vRequire10[vVVVF328(559)](__filename, __dirname + new Date() * 1 + "." + v72.ext);
      if (v71 && p37) {
        fs2[vVVVF328(763)][vVVVF328(469)](v73, v71);
      }
      return {
        res: v70,
        filename: v73,
        size: await getSizeMedia(v71),
        ...v72,
        data: v71
      };
    };
    vMakeWASocket[vVVF32(506)] = async (p38, p39, p40, p41 = {}, p42 = {}) => {
      const vVVVF329 = vVVF32;
      let v74 = await vMakeWASocket[vVVVF329(784)](p39, true);
      let {
        filename: _0x20f7cd,
        size: _0x39728b,
        ext: _0x19171b,
        mime: _0x4ded2e,
        data: _0x21311a
      } = v74;
      let v75 = "";
      let v_0x4ded2e = _0x4ded2e;
      let v_0x20f7cd = _0x20f7cd;
      if (p42.asDocument) {
        v75 = vVVVF329(570);
      }
      if (p42[vVVVF329(601)] || /webp/.test(_0x4ded2e)) {
        let {
          writeExif: _0x50f4e9
        } = require(vVVVF329(464));
        let v76 = {
          mimetype: _0x4ded2e,
          data: _0x21311a
        };
        v_0x20f7cd = await _0x50f4e9(v76, {
          packname: Config[vVVVF329(669)],
          author: Config[vVVVF329(669)],
          categories: p42[vVVVF329(627)] ? p42[vVVVF329(627)] : []
        });
        await fs2[vVVVF329(763)][vVVVF329(818)](_0x20f7cd);
        v75 = "sticker";
        v_0x4ded2e = vVVVF329(393);
      } else if (/image/.test(_0x4ded2e)) {
        v75 = "image";
      } else if (/video/[vVVVF329(638)](_0x4ded2e)) {
        v75 = vVVVF329(726);
      } else if (/audio/[vVVVF329(638)](_0x4ded2e)) {
        v75 = "audio";
      } else {
        v75 = vVVVF329(570);
      }
      await vMakeWASocket[vVVVF329(508)](p38, {
        [v75]: {
          url: v_0x20f7cd
        },
        mimetype: v_0x4ded2e,
        fileName: p40,
        ...p42
      }, {
        quoted: p41,
        ...p42
      });
      return fs2[vVVVF329(763)][vVVVF329(818)](v_0x20f7cd);
    };
    vMakeWASocket[vVVF32(528)] = async p43 => {
      const vVVVF3210 = vVVF32;
      return [...p43[vVVVF3210(397)](/@([0-9]{5,16}|0)/g)][vVVVF3210(785)](p44 => p44[1] + vVVVF3210(405));
    };
    vMakeWASocket.sendMedia = async (p45, p46, p47 = "", p48 = "", p49 = "", p50 = {}) => {
      const vVVVF3211 = vVVF32;
      let v77 = await vMakeWASocket.getFile(p46, true);
      let {
        mime: _0xcd5b61,
        ext: _0x428c2c,
        res: _0x3964ac,
        data: _0x5279b3,
        filename: _0x2adda8
      } = v77;
      if (_0x3964ac && _0x3964ac[vVVVF3211(659)] !== 200 || file[vVVVF3211(634)] <= 65536) {
        try {
          throw {
            json: JSON[vVVVF3211(752)](file[vVVVF3211(604)]())
          };
        } catch (_0x35efae) {
          if (_0x35efae[vVVVF3211(530)]) {
            throw _0x35efae[vVVVF3211(530)];
          }
        }
      }
      let v78 = "";
      let v_0xcd5b61 = _0xcd5b61;
      let v_0x2adda8 = _0x2adda8;
      if (p50[vVVVF3211(610)]) {
        v78 = vVVVF3211(570);
      }
      if (p50[vVVVF3211(601)] || /webp/[vVVVF3211(638)](_0xcd5b61)) {
        let {
          writeExif: _0x2f9096
        } = require(vVVVF3211(664));
        let v79 = {
          mimetype: _0xcd5b61,
          data: _0x5279b3
        };
        v_0x2adda8 = await _0x2f9096(v79, {
          packname: p50[vVVVF3211(669)] ? p50.packname : Config[vVVVF3211(669)],
          author: p50[vVVVF3211(671)] ? p50[vVVVF3211(671)] : Config[vVVVF3211(671)],
          categories: p50.categories ? p50[vVVVF3211(627)] : []
        });
        await fs2.promises[vVVVF3211(818)](_0x2adda8);
        v78 = vVVVF3211(772);
        v_0xcd5b61 = "image/webp";
      } else if (/image/[vVVVF3211(638)](_0xcd5b61)) {
        v78 = vVVVF3211(609);
      } else if (/video/[vVVVF3211(638)](_0xcd5b61)) {
        v78 = "video";
      } else if (/audio/[vVVVF3211(638)](_0xcd5b61)) {
        v78 = vVVVF3211(511);
      } else {
        v78 = vVVVF3211(570);
      }
      await vMakeWASocket.sendMessage(p45, {
        [v78]: {
          url: v_0x2adda8
        },
        caption: p48,
        mimetype: v_0xcd5b61,
        fileName: p47,
        ...p50
      }, {
        quoted: p49,
        ...p50
      });
      return fs2[vVVVF3211(763)][vVVVF3211(818)](v_0x2adda8);
    };
    vMakeWASocket.sendVideoAsSticker = async (p51, p52, p53 = {}) => {
      const vVVVF3212 = vVVF32;
      let v80;
      if (p53 && (p53[vVVVF3212(669)] || p53[vVVVF3212(671)])) {
        v80 = await writeExifVid(p52, p53);
      } else {
        v80 = await videoToWebp(p52);
      }
      await vMakeWASocket[vVVVF3212(508)](p51, {
        sticker: {
          url: v80
        },
        ...p53
      }, p53);
    };
    vMakeWASocket[vVVF32(778)] = async (p54, p55, p56 = {}) => {
      const vVVVF3213 = vVVF32;
      let v81;
      if (p56 && (p56[vVVVF3213(669)] || p56.author)) {
        v81 = await writeExifImg(p55, p56);
      } else {
        v81 = await imageToWebp(p55);
      }
      await vMakeWASocket.sendMessage(p54, {
        sticker: {
          url: v81
        },
        ...p56
      }, p56);
    };
    vMakeWASocket.sendTextWithMentions = async (p57, p58, p59, p60 = {}) => vMakeWASocket[vVVF32(508)](p57, {
      text: p58,
      contextInfo: {
        mentionedJid: [...p58[vVVF32(397)](/@(\d{0,16})/g)][vVVF32(785)](p61 => p61[1] + vVVF32(405))
      },
      ...p60
    }, {
      quoted: p59
    });
    vMakeWASocket[vVVF32(502)] = async (p62, p63, p64 = "", p65 = "", p66) => {
      const vVVVF3214 = vVVF32;
      let v82 = Buffer[vVVVF3214(802)](p63) ? p63 : /^data:.*?\/.*?;base64,/i[vVVVF3214(638)](p63) ? Buffer[vVVVF3214(475)](p63[vVVVF3214(436)]`,`[1], "base64") : /^https?:\/\//[vVVVF3214(638)](p63) ? await await getBuffer(p63) : fs2[vVVVF3214(702)](p63) ? fs2[vVVVF3214(446)](p63) : Buffer[vVVVF3214(474)](0);
      return await vMakeWASocket[vVVVF3214(508)](p62, {
        image: v82,
        caption: p64,
        ...p66
      }, {
        quoted: p65
      });
    };
    vMakeWASocket.sendText = (p67, p68, p69 = "", p70) => vMakeWASocket[vVVF32(508)](p67, {
      text: p68,
      ...p70
    }, {
      quoted: p69
    });
    vMakeWASocket[vVVF32(769)] = (p71, p72 = [], p73, p74, p75 = "", p76 = {}) => {
      const vVVVF3215 = vVVF32;
      let v83 = {
        text: p73,
        footer: p74,
        buttons: p72,
        headerType: 2,
        ...p76
      };
      vMakeWASocket[vVVVF3215(508)](p71, v83, {
        quoted: p75,
        ...p76
      });
    };
    vMakeWASocket[vVVF32(701)] = async (p77, p78 = "", p79 = "", p80, p81 = [], p82, p83 = {}) => {
      const vVVVF3216 = vVVF32;
      let v84 = await prepareWAMessageMedia({
        image: p80,
        jpegThumbnail: p82
      }, {
        upload: vMakeWASocket.waUploadToServer
      });
      var vGenerateWAMessageFromContent = generateWAMessageFromContent(p77, proto.Message[vVVVF3216(746)]({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: v84[vVVVF3216(520)],
            hydratedContentText: p78,
            hydratedFooterText: p79,
            hydratedButtons: p81
          }
        }
      }), p83);
      vMakeWASocket[vVVVF3216(507)](p77, vGenerateWAMessageFromContent.message, {
        messageId: vGenerateWAMessageFromContent[vVVVF3216(550)].id
      });
    };
    if (v25 && vRequire3[vVVF32(605)] === vVVF32(438)) {
      await vMakeWASocket.readMessages([p14[vVVF32(550)]]);
    }
    if (v31[vVVF32(672)](vVVF32(753))) {
      if (v43) {
        return;
      }
      vSms.react(vVVF32(482));
    }
    if (!v43 && v31 !== v32) {
      if (vRequire3.AUTO_REACT === vVVF32(438)) {
        const v85 = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", vVVF32(486), "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝", "😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌", "😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔", "🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩", "🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂", "📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔", "❣️", "☀️", "🌙", "🌃", "🏠", "🚪", vVVF32(441), vVVF32(519), vVVF32(771), "🇦🇺", "🇯🇵", "🇫🇷", vVVF32(733), "👍", "👎", "👏", "👫", "👭", "👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴", "🏞️", "🌊", "🚗", "🚌", vVVF32(695), vVVF32(599), vVVF32(558), "🚣", "🛥", "🚂", "🚁", "🚀", vVVF32(737), vVVF32(815), vVVF32(477), "🏄‍♂️", "🎾", "🏀", "🏈", "🎯", "🏆", "??", "⬆️", "⬇️", "⇒", "⇐", "↩️", "↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵", "🟢", "🔹", "🔺", "💯", "👑", "🤣", vVVF32(568), "🤷‍♀️", vVVF32(419), vVVF32(655), vVVF32(429), vVVF32(741), vVVF32(450), vVVF32(590), "🏻", vVVF32(592), vVVF32(662), vVVF32(516), "🕴‍♀️", "💇‍♂️", vVVF32(551), "🚫", "🚽", vVVF32(775), "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", vVVF32(447), "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", "🕷️", vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", vVVF32(486), "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿", "🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", vVVF32(633), "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻", vVVF32(532), "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", vVVF32(481), "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", vVVF32(632), "😏", "😒", "🙄", "😬", vVVF32(434), "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", vVVF32(676), "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", vVVF32(775), "💣", "💬", vVVF32(415), "🗨️", vVVF32(617), "💭", "💤", "👋", "🤚", vVVF32(544), "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", vVVF32(803), vVVF32(439), vVVF32(670), vVVF32(636), vVVF32(410), "👨‍🦲", "👩", "👩‍🦰", vVVF32(816), vVVF32(630), vVVF32(493), vVVF32(812), vVVF32(560), vVVF32(694), "🧑‍🦲", vVVF32(729), vVVF32(602), "🧓", "👴", "👵", "🙍", vVVF32(460), vVVF32(463), "🙎", vVVF32(600), vVVF32(598), "🙅", "🙅‍♂️", vVVF32(655), "🙆", "🙆‍♂️", vVVF32(741), "💁", vVVF32(681), vVVF32(573), "🙋", vVVF32(483), vVVF32(654), "🧏", vVVF32(566), vVVF32(663), "🙇", vVVF32(806), vVVF32(500), "🤦", vVVF32(450), vVVF32(590), "🤷", "🤷‍♂️", vVVF32(674), vVVF32(631), vVVF32(647), vVVF32(776), "🧑‍🎓", vVVF32(814), vVVF32(478), "🧑‍🏫", "👨‍🏫", vVVF32(744), vVVF32(417), "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", vVVF32(697), vVVF32(781), vVVF32(660), vVVF32(514), vVVF32(817), vVVF32(603), vVVF32(584), "👨‍🏭", "👩‍🏭", vVVF32(398), vVVF32(796), "👩‍💼", vVVF32(546), vVVF32(759), "👩‍🔬", vVVF32(482), vVVF32(409), vVVF32(462), vVVF32(583), "👨‍🎤", vVVF32(416), vVVF32(513), vVVF32(556), "👩‍🎨", vVVF32(402), vVVF32(685), vVVF32(430), vVVF32(423), vVVF32(449), vVVF32(444), vVVF32(488), vVVF32(618), vVVF32(642), "👮", vVVF32(586), vVVF32(437), vVVF32(800), "🕵️‍♂️", vVVF32(648), "💂", vVVF32(451), "💂‍♀️", "🥷", "👷", vVVF32(679), vVVF32(656), "🤴", "👸", "👳", vVVF32(807), "👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", vVVF32(786), "👰", vVVF32(797), vVVF32(557), "🤰", "🤱", vVVF32(621), vVVF32(643), vVVF32(798), "👼", "🎅", "🤶", vVVF32(495), "🦸", vVVF32(710), vVVF32(754), "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", vVVF32(455), "🧛", vVVF32(768), vVVF32(572), "🧜", vVVF32(545), vVVF32(461), "🧝", vVVF32(563), vVVF32(529), "🧞", vVVF32(700), "🧞‍♀️", "🧟", "🧟‍♂️", vVVF32(517), "💆", "💆‍♂️", vVVF32(662), "💇", vVVF32(730), vVVF32(551), "🚶", "🚶‍♂️", vVVF32(703), "🧍", vVVF32(487), vVVF32(757), "🧎", vVVF32(773), "🧎‍♀️", "🧑‍🦯", "👨‍🦯", vVVF32(492), vVVF32(774), vVVF32(540), "👩‍🦼", "🧑‍🦽", vVVF32(666), vVVF32(491), "🏃", vVVF32(737), "🏃‍♀️", "💃", "🕺", vVVF32(579), "👯", "👯‍♂️", vVVF32(782), "🧖", vVVF32(628), vVVF32(698), "🧗", vVVF32(432), "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", vVVF32(716), "🏌️‍♀️", "🏄", vVVF32(673), vVVF32(810), "🚣", "🚣‍♂️", vVVF32(724), "🏊", vVVF32(477), vVVF32(553), "⛹️", vVVF32(547), vVVF32(641), vVVF32(412), vVVF32(527), vVVF32(815), "🚴", vVVF32(395), vVVF32(804), "🚵", vVVF32(485), vVVF32(471), "🤸", "🤸‍♂️", vVVF32(406), "🤼", vVVF32(689), "🤼‍♀️", "🤽", vVVF32(637), vVVF32(725), "🤾", vVVF32(403), vVVF32(440), "🤹", vVVF32(658), vVVF32(480), "🧘", vVVF32(795), vVVF32(421), "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", vVVF32(567), vVVF32(499), "💑", vVVF32(442), "👨‍❤️‍👨", vVVF32(751), "👪", vVVF32(723), vVVF32(443), vVVF32(396), vVVF32(713), vVVF32(799), "👨‍👨‍👦", vVVF32(760), vVVF32(645), vVVF32(458), vVVF32(732), vVVF32(564), vVVF32(466), vVVF32(624), vVVF32(426), vVVF32(445), vVVF32(427), vVVF32(644), "👨‍👧", vVVF32(745), vVVF32(473), vVVF32(657), vVVF32(597), vVVF32(542), vVVF32(400), vVVF32(479), vVVF32(392), "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
        const v86 = v85[Math[vVVF32(727)](Math.random() * v85[vVVF32(634)])];
        vSms[vVVF32(738)](v86);
      }
    }
    if (!v43 && v31 === v32) {
      if (vRequire3[vVVF32(652)] === "true") {
        const v87 = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", vVVF32(486), "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝", "😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌", "😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔", "🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩", "🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂", "📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔", "❣️", "☀️", "🌙", "🌃", "🏠", "🚪", vVVF32(441), vVVF32(519), "🇨🇦", vVVF32(646), vVVF32(404), vVVF32(717), "🇪🇸", "👍", "👎", "👏", "👫", "👭", "👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴", "🏞️", "🌊", "🚗", "🚌", vVVF32(695), "🛫️", "🛬️", "🚣", "🛥", "🚂", "🚁", "🚀", vVVF32(737), vVVF32(815), vVVF32(477), "🏄‍♂️", "🎾", "🏀", "🏈", "🎯", "🏆", "??", "⬆️", "⬇️", "⇒", "⇐", "↩️", "↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵", "🟢", "🔹", "🔺", "💯", "👑", "🤣", vVVF32(568), vVVF32(674), vVVF32(419), "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", vVVF32(450), vVVF32(590), "🏻", vVVF32(592), vVVF32(662), vVVF32(516), vVVF32(762), "💇‍♂️", vVVF32(551), "🚫", "🚽", "🕳️", "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", vVVF32(486), "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", vVVF32(775), "💣", "🔫", vVVF32(543), vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", vVVF32(486), "📸", "📷", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿", "🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", vVVF32(447), "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", vVVF32(708), "💀", "👻", "🕺", "💃", vVVF32(579), "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", vVVF32(579), "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", vVVF32(543), "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", vVVF32(407), "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", vVVF32(633), "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", vVVF32(809), "🦫", "🦔", "🦇", "🐻", "🐻‍🎗️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", vVVF32(481), "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", vVVF32(632), "😏", "😒", "🙄", "😬", vVVF32(434), "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", vVVF32(494), "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", vVVF32(676), vVVF32(587), "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", vVVF32(712), vVVF32(617), "💭", "💤", "👋", "🤚", vVVF32(544), "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", vVVF32(803), vVVF32(439), vVVF32(670), vVVF32(636), vVVF32(410), vVVF32(548), "👩", vVVF32(574), "🧑‍🦰", vVVF32(630), vVVF32(493), vVVF32(812), vVVF32(560), vVVF32(694), "🧑‍🦲", vVVF32(729), vVVF32(602), "🧓", "👴", "👵", "🙍", "🙍‍♂️", vVVF32(463), "🙎", vVVF32(600), vVVF32(598), "🙅", vVVF32(419), vVVF32(655), "🙆", vVVF32(429), vVVF32(741), "💁", vVVF32(681), vVVF32(573), "🙋", vVVF32(483), vVVF32(654), "🧏", vVVF32(566), "🧏‍♀️", "🙇", vVVF32(806), vVVF32(500), "🤦", vVVF32(450), vVVF32(590), "🤷", vVVF32(568), vVVF32(674), vVVF32(631), vVVF32(647), vVVF32(776), "🧑‍🎓", "👨‍🎓", vVVF32(478), vVVF32(668), vVVF32(537), vVVF32(744), vVVF32(417), "👨‍⚖️", vVVF32(758), vVVF32(749), vVVF32(541), vVVF32(692), vVVF32(697), vVVF32(781), vVVF32(660), "🧑‍🔧", vVVF32(817), vVVF32(603), vVVF32(584), vVVF32(789), vVVF32(682), "🧑‍💼", vVVF32(796), vVVF32(484), "🧑‍🔬", vVVF32(759), vVVF32(788), vVVF32(482), vVVF32(409), vVVF32(462), vVVF32(583), "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", vVVF32(467), "🧑‍✈️", vVVF32(685), vVVF32(430), vVVF32(423), "👨‍🚀", vVVF32(444), vVVF32(488), "👨‍🚒", vVVF32(642), "👮", vVVF32(586), vVVF32(437), vVVF32(800), vVVF32(734), vVVF32(648), "💂", vVVF32(451), vVVF32(535), "🥷", "👷", vVVF32(679), vVVF32(656), "🤴", "👸", "👳", vVVF32(807), "👳‍♀️", "👲", "🧕", "🤵", vVVF32(504), vVVF32(786), "👰", vVVF32(797), "👰‍♀️", "🤰", "🤱", vVVF32(621), vVVF32(643), "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", vVVF32(710), vVVF32(754), "🦹", vVVF32(526), vVVF32(431), "🧙", vVVF32(505), vVVF32(591), "🧚", vVVF32(582), vVVF32(455), "🧛", vVVF32(768), "🧛‍♀️", "🧜", vVVF32(545), vVVF32(461), "🧝", vVVF32(563), vVVF32(529), "🧞", "🧞‍♂️", vVVF32(677), "🧟", "🧟‍♂️", vVVF32(517), "💆", vVVF32(592), vVVF32(662), "💇", vVVF32(730), "💇‍♀️", "🚶", vVVF32(686), vVVF32(703), "🧍", vVVF32(487), vVVF32(757), "🧎", vVVF32(773), vVVF32(777), vVVF32(755), "👨‍🦯", vVVF32(492), vVVF32(774), vVVF32(540), vVVF32(457), vVVF32(793), vVVF32(666), vVVF32(491), "🏃", vVVF32(737), "🏃‍♀️", "💃", "🕺", vVVF32(579), "👯", vVVF32(425), vVVF32(782), "🧖", "🧖‍♂️", vVVF32(698), "🧗", vVVF32(432), vVVF32(714), "🤺", "🏇", "⛷️", "🏂", vVVF32(418), vVVF32(716), vVVF32(552), "🏄", vVVF32(673), vVVF32(810), "🚣", vVVF32(770), "🚣‍♀️", "🏊", vVVF32(477), "🏊‍♀️", "⛹️", vVVF32(547), "⛹️‍♀️", vVVF32(412), vVVF32(527), vVVF32(815), "🚴", vVVF32(395), vVVF32(804), "🚵", "🚵‍♂️", vVVF32(471), "🤸", vVVF32(391), vVVF32(406), "🤼", vVVF32(689), vVVF32(675), "🤽", vVVF32(637), vVVF32(725), "🤾", "🤾‍♂️", vVVF32(440), "🤹", vVVF32(658), vVVF32(480), "🧘", vVVF32(795), vVVF32(421), "🛀", "🛌", vVVF32(683), "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", vVVF32(499), "💑", vVVF32(442), "👨‍❤️‍👨", vVVF32(751), "👪", vVVF32(723), vVVF32(443), vVVF32(396), "👨‍👩‍👦‍👦", vVVF32(799), "👨‍👨‍👦", vVVF32(760), vVVF32(645), vVVF32(458), vVVF32(732), vVVF32(564), "👩‍👩‍👧", vVVF32(624), vVVF32(426), vVVF32(445), vVVF32(427), "👨‍👦‍👦", vVVF32(720), vVVF32(745), vVVF32(473), vVVF32(657), "👩‍👦‍👦", vVVF32(542), vVVF32(400), vVVF32(479), vVVF32(392), "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
        const v88 = v87[Math.floor(Math.random() * v87[vVVF32(634)])];
        vSms[vVVF32(738)](v88);
      }
    }
    if (!v43 && v31 !== v32) {
      if (vRequire3[vVVF32(739)] === vVVF32(438)) {
        const v89 = (vRequire3[vVVF32(779)] || vVVF32(791))[vVVF32(436)](",");
        const v90 = v89[Math[vVVF32(727)](Math[vVVF32(709)]() * v89[vVVF32(634)])];
        vSms[vVVF32(738)](v90);
      }
    }
    if (!v43 && v31 === v32) {
      if (vRequire3[vVVF32(739)] === vVVF32(438)) {
        const v91 = (vRequire3[vVVF32(779)] || vVVF32(791)).split(",");
        const v92 = v91[Math.floor(Math[vVVF32(709)]() * v91[vVVF32(634)])];
        vSms.react(v92);
      }
    }
    if (!v35 && vRequire3[vVVF32(476)] === vVVF32(722)) {
      return;
    }
    if (!v35 && v29 && vRequire3[vVVF32(476)] === vVVF32(690)) {
      return;
    }
    if (!v35 && !v29 && vRequire3[vVVF32(476)] === vVVF32(581)) {
      return;
    }
    const vRequire13 = require(vVVF32(596));
    const v93 = v25 ? v24[vVVF32(588)](1)[vVVF32(414)]()[vVVF32(436)](" ")[0][vVVF32(693)]() : false;
    if (v25) {
      const v94 = vRequire13.commands[vVVF32(680)](p84 => p84[vVVF32(435)] === v93) || vRequire13[vVVF32(611)].find(p85 => p85[vVVF32(801)] && p85[vVVF32(801)].includes(v93));
      if (v94) {
        if (v94[vVVF32(738)]) {
          vMakeWASocket[vVVF32(508)](v22, {
            react: {
              text: v94[vVVF32(738)],
              key: p14[vVVF32(550)]
            }
          });
        }
        try {
          v94[vVVF32(576)](vMakeWASocket, p14, vSms, {
            from: v22,
            quoted: v23,
            body: v24,
            isCmd: v25,
            command: v26,
            args: v27,
            q: v28,
            isGroup: v29,
            sender: v30,
            senderNumber: v31,
            botNumber2: v36,
            botNumber: v32,
            pushname: v33,
            isMe: v34,
            isOwner: v35,
            groupMetadata: v37,
            groupName: v38,
            participants: v39,
            groupAdmins: v40,
            isBotAdmins: v41,
            isAdmins: v42,
            reply: vF5
          });
        } catch (_0x52ec30) {
          console.error("[PLUGIN ERROR] " + _0x52ec30);
        }
      }
    }
    vRequire13[vVVF32(611)].map(async p86 => {
      const vVVVF3217 = vVVF32;
      if (v24 && p86.on === "body") {
        p86[vVVVF3217(576)](vMakeWASocket, p14, vSms, {
          from: v22,
          l: v3,
          quoted: v23,
          body: v24,
          isCmd: v25,
          command: p86,
          args: v27,
          q: v28,
          isGroup: v29,
          sender: v30,
          senderNumber: v31,
          botNumber2: v36,
          botNumber: v32,
          pushname: v33,
          isMe: v34,
          isOwner: v35,
          groupMetadata: v37,
          groupName: v38,
          participants: v39,
          groupAdmins: v40,
          isBotAdmins: v41,
          isAdmins: v42,
          reply: vF5
        });
      } else if (p14.q && p86.on === vVVVF3217(420)) {
        p86[vVVVF3217(576)](vMakeWASocket, p14, vSms, {
          from: v22,
          l: v3,
          quoted: v23,
          body: v24,
          isCmd: v25,
          command: p86,
          args: v27,
          q: v28,
          isGroup: v29,
          sender: v30,
          senderNumber: v31,
          botNumber2: v36,
          botNumber: v32,
          pushname: v33,
          isMe: v34,
          isOwner: v35,
          groupMetadata: v37,
          groupName: v38,
          participants: v39,
          groupAdmins: v40,
          isBotAdmins: v41,
          isAdmins: v42,
          reply: vF5
        });
      } else if ((p86.on === vVVVF3217(609) || p86.on === "photo") && p14[vVVVF3217(531)] === "imageMessage") {
        p86[vVVVF3217(576)](vMakeWASocket, p14, vSms, {
          from: v22,
          l: v3,
          quoted: v23,
          body: v24,
          isCmd: v25,
          command: p86,
          args: v27,
          q: v28,
          isGroup: v29,
          sender: v30,
          senderNumber: v31,
          botNumber2: v36,
          botNumber: v32,
          pushname: v33,
          isMe: v34,
          isOwner: v35,
          groupMetadata: v37,
          groupName: v38,
          participants: v39,
          groupAdmins: v40,
          isBotAdmins: v41,
          isAdmins: v42,
          reply: vF5
        });
      } else if (p86.on === vVVVF3217(772) && p14[vVVVF3217(531)] === vVVVF3217(765)) {
        p86[vVVVF3217(576)](vMakeWASocket, p14, vSms, {
          from: v22,
          l: v3,
          quoted: v23,
          body: v24,
          isCmd: v25,
          command: p86,
          args: v27,
          q: v28,
          isGroup: v29,
          sender: v30,
          senderNumber: v31,
          botNumber2: v36,
          botNumber: v32,
          pushname: v33,
          isMe: v34,
          isOwner: v35,
          groupMetadata: v37,
          groupName: v38,
          participants: v39,
          groupAdmins: v40,
          isBotAdmins: v41,
          isAdmins: v42,
          reply: vF5
        });
      }
    });
  });
}
vVRequire11[vF(452)](vRequire11[vF(468)](vRequire10[vF(559)](__dirname, vF(691))));
vVRequire11[vF(454)]("/", (p87, p88) => {
  p88.redirect("/hanstztech.html");
});
vVRequire11.listen(v10, () => console[vF(705)](vF(413) + v10));
setTimeout(() => {
  f3();
}, 4000);
function f4() {
  const v95 = ["/sessions/creds.json", "👩‍❤️‍💋‍👩", "🙇‍♀️", " as read.", "sendImage", "macOS", "🤵‍♂️", "🧙‍♂️", "sendFile", "relayMessage", "sendMessage", "59788RhdLmV", "statusCode", "audio", "836904nHsThN", "🧑‍🎨", "🧑‍🔧", "[🎗️] 🛠️ Installing Plugins.", "🕴‍♂️", "🧟‍♀️", "participants", "🇬🇧", "imageMessage", "8912013Riozan", "server", "quotedMessage", "download", "message", "🦹‍♂️", "🏋️‍♂️", "parseMention", "🧝‍♀️", "json", "type", "🐻‍🎗️", "122664LfwzrI", "readdirSync", "💂‍♀️", "WebMessageInfo", "👨‍🏫", "audioMessage", "viewOnceMessage", "👨‍🦼", "👨‍🌾", "👩‍👧", "🕷️", "🖐️", "🧜‍♂️", "🧑‍🔬", "⛹️‍♂️", "👨‍🦲", "msg", "key", "💇‍♀️", "🏌️‍♀️", "🏊‍♀️", "subject", "sendFileUrl", "👨‍🎨", "👰‍♀️", "🛬️", "join", "🧑‍🦳", "error", "144iAhrNn", "🧝‍♂️", "👩‍👩‍👦", "readdir", "🧏‍♂️", "👨‍❤️‍💋‍👨", "🤷‍♂️", "open", "document", "output", "🧛‍♀️", "💁‍♀️", "👩‍🦰", "ANTI_VV", "function", "PREFIX", "@g.us", "🕴️", "base64", "groups", "🧚‍♂️", "🧑‍🎤", "🧑‍🏭", "MatrixXmd Session downloaded ✅", "👮‍♂️", "❤️‍🩹", "slice", "ephemeralMessage", "🤦‍♀️", "🧙‍♀️", "💆‍♂️", "megajs", "readViewOnce", "participant", "./command", "👩‍👦‍👦", "🙎‍♀️", "🛫️", "🙎‍♂️", "asSticker", "👱‍♂️", "👩‍🔧", "toString", "READ_CMD", "AUTO_STATUS_SEEN", "pino", "video/mp4", "image", "asDocument", "commands", "Message", "SESSION_ID", "catch", "cMod", "file-type", "🗯️", "👨‍🚒", "*Hi Owner😇, Congrats MatrixXmd Connected Successfully! 🚀* \n\n> Light, Cold, Icy, Fast & Rich Loaded With Features, MatrixXmd W.A Bot.\n\n *Thanks for using MATRIX-XMD 🎗️* \n\n> Join WhatsApp Channel :- 🛠️\n \nhttps://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31\n\n- *your bot Prefix ➜*  ", "readMessages", "👩‍🍼", "588090WJYYuW", "mkdirSync", "👩‍👩‍👧‍👦", "remoteJid", "reactionMessage", "categories", "🧖‍♂️", "connection.update", "👩‍🦱", "🧑‍⚕️", "😶‍🌫️", "🐈‍⬛", "length", "groupMetadata", "👨‍🦱", "🤽‍♂️", "test", "viewOnceMessageV2", "AUTO_STATUS_REPLY", "⛹️‍♀️", "👩‍🚒", "👨‍🍼", "👨‍👦‍👦", "👨‍👨‍👧‍👦", "🇦🇺", "👨‍⚕️", "🕵️‍♀️", "user", "head", "crypto", "AUTO_REACT", "\n\nDont forget to  star our repo☺ \n\nhttps://github.com/devhanstz/MATRIX-XMD\n\n> © 🎐ᴘϙᴡᴇʀᴇᴅ ʙʏ ᴍʀ Mᴀᴛʀɪx-Xᴍᴅ  ⚡", "🙋‍♀️", "🙅‍♀️", "👷‍♀️", "👩‍👦", "🤹‍♂️", "status", "👩‍🍳", "util", "💆‍♀️", "🧏‍♀️", "./exif", "ext", "👨‍🦽", "conversation", "🧑‍🏫", "packname", "👨‍🦰", "author", "includes", "🏄‍♂️", "🤷‍♀️", "🤼‍♀️", "❤️‍🔥", "🧞‍♀️", "concat", "👷‍♂️", "find", "💁‍♂️", "👩‍🏭", "🧑‍🤝‍🧑", "./plugins/", "👨‍✈️", "🚶‍♂️", "keys", "AUTO_STATUS_MSG", "🤼‍♂️", "inbox", "lib", "👩‍🌾", "toLowerCase", "👩‍🦲", "🛣️", "/sessions/", "🧑‍🍳", "🧖‍♀️", "string", "🧞‍♂️", "send5ButImg", "existsSync", "🚶‍♀️", "body-parser", "log", "mimetype", "[🎗️] MatrixXmd Connecting to WhatsApp ⏳️...", "🕸️", "random", "🦸‍♂️", "application/pdf", "🗨️", "👨‍👩‍👦‍👦", "🧗‍♀️", "silent", "🏌️‍♂️", "🇫🇷", "ignore", "copyNForward", "👨‍👧", "Marked message from ", "private", "👨‍👩‍👦", "🚣‍♀️", "🤽‍♀️", "video", "floor", "https://i.ibb.co/c29j5P5/OIG2-4.jpg", "👱‍♀️", "💇‍♂️", "env", "👨‍👨‍👧‍👧", "🇪🇸", "🕵️‍♂️", "extendedTextMessage", "contextInfo", "🏃‍♂️", "react", "CUSTOM_REACT", "express", "🙆‍♀️", "pushName", "path", "👩‍🏫", "👨‍👧‍👦", "fromObject", "2778gfXTIP", "audio/mpeg", "🧑‍🌾", "./config", "👩‍❤️‍👩", "parse", "263719647303", "🦸‍♀️", "🧑‍🦯", "creds.update", "🧍‍♀️", "👩‍⚖️", "👨‍🔬", "👨‍👨‍👧", "fromBuffer", "🕴‍♀️", "promises", "https://mega.nz/file/", "stickerMessage", ".bin", "./lib/msg", "🧛‍♂️", "sendButtonText", "🚣‍♂️", "🇨🇦", "sticker", "🧎‍♂️", "🧑‍🦼", "🕳️", "👩‍⚕️", "🧎‍♀️", "sendImageAsSticker", "CUSTOM_REACT_EMOJIS", "close", "👨‍🍳", "👯‍♀️", "qrcode-terminal", "getFile", "map", "🤵‍♀️", "forEach", "👩‍🔬", "👨‍🏭", "3954202lwrjph", "🥲,😂,👍🏻,🙂,😔", "stringify", "🧑‍🦽", "status@broadcast", "🧘‍♂️", "👨‍💼", "👰‍♂️", "🧑‍🍼", "👨‍👩‍👧‍👧", "🕵️", "alias", "isBuffer", "🧔‍♂️", "🚴‍♀️", "replace", "🙇‍♂️", "👳‍♂️", "headers", "🐿️", "🏄‍♀️", "./lib/functions", "👩‍🦳", "content-type", "👨‍🎓", "🏋️‍♀️", "🧑‍🦰", "👨‍🔧", "unlink", "255760774888@s.whatsapp.net", "🤸‍♂️", "🗣️", "image/webp", "wa-sticker-formatter", "🚴‍♂️", "👨‍👩‍👧‍👦", "matchAll", "🧑‍💼", "PORT", "👩‍👧‍👦", "READ_MESSAGE", "🧑‍✈️", "🤾‍♂️", "🇯🇵", "@s.whatsapp.net", "🤸‍♀️", "🐕‍🦺", "application/octet-stream", "👨‍💻", "👨‍🦳", "writeFileSync", "🏋️", "Server listening on port http://localhost:", "trim", "👁️‍🗨️", "👩‍🎤", "🧑‍⚖️", "🏌️", "🙅‍♂️", "text", "🧘‍♀️", "videoMessage", "🧑‍🚀", "gif", "👯‍♂️", "👩‍👩‍👦‍👦", "👨‍👦", "fromMe", "🙆‍♂️", "👩‍✈️", "🦹‍♀️", "🧗‍♂️", "Hello World!", "😮‍💨", "pattern", "split", "👮‍♀️", "true", "🧔‍♀️", "🤾‍♀️", "🇺🇸", "👩‍❤️‍👨", "👨‍👩‍👧", "👩‍🚀", "👩‍👩‍👧‍👧", "readFileSync", "🕯️", "decodeJid", "👨‍🚀", "🤦‍♂️", "💂‍♂️", "use", "Firefox", "get", "🧚‍♀️", "@broadcast", "👩‍🦼", "👨‍👨‍👦‍👦", "85cWxUgZ", "🙍‍♂️", "🧜‍♀️", "👩‍💻", "🙍‍♀️", "./exif.js", "fluent-ffmpeg", "👩‍👩‍👧", "👩‍🎨", "static", "writeFile", "@whiskeysockets/baileys", "🚵‍♀️", "Please add your session to SESSION_ID env !!", "👨‍👧‍👧", "alloc", "from", "MODE", "🏊‍♂️", "👩‍🎓", "👩‍👧‍👧", "🤹‍♀️", "🕊️", "🧑‍💻", "🙋‍♂️", "👩‍💼", "🚵‍♂️", "📽️", "🧍‍♂️", "🧑‍🚒", "caption", "1012BfRMuw", "👩‍🦽", "👩‍🦯", "🧑‍🦱", "😵‍💫", "🧑‍🎄", "37KGZwpK", "downloadAndSaveMediaMessage"];
  f4 = function () {
    return v95;
  };
  return f4();
}
