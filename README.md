# Kişisel Portfolyo Web Sitesi

Bu proje, React, Vite, TypeScript ve TailwindCSS kullanılarak oluşturulmuş modern, duyarlı ve kolayca kişiselleştirilebilen bir kişisel portfolyo web sitesi şablonudur.

[![Lisans: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Özellikler

- **Framework:** React & Vite ile hızlı geliştirme deneyimi.
- **Dil:** TypeScript ile daha güvenli ve ölçeklenebilir kod.
- **Stil:** TailwindCSS ile modern ve esnek tasarım.
- **Çoklu Dil Desteği:** `i18next` ile kolayca Türkçe ve İngilizce içerik yönetimi.
- **SEO Uyumlu:** Her sayfa için özelleştirilebilir meta etiketleri.
- **Duyarlı Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu.

---

## 🚀 Başlarken

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/ichbinbekir/websitem.git
    ```

2.  **Bağımlılıkları Yükleyin:**
    Proje dizinine gidin ve bağımlılıkları yükleyin.
    ```bash
    cd websitem
    npm install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Artık projeyi `http://localhost:5173` (veya terminalde belirtilen başka bir port) adresinde görebilirsiniz.

---

## 🎨 Kişiselleştirme Rehberi

Bu şablonu kendi portfolyonuz haline getirmek çok kolay. Aşağıdaki adımları takip ederek siteyi tamamen kendinize ait hale getirebilirsiniz.

### 1. İçeriği Güncelleme (İsim, Projeler, Hakkında)

Sitedeki tüm metinler dil dosyaları içinde yönetilmektedir. Bu, hem İngilizce hem de Türkçe içeriği kolayca düzenlemenizi sağlar.

-   **Dosyalar:**
    -   `src/translations/tr.json` (Türkçe içerikler için)
    -   `src/translations/en.json` (İngilizce içerikler için)

Bu dosyalardaki metinleri kendi bilgilerinizle (isim, biyografi, proje açıklamaları, yetenekler vb.) değiştirin.

### 2. Profil Fotoğrafını Değiştirme

Kendi fotoğrafınızı eklemek için:

1.  `public/` klasörüne gidin.
2.  Mevcut `profile-photo.png` dosyasını silin.
3.  Kendi fotoğrafınızı aynı isimle (`profile-photo.png`) bu klasöre ekleyin.

### 3. Renk Temasını Özelleştirme

Sitenin renk paletini (açık ve koyu mod) kolayca değiştirebilirsiniz.

-   **Dosya:** `src/index.css`

Bu dosyanın en üstündeki `@theme` bloğu içinde yer alan CSS değişkenlerini düzenleyerek sitenin tüm renk şemasını kendi zevkinize göre ayarlayabilirsiniz.

```css
@theme {
  --color-background-light: #ffffff;
  --color-background-dark: oklch(20.8% .042 265.755);
  --color-primary-light: oklch(54.6% .245 262.881);
  /* ... diğer renkler */
}
```

### 4. SEO ve Site Bilgilerini Güncelleme

Arama motorları için sitenizin başlığını ve açıklamasını güncellemek önemlidir.

-   **Dosya:** `index.html`

Bu dosyanın `<head>` etiketi içindeki şu alanları düzenleyin:
-   `<title>...</title>`: Sitenizin başlığı.
-   `<meta name="description" content="..." />`: Sitenizin açıklaması.
-   `<meta name="keywords" content="..." />`: Anahtar kelimeler.
-   `og:title`, `og:description` gibi diğer `meta` etiketleri.

---

##  NPM Komutları

-   `npm run dev`: Geliştirme sunucusunu başlatır.
-   `npm run build`: Projeyi canlıya almak için derler.
-   `npm run lint`: Kod stilini kontrol eder ve hataları bildirir.
-   `npm run preview`: Derlenmiş projenin yerel bir önizlemesini sunar.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.