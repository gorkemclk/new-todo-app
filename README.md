<<<<<<< HEAD
# project-to-do-app
to do app
=======
# React + Vite Görev Yöneticisi (Todo App)

Bu projeyi, eğitim programımız kapsamında modern web geliştirmeye giriş amacıyla hazırladım. Frontend dünyasındaki güncel teknolojileri kullanarak baştan sona bir SPA (Single Page Application) geliştirmeyi ve CRUD (Create, Read, Update, Delete) işlemlerini kavramayı hedefledim.

## 🛠️ Neler Kullandım?

Projeyi geliştirirken sektör standartlarına uygun aşağıdaki teknolojileri tercih ettim:

- **React 18 & Vite:** Uygulamanın iskeletini oluşturmak ve hızlı bir geliştirme ortamı sağlamak için Vite ile React projesi kurdum.
- **TypeScript:** Kodlamayı daha güvenli hale getirmek ve componentlere geçeceğim propları (özellikle form ve liste arası veri akışını) kolay kontrol edebilmek için TypeScript kullandım.
- **Tailwind CSS:** Modern ve esnek bir tasarım oluşturmak istedim. Özel CSS yazmak yerine Tailwind'in utility class'larıyla daha hızlı ve göze hitap eden bir UI elde ettim.

## Projeyi Nasıl Kurguladım?

Öncelikle klasör yapısını planlayarak işe başladım. Eğitmenin yönergelerine sadık kalarak şu yapıyı oluşturdum:

- `src/Interfaces/`: Görev (Task) verisinin nasıl bir objeden oluşacağını tanımladım.
- `src/Components/`: Sayfadaki parçaları modüler hale getirdim. Form parçası için `TaskForm`, listelemeyi sağlayan `TaskList` ve her bir görevi gösteren `TaskCard` bileşenlerini yazdım.
- `src/Pages/`: Tek sayfa uygulaması olduğu için tüm bu bileşenleri tek bir `HomePage` sayfasında birleştirdim. Tüm React state (durum) yönetimini bu ana parçada topladım.

## Hangi Özellikleri Geliştirdim? (CRUD)

- **Ekleme (Create):** Görev başlığı, açıklaması ve önceliği seçilerek yeni bir görev eklenebiliyor. Form validation da ekledim; örneğin, görev başlığı boş bırakılamıyor.
- **Listeleme (Read):** Görevler liste halinde görüntüleniyor. Ayrıca belirlediğim önceliğe (Düşük, Orta, Yüksek) göre her karta bir renk ataması yaptım.
- **Güncelleme (Update):** Hem bir görevi "Tamamlandı" olarak işaretleyebiliyorum, hem de "Düzenle" butonuna tıklayarak görevin içeriğini form alanına geri yükleyip güncelleyebiliyorum.
- **Silme (Delete):** Silmeden önce yanlışlıkla işlemi önlemek için "Emin misiniz?" şeklinde bir güvenlik adımı ekledim.
- **Kalıcılık (LocalStorage):** Frontend tabanlı bir proje olduğu için veritabanı kurmak yerine LocalStorage kullandım. Böylece sayfayı yenilesem de verilerim kaybolmuyor.

##  Projeyi Çalıştırma

Projeyi indirip lokal inizde denemek isterseniz:

\`\`\`bash
# 1. Proje dizinine gidin
cd project_web

# 2. Gerekli kütüphaneleri yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
\`\`\`

Proje `http://localhost:5173` adresinde çalışacaktır. Ben projemi ayrıca Netlify kullanarak yayına aldım.

Netlify Link: https://grkmwebdevelop.netlify.app/

---
*Umarım bu projedeki geliştirme adımları ve kod yapısı anlaşılır olmuştur!*
>>>>>>> initial commit
