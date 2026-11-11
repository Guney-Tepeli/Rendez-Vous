/**
 * Turkish UI strings. This file is the SOURCE OF TRUTH for which keys exist:
 * `TranslationKey` is derived from it, and en.ts must provide every key.
 * To add a string: add it here first, then the compiler points at en.ts.
 *
 * `{name}` marks a placeholder filled in by translate().
 */
export const tr = {
  "app.title": "Fransızca",
  "language.label": "Anlatım dili",
  "language.TR": "Türkçe",
  "language.EN": "İngilizce",

  "module.recall": "Aktif Hatırlama",
  "module.grammar": "Dilbilgisi",
  "module.output": "Cümle Kurma",
  "module.phonetics": "Telaffuz ve Gölgeleme",
  "module.minutes": "{n} dk",

  "rating.again": "Tekrar",
  "rating.hard": "Zor",
  "rating.good": "İyi",
  "rating.easy": "Kolay",

  "gender.m": "eril",
  "gender.f": "dişil",

  "pos.noun": "isim",
  "pos.verb": "fiil",
  "pos.adjective": "sıfat",
  "pos.expression": "kalıp ifade",
  "pos.other": "diğer",

  "review.show": "Cevabı göster",
  "review.back": "Geri",
  "review.details": "Ayrıntılar",
  "review.new": "yeni",
  "review.progress": "{done} / {total}",
  "review.keys": "Boşluk: cevabı göster · 1–4: puanla",
  "review.done.title": "Bugünlük bitti",
  "review.done.body": "{n} kelime çalışıldı.",
  "review.notEnriched": "Bu kelimenin ayrıntıları henüz eklenmedi. Anlamını hatırlıyor musun?",

  "interval.now": "şimdi",
  "interval.days": "{n} gün",

  "detail.plural": "Çoğul",
  "detail.feminine": "Dişil",
  "detail.forms": "Diğer biçimler",
  "detail.present": "Şimdiki zaman",
  "detail.group": "{n}. grup fiil",
  "detail.chunks": "Kalıplar",
  "detail.examples": "Örnek cümleler",
  "detail.close": "Kapat",
  "detail.listen": "Dinle: {text}",

  "words.title": "Kelimeler",
  "words.search": "Kelime ara",
  "words.more": "+{n} kelime daha",
  "words.none": "Sonuç yok.",

  "dash.today": "Bugünkü çalışma",
  "dash.summary": "{done} / {total} modül · {minutes} / {planned} dk",
  "dash.start": "Başla",
  "dash.continue": "Devam et",
  "dash.reopen": "Yeniden aç",
  "dash.done": "Bugünkü çalışma tamamlandı.",
  "dash.lesson": "Bugünün dersi: {title}",
  "dash.cards": "{n} kart",
  "dash.selfTalk": "Günün cümlesi",
  "dash.selfTalk.hint": "Bugün bu işi yaparken yüksek sesle söyle.",

  "module.clock": "{elapsed} / {n} dk",
  "module.finish": "Modülü bitir",
  "module.check": "Kontrol et",
  "module.continue": "Devam",
  "module.step": "{n} / {total}",

  "grammar.tapHint": "Çevirisini görmek için cümleye dokun.",
  "grammar.done": "Anladım, bitir",

  "output.fill": "Boşluğu doldur",
  "output.build": "Kelimeleri sıraya koy",
  "output.free": "Cümleyi yaz",
  "output.placeholder": "Fransızca yaz",
  "output.correct": "Doğru!",
  "output.accents": "Doğru, ama aksanlara dikkat:",
  "output.wrong": "Doğrusu:",
  "output.score": "{right} / {total} doğru",

  "phon.steps": "1 Dinle · 2 Sesle birlikte söyle · 3 Tek başına söyle",
  "phon.listen": "Dinle",
  "phon.slow": "Yavaş",
  "phon.next": "Söyledim, sıradaki",
  "phon.noAudio": "Bu tarayıcıda ses yok; IPA'ya bakarak söyle.",

  "review.empty": "Şu an bekleyen kart yok.",

  "stats.title": "İlerleme",
  "stats.streak": "Günlük seri",
  "stats.learned": "Öğrenilen kelime",
  "stats.learned.hint": "Üst üste iki kez hatırlanan kelimeler. Çalışılan: {n}.",
  "stats.today": "Bugün (dk)",
  "stats.week": "Son 7 gün, dakika",
  "stats.day": "{day}: {n} dk",

  "settings.title": "Ayarlar",
  "settings.newPerDay": "Günlük yeni kelime",

  "error.save": "İlerleme kaydedilemedi. Tarayıcı depolaması dolu ya da engelli olabilir; bu oturumdaki çalışma sayfa kapanınca kaybolur.",

  "output.override": "Benim cevabım da doğruydu",
  "output.override.title": "Emin misin? Önce kontrol et:",
  "output.override.checks": "Aksanlar (é, è, à, ç) · Artikel ve cinsiyet (le / la, un / une) · Fiil çekimi ve kişi · Kelime sırası · Olumsuzda ne ... pas",
  "output.override.yours": "Senin cevabın:",
  "output.override.expected": "Beklenen:",
  "output.override.confirm": "Evet, doğruydu",
  "output.override.cancel": "Vazgeç",
  "output.override.note": "Bu cevap bu soru için bundan sonra doğru sayılacak.",
  "output.accepted": "Kabul edildi.",

  "module.reading": "Okuma",
  "output.choice": "Doğru seçeneği seç",
  "reading.questions": "Anlama soruları",
  "reading.showTranslation": "Çeviriyi göster",
  "reading.hideTranslation": "Çeviriyi gizle",
  "reading.listen": "Paragrafı dinle",
  "reading.missing": "Bu dersin okuma metni henüz eklenmedi.",
  "reading.words": "{n} kelime",

  "summary.title": "Günlük özet",
  "summary.open": "Günlük özetler",
  "summary.empty": "Henüz özet yok: bir gün çalışınca burada görünür.",
  "summary.pickDay": "Gün seç",
  "summary.pdf": "PDF olarak indir",
  "summary.word": "Word olarak indir",
  "summary.stats": "{minutes} dk çalışma · {modules} modül tamamlandı",
  "summary.newWords": "Yeni kelimeler",
  "summary.reviewedWords": "Tekrar edilen kelimeler",
} as const;

export type TranslationKey = keyof typeof tr;
