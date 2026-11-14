---
title: "Çıraklık Boşluğu"
date: 2026-11-10
draft: false
description: "Anthropic'in birleşen kodunun %90'ından fazlası artık Claude'dan çıkıyor. Peki ustalar nasıl yetişecek?"
tags: ["ai", "engineering", "education", "career"]
categories: ["Yapay Zeka"]
slug: "apprenticeship-gap"
image: "/images/posts/apprenticeship-gap.png"
---

# Çıraklık Boşluğu

Anthropic, Claude Fable 5.2 duyurusunda dikkatlice okunması gereken bir cümle yazdı: **"Anthropic'in ana kod tabanına birleştirilen değişikliklerin %90'ından fazlası artık Claude tarafından yazılıyor."** İnsan rehberliğiyle, ama yine de Claude tarafından.

Aynı duyuruda başka örnekler de var: eski bir Fable sürümüyle çalışan ajan ekibi, kritik bir üretim servisini Python'dan Rust'a taşımış; servis yaklaşık 26 kat daha hızlı açılıyor. Bir mühendis, boş bir klasörden işletim sistemi tasarlamasını istemiş; model sekiz gün boyunca 1.000'den fazla alt ajanı koordine ederek çalışan bir sistem üretmiş. Ve 1.000 ajanlık bir ekip, Fermat'ın Son Teoremi'nin formalizasyonunu 30 saatte tamamlamış.

Bu haberlerin çoğu "yetenek" başlığıyla okunuyor. Bence asıl başlık **çıraklık**: Yazılım mühendisliğinde ustalık, yıllarca kod yazarak, hata yaparak, başkasının kodunu okuyarak ve yavaş yavaş yargı geliştirerek öğrenilirdi. O yolun basamakları hızla ortadan kalkıyor.

## %90 ne anlama geliyor?

Bu oran, "mühendisler artık çalışmıyor" demek değil. İnsanlar hâlâ yön veriyor, mimari kararlar alıyor, riskleri değerlendiriyor, kod incelemesi yapıyor. Ama işin **üretim** kısmı büyük ölçüde ajana geçmiş durumda.

Bir şirket için bu, verimlilik demek. Bir meslek için ise yapısal bir soru: Eğer kod yazmak, mesleğe girişin temel antrenmanıysa ve kod artık neredeyse bedavaysa, insanlar neyin antrenmanını yapacak?

Klasik çıraklık modeli şöyle işler:

1. Çırak, küçük ve düşük riskli işler alır.
2. Bu işleri yaparken dilin, araçların ve kod tabanının nasıl davrandığını öğrenir.
3. Ustasından geri bildirim alır; hatalarını ve tercihlerini görür.
4. Zamanla daha büyük kararlar almaya başlar.

Yapay zekâ, birinci ve ikinci adımı büyük ölçüde otomatikleştiriyor. Üçüncü adım ise daralıyor: Usta, çırağın kodunu değil, ajanın kodunu inceliyor. Çırak, kendi hatasını değil, ajanın hatasını görüyor. Bu, öğrenme döngüsünü koparıyor.

## Frontier Academy ne yapıyor?

Anthropic, Ekim ayında **Claude Frontier Academy**'yi duyurdu. 100 milyon dolarlık bir taahhütle, 2027 sonuna kadar 10.000 **Frontier Deployed Engineer** (FDE) yetiştirmeyi hedefliyor. İlk kohortlarda Accenture, Bain, Capgemini, Commonwealth Bank of Australia, Deloitte, McKinsey, Morgan Stanley ve Novo Nordisk gibi şirketlerin mühendisleri var.

Program, tıp eğitimini örnek alıyor: uygulayan doktorlardan öğren, gerçek vakalar üzerinde çalış, tek başına pratik yapmadan önce değerlendiril. Mühendisler önce birkaç günlük yüz yüze eğitimden geçiyor; simüle edilmiş bir kurumsal dağıtımı baştan sona yürütüyor; yeni bir senaryoda sınavı geçiyor. Ardından 12 haftalık residancy başlıyor: kendi kurumlarında gerçek bir Claude projesini yönetiyorlar. Sonunda tekrar değerlendiriliyorlar ve "Claude Frontier Deployed Engineer" rozetini alıyorlar.

