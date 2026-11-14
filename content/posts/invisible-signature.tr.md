---
title: "Görünmez İmza"
date: 2026-11-13
draft: false
description: "Claude metinlere görünmez filigran işliyor, AB AI Act görünürlük istiyor. Filigran kanıt mı, yoksa yalnızca bir sinyal mi?"
tags: ["ai", "provenance", "policy", "trust"]
categories: ["Yapay Zeka"]
slug: "invisible-signature"
image: "/images/posts/invisible-signature.png"
---

# Görünmez İmza

Anthropic, ürettiği metinlere artık görünmez bir filigran işliyor. Şirket, AB Yapay Zekâ Yasası'nın 50(2) maddesi kapsamındaki **AI-Generated Content Transparency Code of Practice**'i imzaladı ve taahhütlerini açıkladı: 2 Ağustos 2026'dan itibaren AB'de piyasaya çıkan modeller, çıktılarını makine tarafından okunabilir biçimde işaretleyecek. Metinlere gömülü filigran, dosyalara ise C2PA **Content Credentials** eklenecek.

Bu, "içerik AI mı üretti?" sorusuna teknik bir cevap verme girişimi. Ama filigranın ne söylediği ile ne söylemediği arasındaki fark, çoğu tartışmadan daha önemli.

## Metnin içine işlenen iz

Claude'un filigranı görünmez ve anlamı, kaliteyi ya da okunabilirliği değiştirmiyor. Metnin bir parçası olduğu için kopyalanıp yapıştırıldığında da yanında taşınıyor; bazı düzenlemelerden sağ çıkabiliyor. İşaret model düzeyinde uygulanıyor; yani Claude Platform (API), Claude, Claude Code, Claude Cowork ve Claude Tag gibi farklı yüzeylerden gelen metinlerde de bulunuyor.

Dosyalarda ise yaklaşım farklı: PNG veya JPEG gibi desteklenen bir dosya üretildiğinde, imzalı köken metadata'sı ekleniyor. Bu, sektörde yaygın olarak kullanılan C2PA standardına dayanıyor.

Tespit tarafı henüz **özel önizlemede**. Erişim; düzenleyiciler, kolluk kuvvetleri, medya, doğrulama kuruluşları, bağımsız araştırmacılar, eğitim kurumları ve AB sivil toplum kuruluşları gibi "uygun kuruluşlarla" sınırlı. Ayrıca kendi Claude çıktılarını denetlemek zorunda olan işletmeler de erişebiliyor.

## Filigranın sınırları

Anthropic'in kendi belgesi, sınırları şaşırtıcı derecede açık yazıyor. Bir Claude izi bulmak, içeriğin **Claude tarafından işlendiğine dair bir sinyal** veriyor; ama kesin bir köken kanıtı sunmuyor. Çünkü:

- Claude asıl yazar olmayabilir. İnsanlar Claude'u sık sık düzeltme, çeviri, özetleme veya dosya dönüştürme için kullanıyor. Fikirler, metin veya veriler başka bir kaynaktan gelse bile çıktı Claude izi taşıyabilir.
- İçerik, Claude işledikten sonra değişmiş olabilir. İşaretli metin düzenlenebilir, alıntılanabilir veya başka materyalle birleştirilebilir.

Tersi de doğru: **izin bulunmaması, içeriğin AI üretmediği anlamına gelmiyor.** Metin ağır biçimde düzenlenmiş, başka sözcüklerle yeniden yazılmış, çevrilmiş veya kısa tutulmuş olabilir. Dosya metadata'sı format dönüşümü, yeniden kaydetme veya ekran görüntüsüyle silinmiş olabilir. Model, işaretlemeyi desteklemiyor olabilir. Hatta Sonnet 4.6'da varsayılan olmayan `temperature`, `top_p` veya `top_k` değerleri filigranı güvenilmez kılabiliyor.

Kısacası filigran bir **varlık kanıtı** değil, bir **işlem kanıtı**. "Bu metin Claude'dan geçti" diyor; "bu metni kim yazdı, kimin fikri, kim sorumlu" demiyor.

## "Yok" kanıt değil

Siber güvenlikte ve hukukta sık tekrarlanan bir hata, bir sinyalin yokluğunu karşıtının kanıtı saymaktır. Filigranda bu hata daha da tehlikeli: İyi niyetli bir yazar, metnini bir dil modeliyle düzelttiği için işaretli görünebilir; kötü niyetli bir aktör ise metni yeterince değiştirerek işareti silebilir. Sonuçta ortaya çıkan şey, **dürüst olanı cezalandıran, kandırmayı ise serbest bırakan** bir denetim yüzeyi olabilir.

Bu yüzden filigranı bir yalan makinesi gibi değil, bir **zincir izi** gibi düşünmek gerekiyor. Bir belgenin kimden geldiğini, kimin düzenlediğini, hangi araçtan geçtiğini ve son halini kimin onayladığını gösteren bir zincir. Tek bir işaret bu zincirin yalnızca bir halkası.

## Denetim kimin elinde?

Belki de en önemli soru teknik değil: Tespit API'sine kim erişebilecek? Şu an erişim, düzenleyiciler ve belirli kurumlarla sınırlı. Bu, kaçınılmaz olarak asimetrik bir şeffaflık yaratıyor. Bir gazeteci veya vatandaş, önüne gelen metnin filigranlı olup olmadığını doğrudan kontrol edemezken, büyük bir kurum veya devlet bunu yapabiliyor.

Şeffaflık, yalnızca işaretleme varsa değil, **işareti herkesin denetleyebildiği** durumda anlam kazanır. Aksi halde filigran, kamusal bir doğrulama aracından çok, kurumsal bir uyumluluk aracına dönüşür.

## Cevaplamadığımız sorular

- Bir metin "Claude'dan geçti" diyorsa, bu bilgi okura ne kazandırıyor? Yazarın kim olduğunu bilmeden kökenin ne anlamı var?
- Filigranı taşıyan ama fikri tamamen insana ait olan bir metin, "AI üretimi" sayılmalı mı? Sayılmamalı mı? Kim karar verecek?
- Filigranı silmek kolaylaşırsa, sorumluluk kime düşer: aracı kullanan mı, aracı sağlayan mı, dağıtan platform mu?
- Tespit API'si yalnızca kurumlara açıksa, "şeffaflık" tek yönlü bir gözetim aracına dönüşmez mi?
- Bir gün her metin işaretlenebilirse, işaretsiz metin otomatik olarak şüpheli mi olacak? Yoksa işaretsizlik normalleşecek mi?

Filigran, "bu metin AI'dan geçti" diyebilir. "Bu metne güvenebilirsin" diyemez. İkisini karıştırdığımız anda, teknik bir sinyali ahlaki bir yargıya dönüştürmüş oluruz.

## Kaynaklar

- Anthropic Support, [How Claude marks AI-generated content](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content), 2026.
- Anthropic, [EU AI Act Code of Practice on Transparency of AI-Generated Content](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content) taahhütleri.
- C2PA, [Coalition for Content Provenance and Authenticity](https://c2pa.org/).
