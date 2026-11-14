---
title: "Ajanlardan Şirket"
date: 2026-11-12
draft: false
description: "Gemini 4 Carbon /swarm, Meta'nın Conductor'ı ve 1.000 ajanlık ispatlar: organizasyon şeması artık ürünün kendisi."
tags: ["ai", "agents", "orchestration", "software"]
categories: ["Yapay Zeka"]
slug: "company-of-agents"
image: "/images/posts/company-of-agents.png"
---

# Ajanlardan Şirket

Google, 10 Kasım'da **Gemini 4 Carbon**'ı yayınladı. Modelin en dikkat çekici özelliği tek başına benchmark skorları değil: Google Antigravity içindeki `/swarm` özelliği, tek bir istemi izlenebilir bir **ajan ekibine** dönüştürüyor. Carbon, mimari tasarım, koordinasyon ve denetim gibi derin akıl yürütme gerektiren rollere atanıyor; daha hızlı ve hafif modeller ise paralel izole çalışma alanlarında ve her değişikliği sınayan **düşman doğrulayıcılarla** birlikte çalışıyor.

Aynı hafta Meta'nın **Conductor**'ı satın aldığı ortaya çıktı. Conductor, yazılım projelerini paralel çalışma alanlarına dağıtılmış ajan ekipleriyle yürütüyor; ajanlar Anthropic ve OpenAI gibi laboratuvarlardan geliyor. Ve Anthropic, Fable 5.2 ile **1.000 ajanlık** bir ekibin Fermat'ın Son Teoremi'nin formalizasyonunu 30 saatte tamamladığını açıkladı.

Üç haberin ortak noktası şu: Artık model değil, **organizasyon** satılıyor.

## Tek istem, bir ekip

Carbon'ın `/swarm` özelliği, bir istemi rollere bölüyor: mimar, uygulayıcı, denetçi, doğrulayıcı. Ajanlar birbirinden izole çalışma alanlarında paralel ilerliyor; her değişiklik, onu yazan ajanın dışında biri tarafından test ediliyor. Google'ın verdiği örnekler iddialı: tarihî fotoğraflardan Eyfel Kulesi'nin 1887-1889 inşasını anlatan etkileşimli bir Three.js sergisi; yedi belediye imar dosyasından 206 mühendislik çizimini çıkarıp tek istemle 906 bin üçgenlik bir ofis rekonstrüksiyonu; on gece süren döngülerde tamamlanan 3B sahneler.

Bunların çoğu, tek bir modelin "daha iyi yazmasıyla" değil, **iş bölümü** sayesinde mümkün. Carbon pahalı ve yavaş olduğu için yalnızca zor kararlarda kullanılıyor; rutin işler daha ucuz modellere gidiyor. Google, Carbon'ın CursorBench 4.0, Perplexity WANDR ve Zapier AutomationBench'te birinci olduğunu ve görev başına maliyetinin dışarıdaki en iyi modele göre 2 kattan fazla düşük olduğunu söylüyor. Yani ekip yalnızca daha yetenekli değil, daha **verimli** de.

## Meta neden Conductor'ı aldı?

Conductor'ın ürünü, bir projenin ayrı parçalarını eşzamanlı yürüten ajan takımları. Ajanlar bulutta, yerelde veya telefondan çalışabiliyor; proje parçaları birbirinden ayrılıyor. İlginç olan, Conductor'ın kendi modelini geliştirmemesi: Anthropic ve OpenAI modellerini kullanıyor. Meta, model katmanında değil, **orkestrasyon katmanında** bir şirket satın aldı.

Bu, değer zincirinin nereye kaydığını gösteriyor. Modeller metalaşıyor; farklılaşma, ajanları nasıl örgütlediğinizde, onlara nasıl rol verdiğinizde, çıktılarını nasıl denetlediğinizde ve maliyeti nasıl yönettiğinizde ortaya çıkıyor.

## 1.000 ajan, 30 saat, bir ispat

