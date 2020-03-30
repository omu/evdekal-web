# #EvdeKal Sağlıklı Kal

## Hızlı Başlangıç Kılavuzu

```
git clone git@github.com:omu/evdekal.git
cd evdekal
bundle install
bundle exec jekyll serve
```

## Veriler Nasıl Eklenir

**_data/** klasörü içerisinde menü, sıkça sorulan sorular ve videolar için veri setleri oluşturulmuştur. Veri setlerine yeni eklemeler yaparak site içeriğini zenginleştirebilirisiniz.

|Veri|Açıklama|
|----|--------|
|menu.yml | Menü içeriğin bulunduğu veri seti|
|faqs_for_students.yml | Öğrenciler için SSS|
|faqs_for_teachers.yml | Eğitimciler için SSS|
|videos_for_students.yml | Öğrenciler için Yardım Videoları|
|videos_for_teachers.yml | Eğitimciler için Yardım Videoları|

## Sayfalara Özel İçerik Ekleme

Site [bulma-clean-theme](https://github.com/chrisrhymes/bulma-clean-theme) üzerine inşa edilmiştir. İçerik ve sayfa yapılarını temanın sayfasından bakarak değiştirebilirsiniz.

Ek olarak [bulma CSS framework](https://bulma.io/) component ve elemetlerinin hepsini sayfalarınızda kullanabilirsiniz.

## Yapılan Değişiklikleri Gönderme

```
 git add .
 git commit -m 'Yapılan değişikliğin kısa açıklaması'
 git push
```