Program ciddi ve doğru yönde atılmış bir adım. Ama bir sınırı var: **işveren tarafından aday gösterilen, hâlihazırda güçlü temellere sahip mühendisler** için tasarlanmış. Yani çıraklık boşluğunu kapatmıyor; deneyimli mühendisleri ajan çağına taşıyor.

## Neden bu kadar önemli?

Çünkü yazılım mühendisliğinde değer, yalnızca kod üretmek değil. Değer, **hangi kodun yazılmaması gerektiğini bilmek**, bir hatanın ne kadar ciddi olduğunu sezmek, bir mimarinin iki yıl sonra nerede kırılacağını görmek ve belirsiz bir isteği net bir tasarıma dönüştürmekte.

Bu yargı, soyut derslerle öğrenilmez. Somut işlerin içinde, geri bildirimle, tekrarla ve zamanla öğrenilir. Eğer o somut işler ajanlara giderse, yargı geliştirecek zemin de daralır.

Bu, otomasyonun bilinen bir paradoksudur: Bir işi otomatikleştirdikçe, o işi *yaparak* öğrenen insan sayısı azalır. Sonra o işi denetleyecek, hata ayıklayacak ve sürdürecek insan bulmak zorlaşır. Havacılıkta otopilot, tıpta teşhis sistemleri, endüstride kontrol odaları... Hep aynı desen.

## İki katmanlı bir meslek mi?

Önümüzdeki birkaç yılda yazılım mesleğinin ikiye ayrılması mümkün:

- **Ajanları yönetenler:** Mimariyi, riski, doğrulamayı ve ürün kararlarını yöneten, deneyimli mühendisler.
- **Ajanlarla büyüyenler:** Kod yazmayı ajan üzerinden öğrenen, ama derin hata ayıklama ve sistem düşüncesi pratiği sınırlı kalan yeni mezunlar.

Bu ayrım, beceri farkından çok **fırsat farkı** yaratır. Birinci grup, ikinci grubun yerini alabilecek araçlara sahip olurken; ikinci grup, birinci grubun deneyimine erişemeden ilerlemeye çalışır.

Bunun tek çözümü, çıraklığı bilinçli olarak yeniden tasarlamak. Yani yapay zekâyı yalnızca üretim aracı olarak değil, **öğretme aracı** olarak da kullanmak:

- Ajanın yazdığı kodu satır satır okumak ve savunmak.
- Ajan olmadan küçük ama gerçek bir modül yazmak.
- Hata ayıklamayı ajanın çözmesini izlemek yerine, önce kendi hipotezini kurmak.
- Testleri ve doğrulama ölçütlerini kendisi tasarlamak.
- Kod incelemesinde "çalışıyor mu?" değil, "neden bu şekilde?" sorusunu sormak.

## Cevaplamadığımız sorular

- İlk taslak bedavaysa, bir çırak neyi öğrenmek için para alacak? Değerlendirme mi, doğrulama mı, problem tanımı mı?
- Bir mühendisin yetkinliği, ürettiği kod miktarıyla değil neyle ölçülmeli? Ajanı ne kadar iyi yönlendirdiğiyle mi, ne kadar iyi denetlediğiyle mi?
- Üniversiteler, öğrencilere ajan çağında ne öğretmeli? Sözdizimi mi, sistem düşüncesi mi, yoksa istatistik ve doğrulama mı?
- Anthropic'in hedeflediği 10.000 FDE, sektörün ihtiyacını karşılar mı? Yoksa yalnızca büyük kurumların iç ihtiyacını mı karşılar?
- Bir şirket, kıdemli mühendislerinin bilgisini ajana aktarıp o bilgiyi ölçeklendirebilir mi? Yoksa o bilgi, yalnızca insanlar arasında mı aktarılabilir?

Belki de asıl soru şu: Yapay zekâ, çıraklığı ortadan kaldırmak zorunda değil. Ama çıraklığı **yeniden icat etmek** zorunda. Bunu yapmazsak, çok verimli bir sektörde giderek daha az usta yetişir.

## Kaynaklar

- Anthropic, [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/news/claude-fable-and-mythos-5-2), 9 Kasım 2026.
- Anthropic, [Anthropic invests $100 million to train 10,000 engineers and tackle the enterprise AI talent gap](https://www.anthropic.com/news/claude-frontier-academy), 2 Ekim 2026.
- Claude, [Frontier Academy](https://claude.com/programs/frontier-academy).