Anthropic'in Fermat deneyi, ölçeğin nereye vardığını gösteriyor. 1.000 Fable 5.2 ajanı, minimal insan müdahalesiyle teoremin formalizasyonunu 30 saatte tamamladı. Ajanlar kendi koordinasyon yöntemlerini kurdular; ilk formalizasyona göre üçte bir kadar işlem tokenı kullandılar ve yedi kat daha kısa bir ispat ürettiler. Aynı 1.000 ajanlık düzenekle Opus 5.5, 18 saatte formalizasyonun yalnızca %26'sını bitirebildi.

Başka bir deneyde tek bir mühendis, Fable 5.2'ye boş bir klasörden işletim sistemi tasarlama görevi verdi. Model, sekiz gün boyunca gece gündüz çalışan 1.000'den fazla alt ajana koordinasyon yaptı; sonuçta dizüstü bilgisayarda açılan, disk ve ağ sürücüleri, kalıcı dosya depolama, pencere yöneticisi ve kurulum ekranı olan çalışan bir sistem ortaya çıktı.

Buradaki asıl mesele ham yetenek değil, **koordinasyonun kendisinin bir mühendislik problemi** haline gelmesi. Ajan sayısı arttıkça, tıpkı insan ekiplerde olduğu gibi, roller, arayüzler, iletişim protokolleri, çıktı sözleşmeleri ve denetim katmanları gerekiyor.

## Yönetim katmanı neden kritik?

Bir şirketin organizasyon şeması, kimin neyden sorumlu olduğunu, kimin karar verdiğini, kimin kontrol ettiğini tanımlar. Ajan ekiplerinde de aynı sorular var:

- **Görev ayrıştırma:** İşi kim, hangi sınırlarla bölüyor?
- **Arayüzler:** Ajanlar birbirine neyi, hangi formatta aktarıyor?
- **Doğrulama:** Bir ajanın çıktısını kim, hangi bağımsız kanıtla kontrol ediyor?
- **Eskalasyon:** Ajan ne zaman durup insana sormalı?
- **Maliyet:** Hangi iş için pahalı model, hangi iş için ucuz model kullanılmalı?
- **Denetim izi:** Sonuç doğruysa bile, nasıl o sonuca gelindiği kayıtlı mı?

Bugün bu soruların çoğuna ürünler değil, kullanıcılar cevap veriyor. Bu yüzden ajan ekipleri çoğu zaman bir "şirket" gibi değil, bir "grup sohbeti" gibi davranıyor. Oysa ölçek büyüdükçe, grup sohbeti değil, **yönetim sistemi** fark yaratacak.

## Cevaplamadığımız sorular

- Organizasyon şeması ürünün kendisi haline gelirse, rekabet avantajı nerede kalır? Herkes aynı modelleri kullanıyorsa, fark yalnızca orkestrasyon becerisi mi?
- 1.000 ajanlık bir ekipte "iyi iş" nasıl tanımlanır? Ajanların performansı nasıl değerlendirilir, nasıl terfi ettirilir, nasıl işten çıkarılır?
- Düşman doğrulayıcılar, gerçekten bağımsız mı? Aynı model ailesinden gelen bir doğrulayıcı, yazarın kör noktasını paylaşmaz mı?
- Bir ajan ekibi hata yaptığında sorumluluk kime ait: istemi yazan mühendise, orkestrasyon katmanına, model sağlayıcısına mı?
- İnsan yönetici, ajanların ürettiği raporları okuyarak mı karar verecek? Yoksa raporları da ajanlar mı yazacak? Bu durumda insan neyi denetliyor?

Belki de en büyük soru şu: Ajanlardan kurulu bir şirket, insanlardan kurulu bir şirketin **hangi** özelliklerini taklit etmeli? Hızını mı, ölçeğini mi, yoksa sorumluluk zincirini mi?

## Kaynaklar

- Google, [Gemini 4 Carbon is now available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/), 10 Kasım 2026.
- TechCrunch, [Meta acquires AI coding startup Conductor](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/), 4 Kasım 2026.
- Anthropic, [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/news/claude-fable-and-mythos-5-2), 9 Kasım 2026.
- Anthropic, [Safely scaling multi-agent teams with Fable 5.2](https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/).
