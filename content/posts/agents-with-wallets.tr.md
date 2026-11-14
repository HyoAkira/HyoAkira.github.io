---
title: "Cüzdanı Olan Ajanlar"
date: 2026-11-14
draft: false
description: "ChatGPT Wallet ajanlara ödeme yapıyor, United ise onları kapıdan çeviriyor. Temsil yetkisi, onay ve sorumluluk üzerine."
tags: ["ai", "agents", "commerce", "trust"]
categories: ["Yapay Zeka"]
slug: "agents-with-wallets"
image: "/images/posts/agents-with-wallets.png"
---

# Cüzdanı Olan Ajanlar

13 Kasım'da OpenAI **ChatGPT Wallet**'ı duyurdu. İki gün önce United Airlines, yetkisiz üçüncü taraf yapay zekâ ajanlarının kendi dijital kanallarına erişimini kısıtlayacağını açıkladı. Aynı hafta, aynı soruya iki farklı cevap: *Bir ajan benim adıma işlem yapabilir mi?*

Biri ödeme rayı kuruyor, diğeri duvar örüyor. İkisi de haklı olabilir; çünkü sorunun teknik tarafı artık nispeten kolay, kurumsal tarafı ise hâlâ çözülmemiş.

## Ödeme nasıl işliyor?

ChatGPT Wallet'ta kullanıcı kartını bir kez ekliyor. Her satın alma öncesinde ürünleri, tutarı ve seçili kartı görüyor; Face ID veya parmak izi gibi bir güvenlik kontrolüyle onaylıyor. Ardından ödeme ağı, gerçek kart bilgilerinin yerine geçen bir **ödeme tokenı** üretiyor. İşletme ve ajan, kullanıcının gerçek kart numarasını hiçbir zaman görmüyor. Kartın mevcut ödül ve uyuşmazlık korumaları da korunuyor.

İlk sürüm yalnızca ABD'de, ChatGPT Pro aboneleri için ve `dots` üzerinden çalışıyor. OpenAI'nin uzun vadeli planı daha ilginç: kullanıcıların harcama limiti, kategori ve zaman aralığı gibi parametrelerle ajanlara **tam delegasyon** vermesi ve bu işlemleri biyometrik kontrol ile kayıt altına alınmış ön onaylarla gerçekleştirmesi.

Buradaki kritik ayrım şu: token, işletmeyi korur. Biyometrik onay, kullanıcının iradesini belgelendirir. Ama ikisi birlikte bile, ajanın *yanlış* şeyi alması durumunda sorumluluğun kime ait olduğunu söylemez.

## United neden hayır dedi?

United'ın gerekçesi güvenlik açığı değil, **temsil yetkisinin kapsamı**. Havayolu, üçüncü taraf ajanlara MileagePlus hesabına erişim, biletleme veya ek hizmet satın alma yetkisi verilmesinin kişisel bilgileri açığa çıkarabileceğini, kullanıcının onayı olmadan rezervasyon veya hesap değişikliği yapılabileceğini ve mil kullanılabileceğini söylüyor.

Daha az konuşulan ama daha ilginç bir gerekçe de düzenleyici: United'a göre otomatik ajanlar, uçuş check-in'inde yolcunun çantasında yasaklı madde olmadığını insan olarak onaylaması gerektiği gibi FAA ve DOT kurallarını ihlal edebilir. Yani bazı adımlar yalnızca "kullanıcı izin verdi" diye otomatikleştirilemez; çünkü hukuk, izni değil, **insanın o anda bilinçli olarak onaylamasını** arıyor.

United, ajanları tamamen yasaklamıyor; standart, güvenli entegrasyonlar istiyor: gizlilik, güvenlik, yetkilendirme ve hesap verebilirlik. Bu, "ajanlar gelmesin" değil, "ajanlar kim olduklarını kanıtlayarak gelsin" demek.

## Asıl anlaşmazlık teknoloji değil

OpenAI'nin tezi, ajanların mevcut ödeme sistemlerine uyum sağlaması gerektiği. United'ın tezi ise sistemlerin, hesap verebilirlik kurulmadan ajanlara uyum sağlamaması gerektiği. İkisi arasındaki fark, bir mühendislik tercihi değil; bir **sorumluluk mimarisi** tercihi.

Bugünkü cüzdan modeli, insanı her işlemin onay düğmesine koyuyor. Bu, otonomiden çok uzaktan kumandaya benziyor. Gelecekteki delegasyon modeli ise insanı döngüden çıkarıyor; yerine limit, kategori ve zaman parametreleri koyuyor. O noktada "onayladım" demek, "bu sonucu kabul ediyorum" demekle aynı şey olmuyor.

Ödeme tokenı, işletmeye "bu işlem gerçek bir kartla yetkilendirildi" diyor. Ama işletmenin asıl bilmek istediği başka bir şey: *Ajan, gerçekten hesap sahibinin verdiği yetkiyle mi hareket ediyor, yoksa hesap sahibi kandırıldı mı?* Token bunu söylemiyor.

## Küçük işletmeler için ne anlama geliyor?

"Ajan uyumlu olmak" yalnızca ürün feed'i yayınlamak değil. Erişim politikası, ödeme riski, kimlik doğrulama, iade süreci ve müşteri desteğinin birlikte tasarlanması gerekiyor. Ajanları engellerseniz müşteri kaybedebilirsiniz; kabul ederseniz, siparişin kim tarafından ve hangi yetkiyle verildiğini kanıtlayabilmeniz gerekir.

Bu nedenle önümüzdeki dönemde web'in üçe ayrılması muhtemel: **ajan dostu**, **ajan kısıtlı** ve **yalnızca insan**. United bugün üçüncü kategoride. OpenAI ise birincisini büyütmeye çalışıyor. Aradaki sınır, teknik yeterlilikten çok güven ve sorumluluk anlaşmalarıyla çizilecek.

## Cevaplamadığımız sorular

- Her satın almada parmak izi gerekiyorsa, bu gerçekten otonom bir ajan mı, yoksa daha pahalı bir uzaktan kumanda mı?
- Ajan limit dahilinde ön onaylı harcama yaptığında yanlış ürün gelirse zararı kim taşır: kullanıcı, ajan sağlayıcısı, ödeme ağı mı, satıcı mı?
- Bir satıcı, ajanın arkasındaki kişinin gerçekten onay verdiğini nasıl doğrular? "Yetkili ajan" sertifikası, PCI benzeri bir katman haline gelir mi?
- Ajan fiyat pazarlığı yaparsa bu kişiselleştirilmiş fiyatlandırma mı olur? Aynı ürün için ajanlara farklı fiyat verilmesi etik mi?
- United'ın yaklaşımı doğruysa, diğer kritik altyapılar da (banka, sağlık, enerji) benzer duvarlar örer mi? O zaman "ajan çağı" parçalı bir ada mimarisine mi dönüşür?

Cüzdan, bir onay makinesi. Zor kısım, onayın ardındaki sorumluluğu tasarlamak.

## Kaynaklar

- OpenAI, [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/), 13 Kasım 2026.
- United Airlines, [United Restricts Access for Third-Party AI Agents](https://united.mediaroom.com/news-releases?item=125496), 11 Kasım 2026.
- United Airlines, [Unauthorized third-party AI agents or assistants](https://www.united.com/en/us/fly/help-center/digital-trust-center/artificial-intelligence/third-party-ai-agents.html).
- TechCrunch, [United Airlines blocks AI agents from booking flights, citing cybersecurity risks](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/), 12 Kasım 2026.
