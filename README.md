# Intro
Halo semua, Selamat Datang di Bananas

Bananas merupakan startup e-groceries yang menyediakan layanan belanja kebutuhan sehari-hari untuk para konsumennya. Apa istimewanya? Bananas mengandalkan hub mikro berbasis teknologi yang disebut dark stores untuk operasionalnya.

Dark stores ditempatkan di berbagai lokasi strategis mendekati area pemukiman yang memungkinkan Bananas untuk mengantarkan bahan makanan secara instan. Dengan begitu, konsumennya bisa membeli bahan makanan seperti sayuran dan buah-buahan segar, dan pesanannya bisa langsung diantar. Tentunya jika berada dalam cakupan wilayah.

Dokumentasi akan menjelaskan tentang proses pembuatan website company profile PT Banana Niaga Natura atau "Bananas". Dengan cakupan dokumentasi yang meliputi proses pembuatan base HTML, peng-implementasian CSS, dan proses deploy website menggunakan custom domain.

# Daftar Isi
* Intro
* Daftar Isi
* Requirement untuk pembuatan website
* Pembuatan Base HTML
* Implementasi CSS
* Deploy Website

# Requirement untuk pembuatan website
1. VS Code
2. Git and Github
3. Google Chrome
4. Netlify
5. Niagahoster
6. Cloudflare
7. Bahasa yang digunakan untuk pembuatan website (HTML, CSS, Javascript)
8. Font Eksternal (Google Font)
9. Library Eksternal (Font Awesome)

# Pembuatan Base HTML
Pada bagian ini akan menunjukan proses pembuatan base HTML termasuk isi dari konten website yang akan dibuat.

Proses coding pembuatan struktur HTML website dan proses memasukan konten pada website.
![1-creating-html-structure-content](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/d7ada6ec-1ec9-44b8-8d8a-641c2e9a4a2e)

Preview website saat ini.
![2-preview-html-structure-content](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/6c3ed5cd-8563-451b-bb8f-a590ec367ae8)

# Implementasi CSS
Pada bagian ini akan menunjukan proses pembuatan design style css, untuk memoles tampilan pada website. 
Dan juga akan di implementasian sebuah css @media query untuk beberapa resolusi tampilan website yang berbeda.

1. Pembuatan style css untuk tampilan website Desktop

Membuat file css dan memasukan coding untuk styling tampilan website.
![3-creating-style css-add-style-to-html](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/b496bd3b-5c8f-4d21-9786-e2b020ba35d3)

Preview tampilan website saat ini.
![5-preview-website-with-css-include](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/f5f2cecf-38f8-47a0-be8e-04e1c5f70a6d)

2. Memasukan Font Ekternal pada website dengan CSS

Sebelum itu masukan file font eksternal pada direktori repositori, kemudian copy paste nama file font itu, pada file style css, dan masukan pada coding untuk memanggil font ekternalnya.
![6-add-external-font-with-css](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/5df1aea8-e972-4f67-a9c2-1e5d705833d8)

Preview tampilan website setelah memasukan font eksternal pada website.
![7-preview-website-with-external-font-include](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/7847c801-120c-4860-9b4a-b5c87c859bf4)

3. Memasukan library 'Font Awesome' pada website

Mengkoneksikan library 'Font Awesome' dengan website.
![8-add-font-awesome](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/3bcd4274-13d6-48a0-a0f2-0823fc24b4dd)

Memanggil icon dari library 'Font Awesome'.
![9-add-icon-to-website](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/a257d6e1-f4ff-47f8-8c73-7f47802e1613)

Preview tampilan icon.

![10-preview-icon](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/b02f2155-18e7-4c47-be8a-0a643f994e54)

4. Preview akhir dari tampilan website pada resolusi Desktop

Sebelum itu, ada penambahan sedikit animasi menggunakan CSS, pada bagian header website.
![11-add-animation-header](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/48c1cdad-4dfd-4ea6-b065-cd05088dd21e)

Preview akhir website pada resolusi Desktop.
![web-preview-full](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/e87e2d9e-c3c5-44b3-9f0a-0165fda66043)

5. Menggunakan @media query pada CSS untuk membuat website responsive dan membuat navigasi menu khusus untuk resolusi device tablet dan handphone.

Pembuatan coding CSS @media query pada file responsive css.
![11-add-responsive-css](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/a7e45873-963e-4bdd-b06c-d48430c6d23c)

Pembuatan CSS untuk menu navigasi khusus untuk device tablet dan handphone. Yang mana, menu navigasi khusus ini akan muncul saat resolusi device yang digunakan saat ini kurang dari 1024 pixel.
![13-add-mobile-mode-nav-menu](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/185509fb-e8a6-4bd6-a3c6-5cc43bde02a8)

6. Preview akhir dari tampilan website pada resolusi device Tablet.

Preview tampilan akhir dari website dengan resolusi device Tablet (768 pixel).
![tablet-preview-full](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/3bc76467-d6b1-40c9-a075-4ab275057339)

7. Preview akhir dari tampilan website pada resolusi device Handphone.

Preview tampilan akhir dari website dengan resolusi device Handphone (375 pixel).
![mobile-preview-full](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/642d3332-fbfa-43fa-93ea-dc119eae9acc)

# Deploy website

Deploy website dengan Netlify, dan custom domain dengan niagahoster dan cloudflare.

1. Proses deploy project dan custom nama website di netlify.

![netlify-deploy-web](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/921d7069-7fdd-4eda-b766-13160e9af827)

2. Proses custom domain netlify dengan niagahoster dan cloudflare.
* Pertama, tambahkan custom domain baru pada netlify.
* Kedua, add / edit record pada DNS management pada menu DNS di website Cloudflare.

![custom-domain](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/2fd15578-72be-4a7b-8f3b-c3e2829d998b)

* Ketiga, tunggu beberapa saat, website sudah terdeploy dan sudah bisa diakses lewat custom domain baru maupun lewat default netlify domain.

Akses menggunakan default netlify domain : https://bananasnew.netlify.app/
![14-bananasnew netlify app](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/a5f2e129-ecb6-49a4-9650-ccca65d43434)

Akses menggunakan custom domain baru domain : https://suryaftr97.site/
![15-suryaftr97 site](https://github.com/RevoU-FSSE-2/week-5-SuryaFtr/assets/127850712/5409e02d-5ad6-4b82-b714-0743e61f374e)

# About Me

![Surya Faturohman Photo](https://i.ibb.co/2S8gZvr/suryaftr-pic-1.png "Surya Faturohman Photo")

RevoU FSSE Section Barcelona 

Team 6

"I am from Bogor and the graduated student of a high school majoring in software engineering class on 2015 and also a graduate of Pakuan University majoring in computer science on 2022."

"My motivation to join RevoU was to return to my former soul and enthusiasm, to code a program and upgrade my skills more in the field of software engineering."

## Contact Me
Phone : 0838 1142 2863

E-Mail : suryafaturohman@gmail.com

LinkedIn : https://www.linkedin.com/in/surya-faturohman/

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/f6dTnkNL)