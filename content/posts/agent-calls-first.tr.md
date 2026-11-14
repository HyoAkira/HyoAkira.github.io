---
title: "Ajan Önce Arar"
date: 2026-11-11
draft: false
description: "Claude Duet, talebinizi beklemeden harekete geçiyor. Dikkat ekonomisinde temsil, davet ve mola üzerine."
tags: ["ai", "agents", "attention", "product"]
categories: ["Yapay Zeka"]
slug: "agent-calls-first"
image: "/images/posts/agent-calls-first.png"
---

# Ajan Önce Arar

Claude Duet, 21 Ekim'de araştırma önizlemesi olarak açıldı. Anthropic'in tanımı net: Claude artık yalnızca soruya cevap veren bir asistan değil, **proaktif bir ajan**. Sabah size kısa bir brifing gönderiyor, gün içinde bağlı uygulamaları kontrol ediyor, siz uzaktayken çalışmaya devam ediyor ve sizin adınıza bir şey yapmadan önce onayınızı istiyor.

Bu, ürün tasarımında sessiz ama büyük bir kayma. Şimdiye kadar yapay zekâ, **talep üzerine** çalışıyordu. Duet ise **davet edilmeden** konuşmaya başlıyor. Peki bir ajanın ne zaman konuşacağına karar vermesi, ne anlama geliyor?

## Cevap veren değil, başlatan

Duet'in günlük akışı basit: Sabah, bağlı uygulamalarınızdaki en önemli maddeleri özetleyen kısa bir mesaj. Gün içinde, yalnızca dikkat gerektiren bir şey olduğunda bildirim. Görev verdiğinizde, hangi uygulamaları kullanacağını ve hangi adımları atacağını kendisi planlıyor. İş bitince veya incelemeniz gerektiğinde haber veriyor.

Teknik olarak ilginç olan, Duet'in kendi sanal makinesi ve tarayıcısıyla çalışması. Yani dizüstü bilgisayarınız kapalıyken de görev devam ediyor. Bu, "asistan" kavramını "arka planda çalışan bir çalışan" kavramına yaklaştırıyor.

Anthropic, Duet'i özellikle yoğun profesyoneller ve küçük işletme sahipleri için konumlandırıyor. Örnekler de bu yönde: bir emlak komisyoncusu, takvimindeki yanlış gündeki bir gösterimi fark eden ajanı anlatıyor; 110 çalışanlı bir restoran sahibi, faturaları mağaza mağaza işleyen bir ajanı; bir marka stratejisti, uçuşundan hemen önceki bir toplantıyı fark edip taşımayı öneren bir ajanı.

## Onay nerede duruyor?

Duet'in en kritik tasarım kararı, **nerede duracağı**. Ajan okuyabilir, taslak hazırlayabilir, plan yapabilir. Ama bir mesaj göndermeden, ödeme yapmadan, belge imzalamadan veya bir şey silmeden önce tam olarak ne yapmak üzere olduğunu gösteriyor ve onay bekliyor.

Bazı işlemler onayla bile yasak: menkul kıymet ticareti veya hesaplar arasında para transferi gibi. Kimlik bilgileri konusunda da temkinli: Duet, şifrelerinizi veya oturum tokenlarınızı doğrudan görmüyor. Ödeme tarafında Link veya Shop Pay kullanılıyor; sanal kart ile gerçek kart numarası paylaşılmıyor.

Bu mimari, "insan son kararı verir" ilkesine dayanıyor. Ama pratikte yeni bir soru doğuruyor: **Onay yorgunluğu.** Bir ajan günde onlarca kez "şunu yapmak üzereyim, onaylıyor musun?" diye sorarsa, insan bir süre sonra okumadan onaylamaya başlar. O noktada onay, koruma olmaktan çıkar, bir tıklama ritüeline dönüşür.

## Dikkat metrik olunca

Duet'in asıl ürünü, zaman yönetimi değil, **dikkat tahsisi**. Ajan, hangi bilginin sizi rahatsız etmeye değer olduğuna karar veriyor. Bu, son derece kişisel ve son derece bağlamsal bir yargı. Yanlış karar verirse iki tür hata olur:

- **Yanlış alarm:** Önemsiz bir şey için sizi böler. Güveni aşındırır.
- **Sessizlik:** Önemli bir şeyi kaçırır. Daha kötüsü, siz de kaçırdığınızı bilmezsiniz.

Anthropic, Duet'in bağlı hesapları birkaç saatte bir kontrol ettiğini söylüyor; çünkü sürekli kontrol etmek plan limitlerini çok daha hızlı tüketir. Bu detay, dikkatin metalaştığını gösteriyor: Arka plan kontrolleri bile bir maliyet kalemi. "Her zaman açık ajan" fikri, aslında "her zaman faturalanan ajan" anlamına geliyor.

## Temsil mi, davet mi?

Bir asistanın sizin adınıza konuşması, temsil yetkisidir. Bir asistanın ne zaman konuşacağına karar vermesi ise **davet** meselesidir. İkincisi daha zor, çünkü sizin adınıza bir gündem kurmayı gerektirir.

Duet, bu gündemi sizin verilerinizden çıkarıyor: e-postalar, takvim, faturalar, mesajlar. Bu da beraberinde bir mahremiyet sorusu getiriyor. Ajanın sizi tanıması için ne kadar veri görmesi gerekiyor? Hangi veriyi görmemesi, onu daha az işe yarar ama daha güvenli kılar?

Bugünkü cevap, "siz bağladığınız uygulamalar kadar" gibi görünüyor. Ama ürün olgunlaştıkça, varsayılan olarak daha fazla veriye erişen bir ajan ile daha az veriyle daha az iş yapan bir ajan arasında bir tercih yapmak zorunda kalacağız.

## Cevaplamadığımız sorular

- Sizi ne zaman böleceğine ajan karar veriyorsa, **dikkat üzerindeki egemenlik** kimde?
- Onay yorgunluğu kaçınılmazsa, onay arayüzü nasıl tasarlanmalı? Özet mi, tam metin mi, sesli onay mı?
- Ajan sizin adınıza bir toplantı taşıdığında ve bu yanlış olduğunda, sorumluluk kimde: siz, ajan, yoksa sağlayıcı mı?
- "Her zaman açık" bir ajan, çalışanlar için yeni bir gözetim katmanı mı? İşveren, çalışanın ajanına erişebilir mi?
- Bir ajan sizi sürekli doğru şekilde uyarırsa, ona ne kadar güvenirsiniz? Ve o güven, bir gün sizi kontrol etmeyi bırakmanıza mı yol açar?

Duet'in cevabı, "ajan önce gelir" değil, "ajan önce **sorar**" gibi görünüyor. Ama her soru bir bölme yaratır. İyi bir asistan, yalnızca doğru cevabı vermez; doğru anda, doğru soruyla gelir.

## Kaynaklar

- Anthropic, [Introducing Claude Duet](https://claude.com/resources/articles/claude-duet), 21 Ekim 2026.
- Anthropic, [Claude Duet safety, privacy, and security](https://claude.com/resources/articles/claude-duet-safety-privacy-and-security), 23 Ekim 2026.
