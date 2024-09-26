import Fuse from 'fuse.js';
import * as _ from 'lodash';
const data = {
  "greetings": [
    "Merhaba, güzel ruh! Bugün seni görmek ne güzel!",
    "Selam, dostum! Gözlerin, gün ışığını aratmıyor.",
    "Hoş geldin! Şifalı iksirlerimle seni bekliyorum.",
    "Merhaba! Kalbin ne kadar huzurlu, öyle değil mi?",
    "Selam! Bugün hangi büyülü şeyler arıyorsun?",
    "Güzel bir günde, senin gibi güzel bir yüzü görmek mutluluk.",
    "Merhaba! Doğanın renkleri içindeki zarafetini görmek harika."
  ],
  "farewells": [
    "Hoşça kal, sevgili dostum! Düşlerin hep güzel olsun.",
    "Güle güle! Yıldızlar, senin yolunu aydınlatsın.",
    "Bir sonraki gelişinde seni sabırsızlıkla bekleyeceğim!",
    "Umarım tekrar görüşürüz! Şifalı bitkilerim seni bekliyor.",
    "Yoldaşım, kendine iyi bak! Kalbin her daim sevgiyle dolsun.",
    "Hoşça kal! Kalbindeki ışık hep parlasın.",
    "Görüşmek üzere! Şifa bulduğun her an, beni hatırla."
  ],
   "smallTalk": [
    "Hava ne kadar güzel, değil mi? Doğa hepimizi büyülüyor.",
    "Bu kasabanın renkleri, aşkı hatırlatıyor.",
    "Son zamanlarda en sevdiğin bitki her zamanki gibi büyüleyici.",
    "Bu sabah bahçemdeki çiçekler açtı, çok mutluyum.",
    "Doğanın sunduğu mucizeler her zaman göz alıcı.",
    "Küçük bir iksirle kendini daha iyi hissedeceksin, buna inan.",
    "Bir şifa iksiri hazırlamak, ruhu beslemek gibi bir şey.",
    "Bazen, sadece bir çiçeğin kokusu bile ruhu canlandırır.",
    "Güzellik her yerde, sadece görmek gerek.",
    "Bir gün, bu kasabanın en güzel çiçeklerini senin için toplayacağım.",
    "Sıcak bir çayın yanında sohbet etmek, günün en güzel anlarından biri.",
    "Doğanın sesi, huzuru getirir; dinlemesini bilene.",
    "Her gün yeni bir mucizeye tanıklık ediyoruz.",
    "Bahçemdeki lavantaların kokusu, ruhumu dinlendiriyor.",
    "Bu akşam gökyüzü ne kadar güzel, yıldızlar parlıyor.",
    "Yağmur sonrası havada kalan taze koku, huzur veriyor.",
    "Bir gülün açması gibi, bazen en güzel anlar sabır gerektirir.",
    "Küçük şeylerdeki mutluluğu yakalamak, hayatı güzelleştirir.",
    "İnsanların ruhunu besleyen en güzel şey, doğanın sunduklarıdır.",
    "Zaman zaman durup etrafa bakmak, hayata farklı bir gözle bakmamızı sağlar.",
    "Göz alıcı çiçekler, kalbin en derin köşelerine dokunur.",
    "Bir dostla paylaşmak, mutluluğu kat kat artırır.",
    "Her gün, yeni bir hikaye yazmak için bir fırsattır.",
    "Küçük anlar, büyük hatıralara dönüşür.",
    "Bir iksir hazırlamak, sevgiyle yapılan en güzel sanatlardan biri.",
    "Sıcak bir gülümseme, karanlık günleri aydınlatır.",
    "Doğa, her zaman en güzel sırları saklar.",
    "Göz göze gelmek, ruhun derinliklerine inmektir.",
    "İkimizin arasında oluşan bu bağ, büyülü bir hikaye yazıyor.",
    "Bahçemdeki çiçekler, benim en iyi dostlarım.",
    "Bir gülün açışı, her zaman sabrın ödülüdür.",
    "Hayatın küçük sevinçleri, en büyük mutlulukları getirir.",
    "Kendini sevgiyle sarmalamak, en iyi şifadır."
  ]
}

const options = {
  includeScore: true,
  keys: ['text'],
};
const categories = {
  greetings: data.greetings.map(text => ({ text })),
  farewells: data.farewells.map(text => ({ text })),
  smallTalk: data.smallTalk.map(text => ({ text })),
};

const fuseInstances = {
  greetings: new Fuse(categories.greetings, options),
  farewells: new Fuse(categories.farewells, options),
  smallTalk: new Fuse(categories.smallTalk, options),
};


function getResponse(userInput) {
  const keywords = userInput.split(' ');

  for (const category in fuseInstances) {
    const results = fuseInstances[category].search(keywords.join(' '));

  
    if (results.length > 0) {
      const response = results[0].item.text;

   
      if (category === 'greetings') {
        const smallTalk = _.sample(categories.smallTalk).text; // Rastgele bir small talk cümlesi al
        return `${response} ${smallTalk}`;
      }

   
      return response;
    }
  }

  return 'Üzgünüm, bu konuda bir şey bilmiyorum.';
}





const el = document.querySelector(".bar")
const text = document.querySelector(".area")


el.addEventListener('keypress', key => {
  if(key.key === "Enter"){
   const userInput = el.value;
const response = getResponse(userInput);
text.textContent= response
  }
})
